const express = require("express");
const { Property, Categories } = require("../models");
const router = express.Router();
/* const Property = require("../models/property") */
router.get("/", (req, res, next) => {
  Property.findAll({ include: Categories })
    .then((props) => res.status(200).send(props))
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Property.findOne({
    where: {
      id: req.params.id,
    },
    include: Categories,
  })
    .then((property) => res.status(200).send(property))
    .catch(next);
});

// Ruta para agregar un producto***
//EJEMPLO DEL BODY:
// {
/* name:
   description: {
   price: {
   location: {
   image: {
   avalaible: 
   category:[departamento, vista al mar] */
// }

router.post("/newproperty", (req, res, next) => {
  const { name, description, price, location, image, category } = req.body;

  // encuentra la propiedad o la crea

  Property.findOrCreate({
    where: { name: name },
    defaults: {
      name,
      description,
      price,
      location,
      image,
    },
  }).then((property) => {
    //itera el array de categorias o las crea
    category.forEach((categ) => {
      Categories.findOrCreate({
        where: {
          name: categ,
        },
        defaults: {
          name: categ,
        },
      })
        .then((categ) => {
          // setea la categoria a la propiedad
          console.log("la propiedad a setear", property);
          console.log("la categoria", categ);
          property[0].addCategory(categ[0]);
          property[0].save();
          res.end();
        })
        .catch(next);
    });
  });
});

router.put("/edit/:id", (req, res, next) => {
  const { name, description, price, location, image, category } = req.body;
  let { id } = req.params;
  category.forEach((catg) => {
    Categories.findOrCreate({
      where: { name: catg },
      defaults: {
        name: catg,
      },
    }).then((catg) => {
      console.log("crea la categoria", catg);
      Property.findByPk(id).then((prop) => {
        console.log("encuentra la propiedad por id", prop);
        prop.getCategories().then((cats) => {
          console.log("hace getCategories", cats);
          prop.removeCategories(cats).then(() => {
            console.log("hace removeCategories");
            prop.addCategory(catg[0]);
            console.log("hace addCategories", catg[0]);
            prop.save();
          });
        });
      });
    });
  });
  Property.update(
    {
      name,
      description,
      price,
      location,
      image,
    },
    {
      where: { id },
      returning: true,
    }
  )
    .then(([n, propertyUpdated]) => {
      res.status(201).send(propertyUpdated[0]);
    })
    .catch(next);
});

router.get("/delete/:id", (req, res, next) => {
  Categories.destroy({
    where: { id: req.params.id },
  }).then(() => {
    res.sendStatus(204);
  });
});

module.exports = router;

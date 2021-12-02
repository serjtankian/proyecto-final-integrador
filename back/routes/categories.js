const express = require("express");
const { Categories } = require("../models");
const router = express.Router();

//Ruta para obtener todas las categorias (nombres)
router.get("/", (req, res, next) => {
  Categories.findAll().then((categories) => res.status(200).send(categories));
});

// Ruta para crear categorías
router.post("/create", (req, res, next) => {
  Categories.findOrCreate({
    where: { name: req.body.name },
    defaults: req.body,
  })
    .then((category) => {
      res.status(201).send(category[0]);
    })
    .catch(next);
});

// Ruta para editar categorias
router.put("/edit/:id", (req, res, next) => {
  let { id } = req.params;
  Categories.update(req.body, {
    where: { id },
    returning: true,
  })
    .then(([n, categoryUpdate]) => {
      res.status(202).send(categoryUpdate[0]);
    })
    .catch(next);
});

// Ruta para eliminar categorías
router.delete("/delete/:id", (req, res, next) => {
  Categories.destroy({
    where: { id: req.params.id },
  }).then(() => {
    res.sendStatus(204);
  });
});

module.exports = router;

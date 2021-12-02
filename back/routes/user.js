const express = require("express");
const passport = require("passport");
const User = require("../models/user");
const router = express.Router();

router.post("/register", (req, res, next) => {
  User.create(req.body)
    .then((user) => {
      res.status(201).send(user);
      console.log("user");
    })
    .catch(next);
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
  console.log("usuario logueado", req.user);
});

router.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});

router.get("/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  const userLogged = {
    email: req.user.email,
    password: req.user.password,
  };
  res.send(userLogged);
  console.log("remerber me");
});

// Don´t modify this route, keep it at the bottom.
router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;

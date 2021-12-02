const express = require("express");
const app = express();
const db = require("./db");
const routes = require("./routes");
const volleyball = require("volleyball");
const session = require("express-session");
const model = require("./models");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
app.use(volleyball);
app.use(helmet());
var cors = require("cors");

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(express.json());

app.use(cookieParser());

app.use(
  session({
    secret: "integrador",
    resave: true,
    saveUninitialized: true,
  })
);

require("./config/localStrategy");
app.use(passport.initialize());
app.use(passport.session());
app.use("/api", routes);

app.use(function (err, res) {
  res.sendStatus(500);
});

db.sync({ force: false }).then(() => {
  app.listen(3001, () => console.log("Servidor escuchando en el puerto 3001"));
});

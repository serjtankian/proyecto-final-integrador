require("dotenv").config();
const Sequelize = require("sequelize");
const db = new Sequelize(process.env.DBNAME, null, null, {
  local: "localhost",
  dialect: "postgres",
  logging: false,
});
console.log(process.env.DBNAME);
module.exports = db;

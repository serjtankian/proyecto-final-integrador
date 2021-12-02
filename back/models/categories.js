const sequelize = require("sequelize");
const db = require("../db");

class Categories extends sequelize.Model {}
Categories.init(
  {
    name: {
      type: sequelize.STRING,
    },
  },
  { sequelize: db, modelName: "categories" }
);

module.exports = Categories;

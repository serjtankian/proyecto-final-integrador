const sequelize = require("sequelize");
const db = require("../db");

class Favorite extends sequelize.Model {}

Favorite.init(
  {
    propId: {
      type: sequelize.STRING,
    },
  },
  { sequelize: db, modelName: "favorite" }
);

module.exports = Favorite;

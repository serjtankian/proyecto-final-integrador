const sequelize = require("sequelize");
const db = require("../db");

class Property extends sequelize.Model {}
Property.init(
  {
    name: {
      type: sequelize.STRING,
    },
    description: {
      type: sequelize.TEXT,
    },
    price: {
      type: sequelize.INTEGER,
    },
    location: {
      type: sequelize.STRING,
    },
    image: {
      type: sequelize.STRING,
    },
    truncate: {
      type: sequelize.VIRTUAL,
      get: function () {
        return this.description ? `${this.description.slice(0, 20)}...` : "";
      },
    },
  },
  { sequelize: db, modelName: "property" }
);

module.exports = Property;

const sequelize = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class User extends sequelize.Model {}

User.init(
  {
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
    },
    salt: {
      type: sequelize.STRING,
    },
    isAdmin: {
      type: sequelize.STRING,
    },
  },

  { sequelize: db, modelName: "user" }
);

User.prototype.hashpassword = function (password, salt) {
  return bcrypt.hash(password, salt);
};

User.beforeCreate((user) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hashpassword(user.password, salt);
    })
    .then((hash) => (user.password = hash));
});

module.exports = User;

const User = require("./user");
const Categories = require("./categories");
const Property = require("./property");
const Favorite = require("./favorite");

/* User.hasMany(Favorite);
Favorite.belongsTo(User);

Favorite.hasMany(Property);
*/
// tabla intermedia: parent-child
//¿ como puedo saber cual es el parent (source) y cual el child (target)?
Property.belongsToMany(Categories, { through: "categories-property" });
Categories.belongsToMany(Property, { through: "categories-property" });

module.exports = { User, Categories, Property, Favorite };

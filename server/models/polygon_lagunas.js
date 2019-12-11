const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const lagoon = sequelize.define(
  "polygon_lagunas_sugamuxi",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    geom: {
      type: Sequelize.GEOMETRY
    },
    name:{
      type: Sequelize.STRING
    }
  },
  {}
);
module.exports = lagoon;

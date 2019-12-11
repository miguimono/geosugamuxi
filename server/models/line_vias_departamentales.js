const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const departamental_road = sequelize.define(
  "line_vias_departamentales",
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
module.exports = departamental_road;

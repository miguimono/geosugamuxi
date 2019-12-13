const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const departamental_road = sequelize.define(
  "line_departamental_roads",
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

const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const national_road = sequelize.define(
  "line_vias_nacionales",
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
module.exports = national_road;

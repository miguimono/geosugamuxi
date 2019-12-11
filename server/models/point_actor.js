const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const actor = sequelize.define(
  "point_actor",
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
module.exports = actor;

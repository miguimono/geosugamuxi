const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const projects = sequelize.define(
  "point_projects",
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
    },
    description:{
      type: Sequelize.TEXT
    }
  },
  {}
);
module.exports = projects;

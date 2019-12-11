const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const polulated_center = sequelize.define(
  "polygon_centro_poblado_sugamuxi",
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
module.exports = polulated_center;

const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const service_experience = sequelize.define(
  "service_experience",
  {
    id_experience: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    id_service: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    type: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    }
  },
  {}
);
module.exports = service_experience;

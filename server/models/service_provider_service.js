const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const service_provider_service = sequelize.define(
  "service_provider_service",
  {
    id_service_provider: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    id_service: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    minimum_price: {
      type: Sequelize.INTEGER
    },
    maximum_price: {
      type: Sequelize.INTEGER
    },
    capacity: {
      type: Sequelize.STRING
    },
  },
  {}
);
module.exports = service_provider_service;

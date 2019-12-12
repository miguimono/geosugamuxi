const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const service_provider_tourist_plan = sequelize.define(
  "service_provider_tourist_plan",
  {
    id_service_provider: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    id_tourist_plan: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    terms: {
      type: Sequelize.TEXT
    },
    description: {
      type: Sequelize.TEXT
    },
    price: {
      type: Sequelize.TEXT
    }
  },
  {}
);
module.exports = service_provider_tourist_plan;

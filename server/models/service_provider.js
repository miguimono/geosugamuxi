const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const service_provider_tourist_plan = require('./service_provider_tourist_plan');
const service_provider_service = require('./service_provider_service');

const service_provider = sequelize.define(
  "service_provider",
  {
    id_service_provider: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    history: {
      type: Sequelize.TEXT
    },
    trajectory: {
      type: Sequelize.TEXT
    },
    start_date: {
      type: Sequelize.DATE
    },
    opening_hours: {
      type: Sequelize.TEXT
    },
    contact_name: {
      type: Sequelize.TEXT
    },
    contact_cell: {
      type: Sequelize.STRING
    },
    contact_phone: {
      type: Sequelize.STRING
    },
    contact_mail: {
      type: Sequelize.STRING
    },
    contact_web: {
      type: Sequelize.TEXT
    },
    sector: {
      type: Sequelize.STRING
    },
    sidewalk: {
      type: Sequelize.STRING
    },
    id_photo: {
      type: Sequelize.TEXT
    },
    geom: {
      type: Sequelize.GEOMETRY
    },
    fk_municipality: {
      type: Sequelize.INTEGER
    },
    is_visible: {
      type: Sequelize.BOOLEAN,
    }
  },
  {}
);
service_provider.hasMany(service_provider_tourist_plan, {foreignKey:'id_service_provider', sourceKey:'id_service_provider'});
service_provider_tourist_plan.belongsTo(service_provider, {foreignKey:'id_service_provider', sourceKey:'id_service_provider'});
service_provider.hasMany(service_provider_service, {foreignKey:'id_service_provider', sourceKey:'id_service_provider'});
service_provider_service.belongsTo(service_provider, {foreignKey:'id_service_provider', sourceKey:'id_service_provider'});
module.exports = service_provider;

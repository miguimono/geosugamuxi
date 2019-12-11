const Sequelize = require('sequelize');
const sequelize = require('../database/database');
const service_provider_service = require('./service_provider_service');
const service_experience = require('./service_experience');

const service = sequelize.define('service', {
    id_service:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
  }, {
  });
  service.hasMany(service_provider_service, {foreignKey:'id_service', sourceKey:'id_service'});
  service_provider_service.belongsTo(service, {foreignKey:'id_service', sourceKey:'id_service'});
  service.hasMany(service_experience, {foreignKey:'id_service', sourceKey:'id_service'});
  service_experience.belongsTo(service, {foreignKey:'id_service', sourceKey:'id_service'});
  module.exports = service ;

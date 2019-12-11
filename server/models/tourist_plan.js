const Sequelize = require('sequelize');
const sequelize = require('../database/database');
const service_provider_tourist_plan = require('./service_provider_tourist_plan');

const tourist_plan = sequelize.define('tourist_plan', {
    id_tourist_plan:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
    }
  }, {
  });
  tourist_plan.hasMany(service_provider_tourist_plan, {foreignKey:'id_tourist_plan', sourceKey:'id_tourist_plan'});
  service_provider_tourist_plan.belongsTo(tourist_plan, {foreignKey:'id_tourist_plan', sourceKey:'id_tourist_plan'});
  module.exports = tourist_plan ;

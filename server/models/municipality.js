const Sequelize = require('sequelize');
const sequelize = require('../database/database');
const service_provider = require('./service_provider');

const municipality = sequelize.define('municipality', {
    id_municipality:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
    },
    fk_province:{
        type: Sequelize.INTEGER,
    },
    geom: {
      type: Sequelize.GEOMETRY
    },
  }, {
  });
  municipality.hasMany(service_provider, {foreignKey:'fk_municipality', sourceKey:'id_municipality'});
  service_provider.belongsTo(municipality, {foreignKey:'fk_municipality', sourceKey:'id_municipality'});
  module.exports = municipality ;

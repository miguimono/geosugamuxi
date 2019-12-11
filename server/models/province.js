const Sequelize = require('sequelize');
const sequelize = require('../database/database');
const municipality = require('./municipality');

const province = sequelize.define('province', {
    id_province:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
    },
    fk_department:{
        type: Sequelize.INTEGER,
    },
    is_visible: {
      type: Sequelize.BOOLEAN,
    },
    geom: {
      type: Sequelize.GEOMETRY
    },
  }, {
  });
  province.hasMany(municipality, {foreignKey:'fk_province', sourceKey:'id_province'});
  municipality.belongsTo(province, {foreignKey:'fk_province', sourceKey:'id_province'});
  module.exports = province ;

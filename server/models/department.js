const Sequelize = require('sequelize');
const sequelize = require('../database/database');
const province = require('./province');
const department = sequelize.define('department', {
    id_department:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
    },
    is_visible: {
      type: Sequelize.BOOLEAN,
    },
    geom: {
      type: Sequelize.GEOMETRY
    },
  }, {
  });
  department.hasMany(province, {foreignKey:'fk_department', sourceKey:'id_department'});
  province.belongsTo(department, {foreignKey:'fk_department', sourceKey:'id_department'});
  module.exports = department ;

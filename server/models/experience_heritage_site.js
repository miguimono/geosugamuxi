const Sequelize = require('sequelize');
const sequelize = require('../database/database');


const experience_heritage_site = sequelize.define('experience_heritage_site', {
    id_experience:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_heritage_site: {
      type: Sequelize.INTEGER,
      primaryKey: true
    }
  }, {
  });
  module.exports = experience_heritage_site ;

const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const service_experience = require("./service_experience");
const experience_heritage_site = require("./experience_heritage_site");

const experience = sequelize.define(
  "experience",
  {
    id_experience: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.TEXT
    },
    slogan: {
      type: Sequelize.TEXT
    },
    short_history: {
      type: Sequelize.TEXT
    },
    history: {
      type: Sequelize.TEXT
    },
    recommendations: {
      type: Sequelize.TEXT
    },
    id_photo_360: {
      type: Sequelize.STRING
    },
    id_gallery: {
      type: Sequelize.STRING
    }
  },
  {}
);
experience.hasMany(service_experience, {
  foreignKey: "id_experience",
  sourceKey: "id_experience"
});
service_experience.belongsTo(experience, {
  foreignKey: "id_experience",
  sourceKey: "id_experience"
});
experience.hasMany(experience_heritage_site, {
  foreignKey: "id_experience",
  sourceKey: "id_experience"
});
experience_heritage_site.belongsTo(experience, {
  foreignKey: "id_experience",
  sourceKey: "id_experience"
});
module.exports = experience;

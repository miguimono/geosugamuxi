const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const experience_heritage_site = require("./experience_heritage_site");

const heritage_site = sequelize.define(
  "heritage_site",
  {
    id_heritage_site: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    type: {
      type: Sequelize.STRING
    },
    geom: {
      type: Sequelize.GEOMETRY
    },
    is_visible: {
      type: Sequelize.BOOLEAN,
    }
  },
  {}
);
heritage_site.hasMany(experience_heritage_site, {
  foreignKey: "id_heritage_site",
  sourceKey: "id_heritage_site"
});
experience_heritage_site.belongsTo(heritage_site, {
  foreignKey: "id_heritage_site",
  sourceKey: "id_heritage_site"
});
module.exports = heritage_site;

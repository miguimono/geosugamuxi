const Sequelize = require("sequelize");

var sequelize = new Sequelize("geosugamuxi", "postgres", "", {
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: false,
    freezeTableName: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false,
  port: 5432
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;

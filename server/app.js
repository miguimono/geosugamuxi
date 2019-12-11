const express = require("express");
const morgan = require("morgan");

//var homeRouter = require('./routes/home');
var router_heritage_site = require("./routes/heritage_site");
var router_experience = require("./routes/experience");
var router_service = require("./routes/service");
var router_service_provider = require("./routes/service_provider");
var router_municipality = require("./routes/municipality");
var router_province = require("./routes/province");
var router_department = require("./routes/department");

var router_lines = require("./routes/lines");
var router_polygons = require("./routes/polygons");
var router_points = require("./routes/points");

const app = express();
const port = 3000;
const allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};

app.use(morgan("dev"));

app.use(allowCrossDomain);

//app.use('/', homeRouter);

app.use("/", router_heritage_site);
app.use("/", router_experience);
app.use("/", router_service);
app.use("/", router_service_provider);
app.use("/", router_municipality);
app.use("/", router_province);
app.use("/", router_department);

app.use("/", router_lines);
app.use("/", router_polygons);
app.use("/", router_points);

app.get("/", (req, res) => res.send("GeoSugamuxi started!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
module.exports = app;

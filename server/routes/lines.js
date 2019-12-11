var express = require("express");
var router = express.Router();

const controller_lines = require("../controllers/lines");
router.get("/api/departamental_roads", controller_lines.getDepartamentalRoads);
router.get("/api/national_roads", controller_lines.getNationalRoads);

module.exports = router;

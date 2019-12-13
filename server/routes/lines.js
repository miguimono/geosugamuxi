var express = require("express");
var router = express.Router();

const controller_lines = require("../controllers/lines");
router.get("/api/departamental_roads", controller_lines.getDepartamentalRoads);

module.exports = router;

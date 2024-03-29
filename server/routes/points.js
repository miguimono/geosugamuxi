var express = require("express");
var router = express.Router();

const controller_points = require("../controllers/points");
router.get("/api/projects", controller_points.getProjects);

module.exports = router;

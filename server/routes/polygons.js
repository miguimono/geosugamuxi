var express = require("express");
var router = express.Router();

const controller_polygons = require("../controllers/polygons");
router.get("/api/lagoon_sugamuxi", controller_polygons.getLagoon);

module.exports = router;

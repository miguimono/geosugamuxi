var express = require("express");
var router = express.Router();

const controller_heritage_site = require("../controllers/heritage_site");
//Obtener todas los patromonios en GeoJson
router.get("/api/heritage_site_data", controller_heritage_site.getHeritageSiteData);
router.get("/api/heritage_site", controller_heritage_site.getHeritageSite);
router.get("/api/heritage_site/:name_heritage_site",controller_heritage_site.getHeritageSiteByName);
router.get("/api/heritage_site/type/:type",controller_heritage_site.getHeritageSiteByType);
module.exports = router;

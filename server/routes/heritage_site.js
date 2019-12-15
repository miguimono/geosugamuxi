var express = require("express");
var router = express.Router();

const controller_heritage_site = require("../controllers/heritage_site");
//Obtener todas los patromonios en GeoJson
router.get("/api/heritage_site_data", controller_heritage_site.getHeritageSiteData);
router.get("/api/heritage_site_coord", controller_heritage_site.getHeritageSiteCoord);
router.get("/api/heritage_site_basic", controller_heritage_site.getHeritageSiteBasic);
router.get("/api/heritage_site", controller_heritage_site.getHeritageSite);
router.get("/api/heritage_site_name/:name_heritage_site",controller_heritage_site.getHeritageSiteByName);
router.get("/api/heritage_site/:id_heritage_site",controller_heritage_site.getHeritageSiteById);
router.get("/api/heritage_site_type/:type",controller_heritage_site.getHeritageSiteByType);
router.get("/api/heritage_site_size", controller_heritage_site.getHeritageSiteSize);
module.exports = router;

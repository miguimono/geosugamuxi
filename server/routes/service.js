var express = require("express");
var router = express.Router();

const controller_service = require("../controllers/service");


router.get("/api/service_data", controller_service.getServiceData);
router.get("/api/service", controller_service.getService);
router.get("/api/service/:name_service",controller_service.getServiceByName);
router.get("/api/service/type/:type_service",controller_service.getServiceByType);
module.exports = router;

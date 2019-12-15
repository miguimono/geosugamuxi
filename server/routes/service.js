var express = require("express");
var router = express.Router();

const controller_service = require("../controllers/service");


router.get("/api/service_data", controller_service.getServiceData);
router.get("/api/service_basic", controller_service.getServiceBasic);
router.get("/api/service", controller_service.getService);
router.get("/api/service_name/:name_service",controller_service.getServiceByName);
router.get("/api/service/:id_service",controller_service.getServiceById);
router.get("/api/service_type/:type_service",controller_service.getServiceByType);
router.get("/api/service_size",controller_service.getServiceSize);
module.exports = router;

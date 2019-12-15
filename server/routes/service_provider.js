var express = require("express");
var router = express.Router();

const controller_service_provider = require("../controllers/service_provider");


router.get("/api/service_provider_data", controller_service_provider.getServiceProviderData);
router.get("/api/service_provider_coord", controller_service_provider.getServiceProviderCoord);
router.get("/api/service_provider_basic", controller_service_provider.getServiceProviderBasic);
router.get("/api/service_provider", controller_service_provider.getServiceProvider);
router.get("/api/service_provider_name/:name_service_provider",controller_service_provider.getServiceProviderByName);
router.get("/api/service_provider/:id_service_provider",controller_service_provider.getServiceProviderById);
router.get("/api/service_provider_size", controller_service_provider.getServiceProviderSize);
module.exports = router;

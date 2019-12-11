var express = require("express");
var router = express.Router();

const controller_service_provider = require("../controllers/service_provider");


router.get("/api/service_provider_data", controller_service_provider.getServiceProviderData);
router.get("/api/service_provider", controller_service_provider.getServiceProvider);
router.get("/api/service_provider/:name_service_provider",controller_service_provider.getServiceProviderByName);
module.exports = router;

var express = require("express");
var router = express.Router();

const controller_province = require("../controllers/province");

//Obtener todas las experiencias segun de modalidad en Json
router.get("/api/province_data", controller_province.getProvinceData);
router.get("/api/province_coord", controller_province.getProvinceCoord);
router.get("/api/province", controller_province.getProvince);
router.get("/api/province/:name_province", controller_province.getProvinceByName);

module.exports = router;

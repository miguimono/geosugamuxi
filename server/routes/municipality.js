var express = require("express");
var router = express.Router();

const controller_municipality = require("../controllers/municipality");

//Obtener todas las experiencias segun de modalidad en Json
router.get("/api/municipality_data", controller_municipality.getMunicipalityData);
router.get("/api/municipality", controller_municipality.getMunicipality);
router.get("/api/municipality/:name_municipality", controller_municipality.getMunicipalityByName);

module.exports = router;

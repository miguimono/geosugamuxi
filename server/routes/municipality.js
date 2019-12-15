var express = require("express");
var router = express.Router();

const controller_municipality = require("../controllers/municipality");

//Obtener todas las experiencias segun de modalidad en Json
router.get("/api/municipality_data", controller_municipality.getMunicipalityData);
router.get("/api/municipality_coord", controller_municipality.getMunicipalityCoord);
router.get("/api/municipality_basic", controller_municipality.getMunicipalityBasic);
router.get("/api/municipality", controller_municipality.getMunicipality);
router.get("/api/municipality_name/:name_municipality", controller_municipality.getMunicipalityByName);
router.get("/api/municipality/:id_municipality", controller_municipality.getMunicipalityById);

module.exports = router;

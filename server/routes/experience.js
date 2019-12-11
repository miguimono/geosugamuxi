var express = require("express");
var router = express.Router();

const controller_experience = require("../controllers/experience");

//Obtener todas las experiencias en GeoJson
router.get("/api/experience_data", controller_experience.getExperienceData);
router.get("/api/experience", controller_experience.getExperience);
router.get("/api/experience/:name_experience",controller_experience.getExperienceByName);
module.exports = router;

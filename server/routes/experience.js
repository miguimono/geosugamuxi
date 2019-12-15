var express = require("express");
var router = express.Router();

const controller_experience = require("../controllers/experience");

//Obtener todas las experiencias en GeoJson
router.get("/api/experience_data", controller_experience.getExperienceData);
router.get("/api/experience_basic", controller_experience.getExperienceBasic);
router.get("/api/experience", controller_experience.getExperience);
router.get("/api/experience_name/:name_experience",controller_experience.getExperienceByName);
router.get("/api/experience/:id_experience",controller_experience.getExperienceById);
router.get("/api/experience_size", controller_experience.getExperienceSize);
module.exports = router;
 
var express = require("express");
var router = express.Router();

const controller_department = require("../controllers/department");

//Obtener todas las experiencias segun de modalidad en Json
router.get("/api/department_data", controller_department.getDepartmentData);
router.get("/api/department_coord", controller_department.getDepartmentCoord);
router.get("/api/department", controller_department.getDepartment);
router.get("/api/department/:name_department", controller_department.getDepartmentByName);

module.exports = router;

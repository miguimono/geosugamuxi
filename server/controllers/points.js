var GeoJSON = require("geojson");


var point_projects = require("../models/projects");

module.exports = {
  
  async getProjects(req, res) {
    let projects = await point_projects.findAll({
      attributes: ["id", "geom", "name", "description"]
    });
    var data = [];
    for (var i = 0; i < projects.length; i++) {
      data.push({
        id: projects[i].id,
        name: projects[i].name,
        description: projects[i].description,
        coordinates: projects[i].geom.coordinates
      });
    }
    let get_projects = GeoJSON.parse(data, { Point: "coordinates" });
    res.json(get_projects);
  }
};

var GeoJSON = require("geojson");

var point_actor = require("../models/point_actor");
var point_projects = require("../models/projects");

module.exports = {
  async getActor(req, res) {
    let actor = await point_actor.findAll({
      attributes: ["id", "geom", "name"]
    });
    var data = [];
    for (var i = 0; i < actor.length; i++) {
      data.push({
        id: actor[i].id,
        name: actor[i].name,
        coordinates: actor[i].geom.coordinates
      });
    }
    let get_actor = GeoJSON.parse(data, { Point: "coordinates" });
    res.json(get_actor);
  },
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

var GeoJSON = require("geojson");

var line_vias_departamentales = require("../models/line_vias_departamentales");
var line_vias_nacionales = require("../models/line_vias_nacionales");

module.exports = {
  async getDepartamentalRoads(req, res) {
    let departamental_roads = await line_vias_departamentales.findAll({
        attributes: [
            "id",
            "geom",
            "name"
          ],
    });
    var data = [];
    for (var i = 0; i < departamental_roads.length; i++) {
      data.push({
        id: departamental_roads[i].id,
        name: departamental_roads[i].name,
        coordinates: departamental_roads[i].geom.coordinates,
      });
    }
    let get_departamental_roads = GeoJSON.parse(data, { MultiLineString: "coordinates" });
    res.json(get_departamental_roads);
  },
  async getNationalRoads(req, res) {
    let vias_nacionales = await line_vias_nacionales.findAll({
        attributes: [
            "id",
            "geom",
            "name"
          ],
    });
    var data = [];
    for (var i = 0; i < vias_nacionales.length; i++) {
      data.push({
        id: vias_nacionales[i].id,
        name: vias_nacionales[i].name,
        coordinates: vias_nacionales[i].geom.coordinates,
      });
    }
    let get_vias_nacionales = GeoJSON.parse(data, { MultiLineString: "coordinates" });
    res.json(get_vias_nacionales);
  }
};

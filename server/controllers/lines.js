var GeoJSON = require("geojson");

var line_departamental_roads = require("../models/line_departamental_roads");


module.exports = {
  async getDepartamentalRoads(req, res) {
    let departamental_roads = await line_departamental_roads.findAll({
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
  
};

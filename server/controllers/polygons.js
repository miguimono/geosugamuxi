var GeoJSON = require("geojson");

var polygon_centro_poblado = require("../models/polygon_centro_poblado");
var polygon_lagunas = require("../models/polygon_lagunas");

module.exports = {
  async getPopulatedCenter(req, res) {
    let populated_center_sugamuxi = await polygon_centro_poblado.findAll({
        attributes: [
            "id",
            "geom",
            "name"
          ],
    });
    var data = [];
    for (var i = 0; i < populated_center_sugamuxi.length; i++) {
      data.push({
        id: populated_center_sugamuxi[i].id,
        name: populated_center_sugamuxi[i].name,
        coordinates: populated_center_sugamuxi[i].geom.coordinates,
      });
    }
    let get_populated_center_sugamuxi = GeoJSON.parse(data, { MultiPolygon: "coordinates" });
    res.json(get_populated_center_sugamuxi);
  },
  async getLagoon(req, res) {
    let lagoon_sugamuxi = await polygon_lagunas.findAll({
        attributes: [
            "id",
            "geom",
            "name"
          ],
    });
    var data = [];
    for (var i = 0; i < lagoon_sugamuxi.length; i++) {
      data.push({
        id: lagoon_sugamuxi[i].id,
        name: lagoon_sugamuxi[i].name,
        coordinates: lagoon_sugamuxi[i].geom.coordinates,
      });
    }
    let get_lagoon_sugamuxi = GeoJSON.parse(data, { MultiPolygon: "coordinates" });
    res.json(get_lagoon_sugamuxi);
  }

};

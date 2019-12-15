var GeoJSON = require("geojson");

var polygon_lagunas = require("../models/polygon_lagunas");

module.exports = {
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

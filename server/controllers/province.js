var GeoJSON = require("geojson");

var model_municipality = require("../models/municipality");
var model_province = require("../models/province");
var model_department = require("../models/department");
var model_service_provider = require("../models/service_provider");

module.exports = {
  async getProvinceData(req, res) {
    let province = await model_province.findAll({
      include: [
        {
          model: model_municipality,
          include: [{ model: model_service_provider }]
        },
        {
          model: model_department
        }
      ]
    });
    res.json(province);
  },
  async getProvince(req, res) {
    let province = await model_province.findAll({
      include: [
        {
          model: model_municipality,
          include: [{ model: model_service_provider }]
        },
        {
          model: model_department
        }
      ]
    });
    var data = [];
    var service_provider = [];
    var municipality = [];

    for (var i = 0; i < province.length; i++) {
      municipality = [];
      for (let j = 0; j < province[i].municipalities.length; j++) {
        service_provider = [];
        for (
          let k = 0;
          k < province[i].municipalities[j].service_providers.length;
          k++
        ) {
          service_provider.push({
            name_service_provider:
              province[i].municipalities[j].service_providers[k].name
          });
        }

        municipality.push({
          name_municipality: province[i].municipalities[j].name,
          service_provider: service_provider
        });
      }
      data.push({
        id_province: province[i].id_province,
        name_province: province[i].name,
        coordinates: province[i].geom.coordinates,
        name_department: province[i].department.name,
        municipality: municipality
      });
    }
    let get_province = GeoJSON.parse(data, { MultiPolygon: "coordinates" });
    res.json(get_province);
  },
  async getProvinceByName(req, res) {
    let province = await model_province.findAll({
      include: [
        {
          model: model_municipality,
          include: [{ model: model_service_provider }]
        },
        {
          model: model_department
        }
      ],
      where: {
        name: req.params.name_province
      }
    });
    var data = [];
    var service_provider = [];
    var municipality = [];

    for (var i = 0; i < province.length; i++) {
      municipality = [];
      for (let j = 0; j < province[i].municipalities.length; j++) {
        service_provider = [];
        for (
          let k = 0;
          k < province[i].municipalities[j].service_providers.length;
          k++
        ) {
          service_provider.push({
            name_service_provider:
              province[i].municipalities[j].service_providers[k].name
          });
        }

        municipality.push({
          name_municipality: province[i].municipalities[j].name,
          service_provider: service_provider
        });
      }
      data.push({
        id_province: province[i].id_province,
        name_province: province[i].name,
        coordinates: province[i].geom.coordinates,
        name_department: province[i].department.name,
        municipality: municipality
      });
    }
    let get_province = GeoJSON.parse(data, { MultiPolygon: "coordinates" });
    res.json(get_province);
  }
};

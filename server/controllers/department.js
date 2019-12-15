var GeoJSON = require("geojson");

var model_municipality = require("../models/municipality");
var model_province = require("../models/province");
var model_department = require("../models/department");
var model_service_provider = require("../models/service_provider");

module.exports = {
  async getDepartmentData(req, res) {
    let department = await model_department.findAll({
      include: [
        {
          model: model_province,
          include: [
            {
              model: model_municipality,
              include: [{ model: model_service_provider }]
            }
          ]
        }
      ]
    });
    res.json(department);
  },
  async getDepartment(req, res) {
    let department = await model_department.findAll({
      include: [
        {
          model: model_province,
          include: [
            {
              model: model_municipality,
              include: [{ model: model_service_provider }]
            }
          ]
        }
      ]
    });
    var data = [];
    var service_provider = [];
    var municipality = [];
    var province = [];

    for (var i = 0; i < department.length; i++) {
      province = [];
      for (let j = 0; j < department[i].provinces.length; j++) {
        municipality = [];
        for (
          let k = 0;
          k < department[i].provinces[j].municipalities.length;
          k++
        ) {
          service_provider = [];
          for (
            let l = 0;
            l <
            department[i].provinces[j].municipalities[k].service_providers
              .length;
            l++
          ) {
            service_provider.push({
              name_service_provider:
                department[i].provinces[j].municipalities[k].service_providers[
                  l
                ].name
            });
          }
          municipality.push({
            name_municipality:
              department[i].provinces[j].municipalities[k].name,
            service_provider: service_provider
          });
        }

        province.push({
          name_province: department[i].provinces[j].name,
          municipality: municipality
        });
      }
      data.push({
        id_department: department[i].id_department,
        name_department: department[i].name,
        coordinates: department[i].geom.coordinates,
        is_visible: department[i].is_visible,
        province: province
      });
    }
    let get_department = GeoJSON.parse(data, { MultiPolygon: "coordinates" });
    res.json(get_department);
  },
  async getDepartmentCoord(req, res) {
    let department = await model_department.findAll({});
    var data = [];
    for (var i = 0; i < department.length; i++) {
      data.push({
        id_department: department[i].id_department,
        name_department: department[i].name,
        coordinates: department[i].geom.coordinates
      });
    }
    let get_department = GeoJSON.parse(data, { MultiPolygon: "coordinates" });
    res.json(get_department);
  },
  async getDepartmentByName(req, res) {
    let department = await model_department.findAll({
      include: [
        {
          model: model_province,
          include: [
            {
              model: model_municipality,
              include: [{ model: model_service_provider }]
            }
          ]
        }
      ],
      where: {
        name: req.params.name_department
      }
    });
    var data = [];
    var service_provider = [];
    var municipality = [];
    var province = [];

    for (var i = 0; i < department.length; i++) {
      province = [];
      for (let j = 0; j < department[i].provinces.length; j++) {
        municipality = [];
        for (
          let k = 0;
          k < department[i].provinces[j].municipalities.length;
          k++
        ) {
          service_provider = [];
          for (
            let l = 0;
            l <
            department[i].provinces[j].municipalities[k].service_providers
              .length;
            l++
          ) {
            service_provider.push({
              name_service_provider:
                department[i].provinces[j].municipalities[k].service_providers[
                  l
                ].name
            });
          }
          municipality.push({
            name_municipality:
              department[i].provinces[j].municipalities[k].name,
            service_provider: service_provider
          });
        }

        province.push({
          name_province: department[i].provinces[j].name,
          municipality: municipality
        });
      }
      data.push({
        id_department: department[i].id_department,
        name_department: department[i].name,
        coordinates: department[i].geom.coordinates,
        is_visible: department[i].is_visible,
        province: province
      });
    }
    let get_department = GeoJSON.parse(data, { MultiPolygon: "coordinates" });
    res.json(get_department);
  }
};

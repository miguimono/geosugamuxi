var GeoJSON = require("geojson");

var model_municipality = require("../models/municipality");

var model_province = require("../models/province");
var model_department = require("../models/department");

var model_service_provider_service = require("../models/service_provider_service");
var model_service_provider = require("../models/service_provider");
var model_service = require("../models/service");

module.exports = {
  async getMunicipalityData(req, res) {
    let municipality = await model_municipality.findAll({
      include: [
        {
          model: model_province,
          include: [{ model: model_department }]
        },
        {
          model: model_service_provider,
          include: [
            {
              model: model_service_provider_service,
              include: [{ model: model_service }]
            }
          ]
        }
      ]
    });
    res.json(municipality);
  },
  async getMunicipality(req, res) {
    let municipality = await model_municipality.findAll({
      include: [
        {
          model: model_province,
          include: [{ model: model_department }]
        },
        {
          model: model_service_provider,
          include: [
            {
              model: model_service_provider_service,
              include: [{ model: model_service }]
            }
          ]
        }
      ]
    });
    var data = [];
    var service_provider = [];
    var service = [];

    for (var i = 0; i < municipality.length; i++) {
      service_provider = [];
      for (let j = 0; j < municipality[i].service_providers.length; j++) {
        service = [];
        for (
          let k = 0;
          k <
          municipality[i].service_providers[j].service_provider_services.length;
          k++
        ) {
          service.push({
            service_name_service:
              municipality[i].service_providers[j].service_provider_services[k]
                .service.name,
            
          });
        }

        service_provider.push({
          id_service_provider: municipality[i].service_providers[j].id_service_provider,
          name_service_provider: municipality[i].service_providers[j].name,
          services: service
        });
      }
      data.push({
        id_municipality: municipality[i].id_municipality,
        name_municipality: municipality[i].name,
        coordinates: municipality[i].geom.coordinates,
        is_visible: municipality[i].province.department.is_visible,
        name_province: municipality[i].province.name,
        name_department: municipality[i].province.department.name,
        service_provider: service_provider
      });
    }
    let get_municipality = GeoJSON.parse(data, { MultiPolygon: "coordinates" });
    res.json(get_municipality);
  },
  async getMunicipalityByName(req, res) {
    let municipality = await model_municipality.findAll({
      include: [
        {
          model: model_province,
          include: [{ model: model_department }]
        },
        {
          model: model_service_provider,
          include: [
            {
              model: model_service_provider_service,
              include: [{ model: model_service }]
            }
          ]
        }
      ],
      where: {
        name: req.params.name_municipality
      }
    });
    var data = [];
    var service_provider = [];
    var service = [];
    for (var i = 0; i < municipality.length; i++) {
      service_provider = [];
      for (let j = 0; j < municipality[i].service_providers.length; j++) {
        service = [];
        for (
          let k = 0;
          k <
          municipality[i].service_providers[j].service_provider_services.length;
          k++
        ) {
          service.push({
            name_service:
              municipality[i].service_providers[j].service_provider_services[k]
                .service.name
          });
        }
        service_provider.push({
          id_service_provider: municipality[i].service_providers[j].id_service_provider,
          name_service_provider: municipality[i].service_providers[j].name,
          services: service
        });
      }
      data.push({
        id_municipality: municipality[i].id_municipality,
        name_municipality: municipality[i].name,
        is_visible_municipality: municipality[i].province.department.is_visible,
        coordinates: municipality[i].geom.coordinates,
        name_province: municipality[i].province.name,        
        name_department: municipality[i].province.department.name,
        service_provider: service_provider
      });
    }
    let get_municipality = GeoJSON.parse(data, { MultiPolygon: "coordinates" });
    res.json(get_municipality);
  }
};

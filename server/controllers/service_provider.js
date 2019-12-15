var GeoJSON = require("geojson");

var model_service_provider = require("../models/service_provider");
var model_service = require("../models/service");
var model_service_experience = require("../models/service_experience");

var model_experience = require("../models/experience");
var model_service_provider_service = require("../models/service_provider_service");

var model_service_provider_tourist_plan = require("../models/service_provider_tourist_plan");
var model_tourist_plan = require("../models/tourist_plan");

var model_municipality = require("../models/municipality");
var model_province = require("../models/province");
var model_department = require("../models/department");

module.exports = {
  async getServiceProviderData(req, res) {
    let service_provider = await model_service_provider.findAll({
      include: [
        {
          model: model_service_provider_tourist_plan,
          include: [{ model: model_tourist_plan }]
        },
        {
          model: model_service_provider_service,
          include: [
            {
              model: model_service,
              include: [
                {
                  model: model_service_experience,
                  include: [{ model: model_experience }]
                }
              ]
            }
          ]
        },
        {
          model: model_municipality,
          include: [
            { model: model_province, include: [{ model: model_department }] }
          ]
        }
      ]
    });
    res.json(service_provider);
  },
  //Muestra las experiencias en formato geojson de forma organizada y simple
  async getServiceProvider(req, res) {
    let service_provider = await model_service_provider.findAll({
      include: [
        {
          model: model_service_provider_tourist_plan,
          include: [{ model: model_tourist_plan }]
        },
        {
          model: model_service_provider_service,
          include: [
            {
              model: model_service
            }
          ]
        },
        {
          model: model_municipality,
          include: [
            { model: model_province, include: [{ model: model_department }] }
          ]
        }
      ]
    });
    var data = [];
    var tourist_plan = [];
    var services = [];

    for (var i = 0; i < service_provider.length; i++) {
      tourist_plan = [];
      for (
        let j = 0;
        j < service_provider[i].service_provider_tourist_plans.length;
        j++
      ) {
        tourist_plan.push({
          name_tourist_plan:
            service_provider[i].service_provider_tourist_plans[j].tourist_plan
              .name,
          terms: service_provider[i].service_provider_tourist_plans[j].terms,
          description:
            service_provider[i].service_provider_tourist_plans[j].description,
          price: service_provider[i].service_provider_tourist_plans[j].price
        });
      }
      services = [];
      for (
        let j = 0;
        j < service_provider[i].service_provider_services.length;
        j++
      ) {
        services.push({
          name_service:
            service_provider[i].service_provider_services[j].service.name,
          minimum_price:
            service_provider[i].service_provider_services[j].minimum_price,
          maximum_price:
            service_provider[i].service_provider_services[j].maximum_price,
          capacity: service_provider[i].service_provider_services[j].capacity
        });
      }
      data.push({
        id_service_provider: service_provider[i].id_service_provider,
        name: service_provider[i].name,
        address: service_provider[i].address,
        history: service_provider[i].history,
        trajectory: service_provider[i].trajectory,
        start_date: service_provider[i].start_date,
        opening_hours: service_provider[i].opening_hours,
        contact_name: service_provider[i].contact_name,
        contact_cell: service_provider[i].contact_cell,
        contact_phone: service_provider[i].contact_phone,
        contact_main: service_provider[i].contact_main,
        contact_web: service_provider[i].contact_web,
        sector: service_provider[i].sector,
        sidewalk: service_provider[i].sidewalk,
        name_municipality: service_provider[i].municipality.name,
        name_province: service_provider[i].municipality.province.name,
        name_department:
          service_provider[i].municipality.province.department.name,
        id_photo: service_provider[i].id_photo,
        is_visible: service_provider[i].is_visible,
        coordinates: service_provider[i].geom.coordinates,
        tourist_plan: tourist_plan,
        services: services
      });
    }
    let getServiceProvider = GeoJSON.parse(data, { Point: "coordinates" });
    res.json(getServiceProvider);
  },
  async getServiceProviderCoord(req, res) {
    let service_provider = await model_service_provider.findAll({});
    var data = [];

    for (var i = 0; i < service_provider.length; i++) {
      data.push({
        id_service_provider: service_provider[i].id_service_provider,
        name: service_provider[i].name,
        coordinates: service_provider[i].geom.coordinates,
        is_visible: service_provider[i].is_visible,
      });
    }
    let getServiceProvider = GeoJSON.parse(data, { Point: "coordinates" });
    res.json(getServiceProvider);
  },
  async getServiceProviderBasic(req, res) {
    let service_provider = await model_service_provider.findAll({
      include: [
        {
          model: model_service_provider_tourist_plan,
          include: [{ model: model_tourist_plan }]
        },
        {
          model: model_service_provider_service,
          include: [
            {
              model: model_service
            }
          ]
        }
      ]
    });
    var data = [];
    var tourist_plan = [];
    var services = [];

    for (var i = 0; i < service_provider.length; i++) {
      tourist_plan = [];
      for (
        let j = 0;
        j < service_provider[i].service_provider_tourist_plans.length;
        j++
      ) {
        tourist_plan.push({
          name_tourist_plan:
            service_provider[i].service_provider_tourist_plans[j].tourist_plan
              .name
        });
      }
      services = [];
      for (
        let j = 0;
        j < service_provider[i].service_provider_services.length;
        j++
      ) {
        services.push({
          name_service:
            service_provider[i].service_provider_services[j].service.name
        });
      }
      data.push({
        id_service_provider: service_provider[i].id_service_provider,
        name: service_provider[i].name,
        history: service_provider[i].history,
        tourist_plan: tourist_plan,
        services: services
      });
    }

    res.json(data);
  },
  async getServiceProviderByName(req, res) {
    let service_provider = await model_service_provider.findAll({
      include: [
        {
          model: model_service_provider_tourist_plan,
          include: [{ model: model_tourist_plan }]
        },
        {
          model: model_service_provider_service,
          include: [
            {
              model: model_service
            }
          ]
        },
        {
          model: model_municipality,
          include: [
            { model: model_province, include: [{ model: model_department }] }
          ]
        }
      ],
      where: {
        name: req.params.name_service_provider
      }
    });
    var data = [];
    var tourist_plan = [];
    var services = [];

    for (var i = 0; i < service_provider.length; i++) {
      tourist_plan = [];
      for (
        let j = 0;
        j < service_provider[i].service_provider_tourist_plans.length;
        j++
      ) {
        tourist_plan.push({
          name_tourist_plan:
            service_provider[i].service_provider_tourist_plans[j].tourist_plan
              .name,
          terms: service_provider[i].service_provider_tourist_plans[j].terms,
          description:
            service_provider[i].service_provider_tourist_plans[j].description,
          price: service_provider[i].service_provider_tourist_plans[j].price
        });
      }
      services = [];
      for (
        let j = 0;
        j < service_provider[i].service_provider_services.length;
        j++
      ) {
        services.push({
          name_service:
            service_provider[i].service_provider_services[j].service.name,
          minimum_price:
            service_provider[i].service_provider_services[j].minimum_price,
          maximum_price:
            service_provider[i].service_provider_services[j].maximum_price,
          capacity: service_provider[i].service_provider_services[j].capacity
        });
      }
      data.push({
        id_service_provider: service_provider[i].id_service_provider,
        name: service_provider[i].name,
        address: service_provider[i].address,
        history: service_provider[i].history,
        trajectory: service_provider[i].trajectory,
        start_date: service_provider[i].start_date,
        opening_hours: service_provider[i].opening_hours,
        contact_name: service_provider[i].contact_name,
        contact_cell: service_provider[i].contact_cell,
        contact_phone: service_provider[i].contact_phone,
        contact_mail: service_provider[i].contact_mail,
        contact_web: service_provider[i].contact_web,
        sector: service_provider[i].sector,
        sidewalk: service_provider[i].sidewalk,
        name_municipality: service_provider[i].municipality.name,
        name_province: service_provider[i].municipality.province.name,
        name_department:
          service_provider[i].municipality.province.department.name,
        id_photo: service_provider[i].id_photo,
        is_visible: service_provider[i].is_visible,
        coordinates: service_provider[i].geom.coordinates,
        tourist_plan: tourist_plan,
        services: services
      });
    }
    let getServiceProvider = GeoJSON.parse(data, { Point: "coordinates" });
    res.json(getServiceProvider);
  },
  async getServiceProviderById(req, res) {
    let service_provider = await model_service_provider.findAll({
      include: [
        {
          model: model_service_provider_tourist_plan,
          include: [{ model: model_tourist_plan }]
        },
        {
          model: model_service_provider_service,
          include: [
            {
              model: model_service
            }
          ]
        },
        {
          model: model_municipality,
          include: [
            { model: model_province, include: [{ model: model_department }] }
          ]
        }
      ],
      where: {
        id_service_provider: req.params.id_service_provider
      }
    });
    console.log("ID " + req.params.id_service_provider);
    var data = [];
    var tourist_plan = [];
    var services = [];

    for (var i = 0; i < service_provider.length; i++) {
      tourist_plan = [];
      for (
        let j = 0;
        j < service_provider[i].service_provider_tourist_plans.length;
        j++
      ) {
        tourist_plan.push({
          name_tourist_plan:
            service_provider[i].service_provider_tourist_plans[j].tourist_plan
              .name,
          terms: service_provider[i].service_provider_tourist_plans[j].terms,
          description:
            service_provider[i].service_provider_tourist_plans[j].description,
          price: service_provider[i].service_provider_tourist_plans[j].price
        });
      }
      services = [];
      for (
        let j = 0;
        j < service_provider[i].service_provider_services.length;
        j++
      ) {
        services.push({
          name_service:
            service_provider[i].service_provider_services[j].service.name,
          minimum_price:
            service_provider[i].service_provider_services[j].minimum_price,
          maximum_price:
            service_provider[i].service_provider_services[j].maximum_price,
          capacity: service_provider[i].service_provider_services[j].capacity
        });
      }
      data.push({
        id_service_provider: service_provider[i].id_service_provider,
        name: service_provider[i].name,
        address: service_provider[i].address,
        history: service_provider[i].history,
        trajectory: service_provider[i].trajectory,
        start_date: service_provider[i].start_date,
        opening_hours: service_provider[i].opening_hours,
        contact_name: service_provider[i].contact_name,
        contact_cell: service_provider[i].contact_cell,
        contact_phone: service_provider[i].contact_phone,
        contact_mail: service_provider[i].contact_mail,
        contact_web: service_provider[i].contact_web,
        sector: service_provider[i].sector,
        sidewalk: service_provider[i].sidewalk,
        name_municipality: service_provider[i].municipality.name,
        name_province: service_provider[i].municipality.province.name,
        name_department:
          service_provider[i].municipality.province.department.name,
        id_photo: service_provider[i].id_photo,
        is_visible: service_provider[i].is_visible,
        coordinates: service_provider[i].geom.coordinates,
        tourist_plan: tourist_plan,
        services: services
      });
    }
    let getServiceProvider = GeoJSON.parse(data, { Point: "coordinates" });
    res.json(getServiceProvider);
  },
  async getServiceProviderSize(req, res) {
    let service_provider = await model_service_provider.findAll({});
    res.json(service_provider.length);
  }
};

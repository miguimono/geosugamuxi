var GeoJSON = require("geojson");

var model_service = require("../models/service");
var model_service_experience = require("../models/service_experience");
var model_experience = require("../models/experience");
var model_service_provider_service = require("../models/service_provider_service");
var model_service_provider = require("../models/service_provider");

module.exports = {
  async getServiceData(req, res) {
    let service = await model_service.findAll({
      include: [
        {
          model: model_service_experience,
          include: [{ model: model_experience }]
        },
        {
          model: model_service_provider_service,
          include: [
            {
              model: model_service_provider
            }
          ]
        }
      ]
    });
    res.json(service);
  },
  //Muestra las experiencias en formato geojson de forma organizada y simple
  async getService(req, res) {
    let service = await model_service.findAll({
      include: [
        {
          model: model_service_experience,
          include: [{ model: model_experience }]
        },
        {
          model: model_service_provider_service,
          include: [
            {
              model: model_service_provider
            }
          ]
        }
      ]
    });
    var data = [];
    var experiences = [];
    var service_providers = [];
    for (var i = 0; i < service.length; i++) {
      experiences = [];
      for (let j = 0; j < service[i].service_experiences.length; j++) {
        experiences.push({
          id_experience: service[i].service_experiences[j].experience.id_experience,
          name_experience: service[i].service_experiences[j].experience.name,
          type: service[i].service_experiences[j].type,
          description: service[i].service_experiences[j].description
        });
      }
      service_providers = [];
      for (let j = 0; j < service[i].service_provider_services.length; j++) {
        service_providers.push({
          name_service_providers:
            service[i].service_provider_services[j].service_provider.name,
            id_service_provider: service[i].service_provider_services[j].id_service_provider,
          minimum_price: service[i].service_provider_services[j].minimum_price,
          maximum_price: service[i].service_provider_services[j].maximum_price
        });
      }
      data.push({
        id_experience: service[i].id_experience,
        name: service[i].name,
        description: service[i].description,
        experiences: experiences,
        service_providers: service_providers
      });
    }

    res.json(data);
  },
  async getServiceByName(req, res) {
    let service = await model_service.findAll({
      include: [
        {
          model: model_service_experience,
          include: [{ model: model_experience }]
        },
        {
          model: model_service_provider_service,
          include: [
            {
              model: model_service_provider
            }
          ]
        }
      ],
      where: {
        name: req.params.name_service
      }
    });
    var data = [];
    var experiences = [];
    var service_providers = [];
    for (var i = 0; i < service.length; i++) {
      experiences = [];
      for (let j = 0; j < service[i].service_experiences.length; j++) {
        experiences.push({
          id_experience: service[i].service_experiences[j].experience.id_experience,
          name_experience: service[i].service_experiences[j].experience.name,
          type: service[i].service_experiences[j].type,
          description: service[i].service_experiences[j].description
        });
      }
      service_providers = [];
      for (let j = 0; j < service[i].service_provider_services.length; j++) {
        service_providers.push({
          name_service_providers:service[i].service_provider_services[j].service_provider.name,
          id_service_provider: service[i].service_provider_services[j].id_service_provider,
          minimum_price: service[i].service_provider_services[j].minimum_price,
          maximum_price: service[i].service_provider_services[j].maximum_price
        });
      }
      data.push({
        id_experience: service[i].id_experience,
        name: service[i].name,
        description: service[i].description,
        experiences: experiences,
        service_providers: service_providers
      });
    }

    res.json(data);
  },
  async getServiceByType(req, res) {
    let service = await model_service.findAll({
      include: [
        {
          model: model_service_experience,
          include: [{ model: model_experience }],
          where: {
            type: req.params.type_service
          }
        },
        {
          model: model_service_provider_service,
          include: [
            {
              model: model_service_provider
            }
          ]
        }
      ]
    });
    var data = [];
    var experiences = [];
    var service_providers = [];
    for (var i = 0; i < service.length; i++) {
      experiences = [];
      for (let j = 0; j < service[i].service_experiences.length; j++) {
        experiences.push({
          id_experience: service[i].service_experiences[j].experience.id_experience,
          name_experience: service[i].service_experiences[j].experience.name,
          type: service[i].service_experiences[j].type,
          description: service[i].service_experiences[j].description
        });
      }
      service_providers = [];
      for (let j = 0; j < service[i].service_provider_services.length; j++) {
        service_providers.push({
          name_service_providers:
            service[i].service_provider_services[j].service_provider.name,
            id_service_provider: service[i].service_provider_services[j].id_service_provider,
          minimum_price: service[i].service_provider_services[j].minimum_price,
          maximum_price: service[i].service_provider_services[j].maximum_price
        });
      }
      data.push({
        id_experience: service[i].id_experience,
        name: service[i].name,
        description: service[i].description,
        experiences: experiences,
        service_providers: service_providers
      });
    }

    res.json(data);
  }
};

var model_experience = require("../models/experience");
var model_heritage_site = require("../models/heritage_site");
var model_experience_heritage_site = require("../models/experience_heritage_site");
var model_service_experience = require("../models/service_experience");
var model_service = require("../models/service");

var model_service_provider_service = require("../models/service_provider_service");
var model_service_provider = require("../models/service_provider");

module.exports = {
  async getExperienceData(req, res) {
    let get_experience = await model_experience.findAll({
      include: [
        {
          model: model_experience_heritage_site,
          include: [{ model: model_heritage_site }]
        },
        {
          model: model_service_experience,
          include: [
            {
              model: model_service,
              include: [
                {
                  model: model_service_provider_service,
                  include: [
                    {
                      model: model_service_provider
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    });
    res.json(get_experience);
  },
  //Muestra las experiencias en formato geojson de forma organizada y simple
  async getExperience(req, res) {
    let experience = await model_experience.findAll({
      include: [
        {
          model: model_experience_heritage_site,
          include: [{ model: model_heritage_site }]
        },
        {
          model: model_service_experience,
          include: [
            {
              model: model_service
            }
          ]
        }
      ]
    });
    var data = [];
    var heritage_sites = [];
    var services = [];
    for (var i = 0; i < experience.length; i++) {
      heritage_sites = [];
      for (let l = 0; l < experience[i].experience_heritage_sites.length; l++) {
        heritage_sites.push({
          id_heritage_site:
            experience[i].experience_heritage_sites[l].id_heritage_site,
          name_heritage_site:
            experience[i].experience_heritage_sites[l].heritage_site.name,
          type_heritage_site:
            experience[i].experience_heritage_sites[l].heritage_site.type
        });
      }
      services = [];
      for (let j = 0; j < experience[i].service_experiences.length; j++) {
        services.push({
          id_service: experience[i].service_experiences[j].id_service,
          name_service: experience[i].service_experiences[j].service.name,
          type: experience[i].service_experiences[j].type,
          description: experience[i].service_experiences[j].description
        });
      }
      data.push({
        id_experience: experience[i].id_experience,
        name: experience[i].name,
        slogan: experience[i].slogan,
        short_history: experience[i].short_history,
        history: experience[i].history,
        recommendations: experience[i].recommendations,
        id_gallery: experience[i].id_gallery,
        id_photo_360: experience[i].id_photo_360,
        heritage_sites: heritage_sites,
        services: services
      });
    }

    res.json(data);
  },
  async getExperienceByName(req, res) {
    let experience = await model_experience.findAll({
      include: [
        {
          model: model_experience_heritage_site,
          include: [{ model: model_heritage_site }]
        },
        {
          model: model_service_experience,
          include: [
            {
              model: model_service
            }
          ]
        }
      ],
      where: {
        name: req.params.name_experience
      }
    });
    var data = [];
    var heritage_sites = [];
    var services = [];
    for (var i = 0; i < experience.length; i++) {
      heritage_sites = [];
      for (let j = 0; j < experience[i].experience_heritage_sites.length; j++) {
        heritage_sites.push({
          id_heritage_site:
            experience[i].experience_heritage_sites[l].id_heritage_site,
          name_heritage_site:
            experience[i].experience_heritage_sites[j].heritage_site.name,
          type_heritage_site:
            experience[i].experience_heritage_sites[j].heritage_site.type
        });
      }
      services = [];
      for (let j = 0; j < experience[i].service_experiences.length; j++) {
        services.push({
          id_service: experience[i].service_experiences[j].id_service,
          name_service: experience[i].service_experiences[j].service.name,
          type: experience[i].service_experiences[j].type,
          description: experience[i].service_experiences[j].description
        });
      }
      data.push({
        id_experience: experience[i].id_experience,
        name: experience[i].name,
        slogan: experience[i].slogan,
        short_history: experience[i].short_history,
        history: experience[i].history,
        recommendations: experience[i].recommendations,
        id_gallery: experience[i].id_gallery,
        id_photo_360: experience[i].id_photo_360,
        heritage_sites: heritage_sites,
        services: services
      });
    }

    res.json(data);
  }
};

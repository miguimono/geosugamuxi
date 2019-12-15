var GeoJSON = require("geojson");

var model_heritage_site = require("../models/heritage_site");
var model_experience_heritage_site = require("../models/experience_heritage_site");
var model_experience = require("../models/experience");

module.exports = {
  async getHeritageSiteData(req, res) {
    let get_heritage_site = await model_heritage_site.findAll({
      include: [
        {
          model: model_experience_heritage_site,
          include: [{ model: model_experience }]
        }
      ]
    });
    res.json(get_heritage_site);
  },
  async getHeritageSite(req, res) {
    let heritage_site = await model_heritage_site.findAll({
      include: [
        {
          model: model_experience_heritage_site,
          include: [{ model: model_experience }]
        }
      ]
    });
    var data = [];
    var experiences = [];
    for (var i = 0; i < heritage_site.length; i++) {
      experiences = [];
      for (
        let j = 0;
        j < heritage_site[i].experience_heritage_sites.length;
        j++
      ) {
        experiences.push({
          id_experience:
            heritage_site[i].experience_heritage_sites[j].id_experience,
          name_experience:
            heritage_site[i].experience_heritage_sites[j].experience.name,
          slogan:
            heritage_site[i].experience_heritage_sites[j].experience.slogan,
          short_history:
            heritage_site[i].experience_heritage_sites[j].experience
              .short_history
        });
      }
      data.push({
        id_heritage_site: heritage_site[i].id_heritage_site,
        name: heritage_site[i].name,
        description: heritage_site[i].description,
        coordinates: heritage_site[i].geom.coordinates,
        is_visible: heritage_site[i].is_visible,
        type: heritage_site[i].type,
        experiences: experiences
      });
    }
    let get_heritage_site = GeoJSON.parse(data, { Point: "coordinates" });
    res.json(get_heritage_site);
  },
  async getHeritageSiteCoord(req, res) {
    let heritage_site = await model_heritage_site.findAll({
      
    });
    var data = [];
    
    for (var i = 0; i < heritage_site.length; i++) {
    
      data.push({
        id_heritage_site: heritage_site[i].id_heritage_site,
        name: heritage_site[i].name,
        coordinates: heritage_site[i].geom.coordinates,
        is_visible: heritage_site[i].is_visible,
      });
    }
    let get_heritage_site = GeoJSON.parse(data, { Point: "coordinates" });
    res.json(get_heritage_site);
  },
  async getHeritageSiteBasic(req, res) {
    let heritage_site = await model_heritage_site.findAll({
      include: [
        {
          model: model_experience_heritage_site,
          include: [{ model: model_experience }]
        }
      ]
    });
    var data = [];
    var experiences = [];
    for (var i = 0; i < heritage_site.length; i++) {
      experiences = [];
      for (
        let j = 0;
        j < heritage_site[i].experience_heritage_sites.length;
        j++
      ) {
        experiences.push({
          id_experience:
            heritage_site[i].experience_heritage_sites[j].id_experience,
          name_experience:
            heritage_site[i].experience_heritage_sites[j].experience.name,
        });
      }
      data.push({
        id_heritage_site: heritage_site[i].id_heritage_site,
        name: heritage_site[i].name,
        description: heritage_site[i].description,
        experiences: experiences
      });
    }
    res.json(data);
  },
  async getHeritageSiteById(req, res) {
    let heritage_site = await model_heritage_site.findAll({
      include: [
        {
          model: model_experience_heritage_site,
          include: [{ model: model_experience }]
        }
      ],
      where: {
        id_heritage_site: req.params.id_heritage_site
      }
    });
    var data = [];
    var experiences = [];
    for (var i = 0; i < heritage_site.length; i++) {
      experiences = [];
      for (
        let j = 0;
        j < heritage_site[i].experience_heritage_sites.length;
        j++
      ) {
        experiences.push({
          id_experience:
            heritage_site[i].experience_heritage_sites[j].id_experience,
          name_experience:
            heritage_site[i].experience_heritage_sites[j].experience.name,
          slogan:
            heritage_site[i].experience_heritage_sites[j].experience.slogan,
          short_history:
            heritage_site[i].experience_heritage_sites[j].experience
              .short_history
        });
      }
      data.push({
        id_heritage_site: heritage_site[i].id_heritage_site,
        name: heritage_site[i].name,
        description: heritage_site[i].description,
        coordinates: heritage_site[i].geom.coordinates,
        is_visible: heritage_site[i].is_visible,
        type: heritage_site[i].type,
        experiences: experiences
      });
    }
    let get_heritage_site = GeoJSON.parse(data, { Point: "coordinates" });
    res.json(get_heritage_site);
  },
  async getHeritageSiteByName(req, res) {
    let heritage_site = await model_heritage_site.findAll({
      include: [
        {
          model: model_experience_heritage_site,
          include: [{ model: model_experience }]
        }
      ],
      where: {
        name: req.params.name_heritage_site
      }
    });
    var data = [];
    var experiences = [];
    for (var i = 0; i < heritage_site.length; i++) {
      experiences = [];
      for (
        let j = 0;
        j < heritage_site[i].experience_heritage_sites.length;
        j++
      ) {
        experiences.push({
          id_experience:
            heritage_site[i].experience_heritage_sites[j].id_experience,
          name_experience:
            heritage_site[i].experience_heritage_sites[j].experience.name,
          slogan:
            heritage_site[i].experience_heritage_sites[j].experience.slogan,
          short_history:
            heritage_site[i].experience_heritage_sites[j].experience
              .short_history
        });
      }
      data.push({
        id_heritage_site: heritage_site[i].id_heritage_site,
        name: heritage_site[i].name,
        description: heritage_site[i].description,
        coordinates: heritage_site[i].geom.coordinates,
        is_visible: heritage_site[i].is_visible,
        type: heritage_site[i].type,
        experiences: experiences
      });
    }
    let get_heritage_site = GeoJSON.parse(data, { Point: "coordinates" });
    res.json(get_heritage_site);
  },
  async getHeritageSiteByType(req, res) {
    let heritage_site = await model_heritage_site.findAll({
      include: [
        {
          model: model_experience_heritage_site,
          include: [{ model: model_experience }]
        }
      ],
      where: {
        type: req.params.type
      }
    });
    var data = [];
    var experiences = [];
    for (var i = 0; i < heritage_site.length; i++) {
      experiences = [];
      for (
        let j = 0;
        j < heritage_site[i].experience_heritage_sites.length;
        j++
      ) {
        experiences.push({
          id_experience:
            heritage_site[i].experience_heritage_sites[j].id_experience,
          name_experience:
            heritage_site[i].experience_heritage_sites[j].experience.name,
          slogan:
            heritage_site[i].experience_heritage_sites[j].experience.slogan,
          short_history:
            heritage_site[i].experience_heritage_sites[j].experience
              .short_history
        });
      }
      data.push({
        id_heritage_site: heritage_site[i].id_heritage_site,
        name: heritage_site[i].name,
        description: heritage_site[i].description,
        coordinates: heritage_site[i].geom.coordinates,
        is_visible: heritage_site[i].is_visible,
        type: heritage_site[i].type,
        experiences: experiences
      });
    }
    let get_heritage_site = GeoJSON.parse(data, { Point: "coordinates" });
    res.json(get_heritage_site);
  },
  async getHeritageSiteSize(req, res) {
    let heritage_site = await model_heritage_site.findAll({});
    res.json(heritage_site.length);
  }
};

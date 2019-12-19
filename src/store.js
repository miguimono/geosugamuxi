import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
import base_map_json from "./assets/json/base_map.json";
import about_json from "./assets/json/about.json";

Vue.use(Vuex);

export default new Vuex.Store({
  //Estado inicial de cada elemento que se utilizara de forma general en el proyecto
  state: {
    title: "Experiencia rural Sugamuxi",

    base_map: null,
    about: null,

    photos_user_id: "185962838@N05",
    photos_api_key_public: "5fe7d4c13d41f94688e468a82131ce67",
    photos: null,
 
    service_providers: null,
    service_provider: null,
    heritage_site: null,
    heritage_sites: null,

    services: null,
    service: null,
    experiences: null,
    experience: null,

    municipalities: null,
    provinces: null,
    departments: null,
    projects: null,

    departamental_roads: null,

    is_visible_service_providers: true,
    is_visible_heritage_sites: true,

    is_visible_departamental_roads: false,

    is_visible_municipalities: false,
    is_visible_provinces: false,
    is_visible_departments: false,
    is_visible_projects: true
  },
  //Realiza cambios en los estados
  mutations: {
    //Se llama this.$store.commit("setId", id_service_provider);
    loadBaseMap: function(state) {
      state.base_map = base_map_json.features;
    },
    loadAbout: function(state) {
      state.about = about_json.features;
    },
    // ***********************
    async loadServiceProviders(state) {
      state.service_providers = null;
      await axios
        .get("http://localhost:3000/api/service_provider")
        .then(response => {
          state.service_providers = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async loadServiceProvidersCoord(state) {
      state.service_providers = null;
      await axios
        .get("http://localhost:3000/api/service_provider_coord")
        .then(response => {
          state.service_providers = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async loadServiceProvidersBasic(state) {
      state.service_providers = null;
      await axios
        .get("http://localhost:3000/api/service_provider_basic")
        .then(response => {
          state.service_providers = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async loadRandomServiceProvider(state) {
      var rnd = null;
      await axios
        .get("http://localhost:3000/api/service_provider_size")
        .then(response => {
          this.rnd = response.data;
        })
        .catch(error => {
          console.log(error);
        });
      state.service_provider = null;
      await axios
        .get(
          "http://localhost:3000/api/service_provider/" +
            (Math.floor(Math.random() * this.rnd) + 1)
        )
        .then(response => {
          state.service_provider = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async loadServiceProvidersById(state, id) {
      state.service_provider = null;
      await axios
        .get("http://localhost:3000/api/service_provider/" + id)
        .then(response => {
          state.service_provider = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // ***********************
    async loadHeritageSites(state) {
      state.heritage_sites = null;
      await axios
        .get("http://localhost:3000/api/heritage_site")
        .then(response => {
          state.heritage_sites = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async loadHeritageSitesCoord(state) {
      state.heritage_sites = null;
      await axios
        .get("http://localhost:3000/api/heritage_site_coord")
        .then(response => {
          state.heritage_sites = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async loadHeritageSitesBasic(state) {
      state.heritage_sites = null;
      await axios
        .get("http://localhost:3000/api/heritage_site_basic")
        .then(response => {
          state.heritage_sites = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async loadRandomHeritageSite(state) {
      var rnd = null;
      await axios
        .get("http://localhost:3000/api/heritage_site_size")
        .then(response => {
          this.rnd = response.data;
        })
        .catch(error => {
          console.log(error);
        });
      state.heritage_site = null;
      await axios
        .get(
          "http://localhost:3000/api/heritage_site/" +
            (Math.floor(Math.random() * this.rnd) + 1)
        )
        .then(response => {
          state.heritage_site = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async loadHeritageSitesById(state, id) {
      state.heritage_site = null;
      await axios
        .get("http://localhost:3000/api/heritage_site/" + id)
        .then(response => {
          state.heritage_site = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // ***********************

    async loadServices(state) {
      state.services = null;
      await axios
        .get("http://localhost:3000/api/service/")
        .then(response => {
          state.services = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async loadServicesByName(state, name) {
      state.service = null;
      await axios
        .get("http://localhost:3000/api/service_name/" + name)
        .then(response => {
          state.service = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // ***********************
    async loadExperiences(state) {
      state.experiences = null;
      await axios
        .get("http://localhost:3000/api/experience/")
        .then(response => {
          state.experiences = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async loadExperiencesBasic(state) {
      state.experiences = null;
      await axios
        .get("http://localhost:3000/api/experience_basic/")
        .then(response => {
          state.experiences = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async loadExperienceById(state, id) {
      state.experience = null;
      await axios
        .get("http://localhost:3000/api/experience/" + id)
        .then(response => {
          state.experience = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async loadRandomExperience(state) {
      var rnd = null;
      await axios
        .get("http://localhost:3000/api/experience_size")
        .then(response => {
          this.rnd = response.data;
        })
        .catch(error => {
          console.log(error);
        });
      state.experience = null;
      await axios
        .get(
          "http://localhost:3000/api/experience/" +
            (Math.floor(Math.random() * this.rnd) + 1)
        )
        .then(response => {
          state.experience = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // ***********************
    async loadMunicipalities(state) {
      state.municipalities = null;
      await axios
        .get("http://localhost:3000/api/municipality/")
        .then(response => {
          state.municipalities = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async loadMunicipalitiesCoord(state) {
      state.municipalities = null;
      await axios
        .get("http://localhost:3000/api/municipality_coord/")
        .then(response => {
          state.municipalities = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async loadMunicipalitiesBasic(state) {
      state.municipalities = null;
      await axios
        .get("http://localhost:3000/api/municipality_basic/")
        .then(response => {
          state.municipalities = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // ***********************
    async loadProvinces(state) {
      state.provinces = null;
      await axios
        .get("http://localhost:3000/api/province/")
        .then(response => {
          state.provinces = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async loadProvincesCoord(state) {
      state.provinces = null;
      await axios
        .get("http://localhost:3000/api/province_coord/")
        .then(response => {
          state.provinces = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // ***********************
    async loadDepartments(state) {
      state.departments = null;
      await axios
        .get("http://localhost:3000/api/department/")
        .then(response => {
          state.departments = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async loadDepartmentsCoord(state) {
      state.departments = null;
      await axios
        .get("http://localhost:3000/api/department_coord/")
        .then(response => {
          state.departments = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // ***********************
    async loadProjects(state) {
      state.projects = null;
      await axios
        .get("http://localhost:3000/api/projects/")
        .then(response => {
          state.projects = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // ***********************
    async loadDepartamentalRoads(state) {
      state.departamental_roads = null;
      await axios
        .get("http://localhost:3000/api/departamental_roads")
        .then(response => {
          state.departamental_roads = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    
    isVisibleServiceProviders: function(state) {
      state.is_visible_service_providers = !state.is_visible_service_providers;
    },
    isVisibleHeritageSites: function(state) {
      state.is_visible_heritage_sites = !state.is_visible_heritage_sites;
    },
    isVisibleDepartamentalRoads: function(state) {
      state.is_visible_departamental_roads = !state.is_visible_departamental_roads;
    },
    isVisibleMunicipalities: function(state) {
      state.is_visible_municipalities = !state.is_visible_municipalities;
    },
    isVisibleProvinces: function(state) {
      state.is_visible_provinces = !state.is_visible_provinces;
    },
    isVisibleDepartments: function(state) {
      state.is_visible_departments = !state.is_visible_departments;
    },
    isVisibleProjects: function(state) {
      state.is_visible_projects = !state.is_visible_projects;
    },
    loadPhotos: function(state, gallery_id) {
      state.photos = null;
      if (gallery_id) {
        axios
          .get("https://api.flickr.com/services/rest", {
            params: {
              method: "flickr.photosets.getPhotos",
              api_key: state.photos_api_key_public,
              photoset_id: gallery_id,
              extras: "url_l, owner_name",
              page: 1,
              format: "json",
              nojsoncallback: 1,
              per_page: 30
            }
          })
          .then(response => {
            state.photos = response.data.photoset.photo;
          });
      }
    }
  },
  //Llama las mutaciones y las realiza
  //Metodo que debe ser llamado para enviar datos
  actions: {
    //Se llama this.$store.dispatch("setId", id_service_provider);
    async loadBaseMap(mutations) {
      await mutations.commit("loadBaseMap");
    },
    async loadAbout(mutations) {
      await mutations.commit("loadAbout");
    },
    async loadLayers(mutations) {
      await mutations.commit("loadDepartmentsCoord");
      await mutations.commit("loadProvincesCoord");
      await mutations.commit("loadMunicipalitiesCoord");

      await mutations.commit("loadHeritageSitesCoord");
      await mutations.commit("loadServiceProvidersCoord");
      //points
      await mutations.commit("loadProjects");
      //lines
      await mutations.commit("loadDepartamentalRoads");
      //No hay ningun Polygon
    },

    updateIsVisible: function(mutations, name) {
      if (name == "Prestadores de servicio") {
        mutations.commit("isVisibleServiceProviders");
      } else if (name == "Patrimonios") {
        mutations.commit("isVisibleHeritageSites");
      } else if (name == "Vias departamentales") {
        mutations.commit("isVisibleDepartamentalRoads");
      } else if (name == "Municipios") {
        mutations.commit("isVisibleMunicipalities");
      } else if (name == "Provincias") {
        mutations.commit("isVisibleProvinces");
      } else if (name == "Departamentos") {
        mutations.commit("isVisibleDepartments");
      } else if (name == "Proyectos") {
        mutations.commit("isVisibleProjects");
      }
    }
  },
  //Devuelve el estado actual de un objeto, o una condicion de este
  //Metodo que debe ser llamado para obtener datos
  getters: {
    //return this.$store.getters.movies
    getTitle: function(state) {
      return state.title;
    },
    getBaseMap(state) {
      return state.base_map;
    },
    getAbout(state) {
      return state.about;
    },
    getServiceProviders: state => {
      return state.service_providers;
    },
    getServiceProvidersBasic: state => {
      return state.service_providers;
    },
    getServiceProvider: state => {
      return state.service_provider;
    },
    getVisibleServiceProviders: function(state) {
      return state.is_visible_service_providers;
    },
    getHeritageSites(state) {
      return state.heritage_sites;
    },
    getHeritageSitesBasic(state) {
      return state.heritage_sites;
    },
    getHeritageSite(state) {
      return state.heritage_site;
    },
    getVisibleHeritageSites: function(state) {
      return state.is_visible_heritage_sites;
    },
    getServices: function(state) {
      return state.services;
    },
    getServicesByName: function(state) {
      return state.service;
    },
    getExperiences: function(state) {
      return state.experiences;
    },
    getExperiencesBasic: function(state) {
      return state.experiences;
    },
    getExperienceById: function(state) {
      return state.experience;
    },
    getExperience: function(state) {
      return state.experience;
    },
    getMunicipalities: function(state) {
      return state.municipalities;
    },
    getMunicipalitiesBasic: function(state) {
      return state.municipalities;
    },
    getProvinces: function(state) {
      return state.provinces;
    },
    getDepartments: function(state) {
      return state.departments;
    },
    getProjects: function(state) {
      return state.projects;
    },
    getDepartamentalRoads: state => {
      return state.departamental_roads;
    },
    getVisibleDepartamentalRoads: function(state) {
      return state.is_visible_departamental_roads;
    },
    getVisibleMunicipalities: function(state) {
      return state.is_visible_municipalities;
    },
    getVisibleProvinces: function(state) {
      return state.is_visible_provinces;
    },
    getVisibleDepartments: function(state) {
      return state.is_visible_departments;
    },
    getVisibleProjects: function(state) {
      return state.is_visible_projects;
    },
    getPhotos: function(state) {
      return state.photos;
    },
    getPhotosGallery: function(state) {
      if (state.photos) {
        var images = [];
        for (let index = 0; index < state.photos.length; index++) {
          images.push({
            title: state.photos[index].title,
            description: state.photos[index].ownername,
            href: state.photos[index].url_l
          });
        }
        return images;
      } else {
        return null;
      }
    }
  }
});

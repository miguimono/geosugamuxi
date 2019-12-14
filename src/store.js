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
    about:null,

    photos_user_id: "185677137@N07",
    photos_api_key_public: "1e1df81c321dab285182201462e86849",
    photos_api_key_private: "e965807805f2e3fe",
    photos: null,

    id_element: null,

    service_providers: null,
    heritage_sites: null,

    services: null,
    experiences: null,

    municipalities: null,
    provinces: null,
    departments: null,
    projects: null,

    departamental_roads: null,
    populated_center_sugamuxi: null,

    is_visible_service_providers: true,
    is_visible_heritage_sites: true,

    is_visible_departamental_roads: false,
    is_visible_populated_center_sugamuxi: false,

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
    async loadServiceProviders(state) {
      await axios
        .get("http://localhost:3000/api/service_provider")
        .then(response => {
          state.service_providers = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async loadHeritageSites(state) {
      await axios
        .get("http://localhost:3000/api/heritage_site")
        .then(response => {
          state.heritage_sites = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async loadDepartamentalRoads(state) {
      await axios
        .get("http://localhost:3000/api/departamental_roads")
        .then(response => {
          state.departamental_roads = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async loadPopulatedCenterSugamuxi(state) {
      await axios
        .get("http://localhost:3000/api/populated_center")
        .then(response => {
          state.populated_center_sugamuxi = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
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
    isVisibleServiceProviders: function(state) {
      state.is_visible_service_providers = !state.is_visible_service_providers;
    },
    isVisibleHeritageSites: function(state) {
      state.is_visible_heritage_sites = !state.is_visible_heritage_sites;
    },
    isVisibleDepartamentalRoads: function(state) {
      state.is_visible_departamental_roads = !state.is_visible_departamental_roads;
    },
    isVisiblePopulatedCenterSugamuxi: function(state) {
      state.is_visible_populated_center_sugamuxi = !state.is_visible_populated_center_sugamuxi;
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
      if (gallery_id) {
        state.photos = null;
        axios
          .get("https://api.flickr.com/services/rest", {
            params: {
              method: "flickr.photosets.getPhotos",
              api_key: state.photos_api_key_public,
              photoset_id: gallery_id,
              extras: "url_n, owner_name",
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
    },
    setIdElement: function(state, id) {
      state.id_element = id;
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
    async loadPrincipalLayers(mutations) {
      await mutations.commit("loadServiceProviders"); //Cargar prestadores de servicio
      await mutations.commit("loadHeritageSites"); //Cargar patrimonios

      await mutations.commit("loadServices"); //Cargar servicios
      await mutations.commit("loadExperiences"); //Cargar experiencias
    },
    async loadSecondaryLayers(mutations) {
      await mutations.commit("loadMunicipalities"); //Cargar municipios
      await mutations.commit("loadProvinces"); //Cargar provincias
      await mutations.commit("loadDepartments"); //Cargar departamentos
      await mutations.commit("loadProjects"); //Cargar proyectos

      await mutations.commit("loadDepartamentalRoads"); //Cargar vias departamentales
      await mutations.commit("loadPopulatedCenterSugamuxi"); //Cargar centro poblado
    },

    updateIsVisible: function(mutations, name) {
      if (name == "Prestadores de servicio") {
        mutations.commit("isVisibleServiceProviders");
      } else if (name == "Patrimonios") {
        mutations.commit("isVisibleHeritageSites");
      } else if (name == "Vias departamentales") {
        mutations.commit("isVisibleDepartamentalRoads");
      } else if (name == "Centro poblado") {
        mutations.commit("isVisiblePopulatedCenterSugamuxi");
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
    getPrincipalLayers: function(state) {
      if (
        state.loadServiceProviders != null &&
        state.loadHeritageSites != null &&
        state.loadServices != null &&
        state.loadExperiences != null
      ) {
        return true;
      } else {
        return false;
      }
    },
    getSecondaryLayers: function(state) {
      if (
        state.loadMunicipalities != null &&
        state.loadProvinces != null &&
        state.loadDepartments != null &&
        state.loadProjects != null &&
        state.loadDepartamentalRoads != null &&
        state.loadPopulatedCenterSugamuxi != null
      ) {
        return true;
      } else {
        return false;
      }
    },
    getServiceProviders: state => {
      return state.service_providers;
    },
    getVisibleServiceProviders: function(state) {
      return state.is_visible_service_providers;
    },
    getHeritageSites(state) {
      return state.heritage_sites;
    },
    getVisibleHeritageSites: function(state) {
      return state.is_visible_heritage_sites;
    },
    getServices: function(state) {
      return state.services;
    },
    getExperiences: function(state) {
      return state.experiences;
    },
    getMunicipalities: function(state) {
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
    getPopulatedCenterSugamuxi(state) {
      return state.populated_center_sugamuxi;
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
    getVisiblePopulatedCenterSugamuxi: function(state) {
      return state.is_visible_populated_center_sugamuxi;
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
            href: state.photos[index].url_n
          });
        }
        return images;
      } else {
        return null;
      }
    },
    getIdElement: function(state) {
      return state.id_element;
    }
  }
});

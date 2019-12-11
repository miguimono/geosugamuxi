<template>
  <div class="geoviewer">
    <b-container fluid class="p-2 bg-light">
      <div v-if="this.loading" class="mx-auto bg-success" style="width: 100px;">
        <Circle8></Circle8>
      </div>
      <div v-else>
        <b-card
          bg-variant="white"
          border-variant="light"
          class="shadow p-2 mb-3 rounded text-center"
          title="Puede seleccionar las capas que desee ver en el mapa"
        >
          <b-container fluid class=" bg-white">
            <b-button size="lg" variant="success" v-b-modal.modal-1
              >Capas</b-button
            >
            <b-modal
              id="modal-1"
              title="Seleccion de capas e información"
              ok-only
              scrollable
            >
              <template v-slot:modal-header="{ close }">
                <b-button size="sm" variant="outline-info" @click="helpLayers()"
                  >?</b-button
                >
                <h3>{{getTittle}}</h3>
              </template>
              <b-container fluid class="p-2 bg-white">
                <div>
                  <ListServices_Experiences
                    :layer="this.getExperiences"
                    :name_layer="'Experiencias'"
                  />
                  <ListServices_Experiences
                    :layer="this.getServices"
                    :name_layer="'Servicios'"
                  />
                  <ListServiceProviders_HeritageSites
                    :layer="this.getServiceProviders.features"
                    :name_layer="'Prestadores de servicio'"
                    :isVisible="getVisibleServiceProviders"
                  />
                  <ListServiceProviders_HeritageSites
                    :layer="this.getHeritageSites.features"
                    :name_layer="'Patrimonios'"
                    :isVisible="getVisibleHeritageSites"
                  />
                  <ListLayers
                    :layer="this.getProjects"
                    :name_layer="'Proyectos'"
                    :isVisible="getVisibleProjects"
                  />
                  <ListLayers
                    :layer="this.getMunicipalities"
                    :name_layer="'Municipios'"
                    :isVisible="getVisibleMunicipalities"
                  />
                  <ListLayers
                    :layer="this.getProvinces"
                    :name_layer="'Provincias'"
                    :isVisible="getVisibleProvinces"
                  />
                  <ListLayers
                    :layer="this.getDepartments"
                    :name_layer="'Departamentos'"
                    :isVisible="getVisibleDepartments"
                  />
                  <ListLayers
                    :layer="this.getDepartamentalRoads"
                    :name_layer="'Vias departamentales'"
                    :isVisible="getVisibleDepartamentalRoads"
                  />
                  <ListLayers
                    :layer="this.getPopulatedCenterSugamuxi"
                    :name_layer="'Centro poblado'"
                    :isVisible="getVisiblePopulatedCenterSugamuxi"
                  />
                </div>
              </b-container>
            </b-modal>
          </b-container>
          <b-container fluid class="p-2 bg-white">
            <b-card no-body>
              <b-container fluid class="p-1 bg-dark">
                <div>
                  <Map />
                </div>
              </b-container>
            </b-card>
          </b-container>

          <b-button size="sm" variant="outline-info" @click="helpMap()"
            >¿Como usar el mapa?</b-button
          >
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
import Map from "@/components/Map.vue";
import ListServices_Experiences from "@/components/ListServices_Experiences.vue";
import ListServiceProviders_HeritageSites from "@/components/ListServiceProviders_HeritageSites.vue";
import ListLayers from "@/components/ListLayers.vue";
import { mapGetters } from "vuex";
import { Circle8 } from "vue-loading-spinner";
export default {
  name: "GeoViewer",
  components: {
    Map,
    ListServices_Experiences,
    ListServiceProviders_HeritageSites,
    ListLayers,
    Circle8
  },
  data() {
    return {
      help_layer1:
        "Puede desplegar mas items en los elementos oscuros y conocer mas información de estos en los items claros",
      help_layer2:
        "Seleccione las capas que desee ver u ocultar en el mapa en el icono lateral derecho.",
      help_layer3:
        "Puede seleccionar o deseleccionar cada uno de los elementos que desea ver en el mapa",
      help_map1:
        "Puede moverse por el mapa dando 'click' y arrastrando sobre este, puede hacer uso de los botones de zoom para acercar o alejar la vista",
      help_map2:
        "Puede seleccionar un diferente mapa base en la parte superior derecha",
      help_map3:
        "Al seleccionar un prestador de servicios puede ver su información basica y posterior mente ir a ver su descripcion detallada",
      help_map4:
        "Al seleccionar un patrimonio puede ver su información basica y posterior mente ir a ver su descripcion detallada",
      loading: false,
      getServices: null,
      getExperiences: null,

      getServiceProviders: null,
      getHeritageSites: null,

      getDepartamentalRoads: null,
      getPopulatedCenterSugamuxi: null,

      getProjects: null,
      getMunicipalities: null,
      getProvinces: null,
      getDepartments: null
    };
  },
  created: function() {
    this.loading = false;
    try {
      this.getServices = this.$store.getters.getServices;
      this.getExperiences = this.$store.getters.getExperiences;

      this.getServiceProviders = this.$store.getters.getServiceProviders;
      this.getHeritageSites = this.$store.getters.getHeritageSites;

      this.getDepartamentalRoads = this.$store.getters.getDepartamentalRoads;
      this.getPopulatedCenterSugamuxi = this.$store.getters.getPopulatedCenterSugamuxi;

      this.getProjects = this.$store.getters.getProjects;
      this.getMunicipalities = this.$store.getters.getMunicipalities;
      this.getProvinces = this.$store.getters.getProvinces;
      this.getDepartments = this.$store.getters.getDepartments;
    } catch (error) {
      this.loading = true;
    }
  },
  updated: function() {},

  methods: {
    helpLayers() {
      this.$bvToast.toast(`${this.help_layer3}`, {
        title: "Información de check",
        autoHideDelay: 15000
      }),
        this.$bvToast.toast(`${this.help_layer2}`, {
          title: "Despliegue de información",
          autoHideDelay: 10000
        }),
        this.$bvToast.toast(`${this.help_layer1}`, {
          title: "Selección de capas",
          autoHideDelay: 5000
        });
    },
    helpMap() {
      this.$bvToast.toast(`${this.help_map4}`, {
        title: "Patrimonios",
        autoHideDelay: 20000
      }),
        this.$bvToast.toast(`${this.help_map3}`, {
          title: "Prestadores de servicio",
          autoHideDelay: 15000
        }),
        this.$bvToast.toast(`${this.help_map2}`, {
          title: "Mapa base",
          autoHideDelay: 10000
        }),
        this.$bvToast.toast(`${this.help_map1}`, {
          title: "Movimiento",
          autoHideDelay: 5000
        });
    }
  },
  computed: {
    ...mapGetters([
      "getTittle",
      "getVisibleServiceProviders",
      "getVisibleHeritageSites",
      "getVisibleDepartamentalRoads",
      "getVisiblePopulatedCenterSugamuxi",

      "getVisibleMunicipalities",
      "getVisibleProvinces",
      "getVisibleDepartments",
      "getVisibleProjects"
    ])
  }
};
</script>

<template>
  <div class="geoviewer">
    <b-container fluid class="p-2 bg-light">
      
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
                <h3>{{getTitle}}</h3>
              </template>
              <b-container fluid class="p-2 bg-white">
                <div>
                  <ListServiceProviders_HeritageSites
                    :layer="this.$store.getters.getServiceProviders.features"
                    :name_layer="'Prestadores de servicio'"
                    :isVisible="getVisibleServiceProviders"
                  />
                  <ListServiceProviders_HeritageSites
                    :layer="this.$store.getters.getHeritageSites.features"
                    :name_layer="'Patrimonios'"
                    :isVisible="getVisibleHeritageSites"
                  />
                  <ListLayers
                    :layer="this.$store.getters.getProjects"
                    :name_layer="'Proyectos'"
                    :isVisible="getVisibleProjects"
                  />
                  <ListLayers
                    :layer="this.$store.getters.getMunicipalities"
                    :name_layer="'Municipios'"
                    :isVisible="getVisibleMunicipalities"
                  />
                  <ListLayers
                    :layer="this.$store.getters.getProvinces"
                    :name_layer="'Provincias'"
                    :isVisible="getVisibleProvinces"
                  /> 
                  <ListLayers
                    :layer="this.$store.getters.getDepartments"
                    :name_layer="'Departamentos'"
                    :isVisible="getVisibleDepartments"
                  />
                  <ListLayers
                    :layer="this.$store.getters.getDepartamentalRoads"
                    :name_layer="'Vias departamentales'"
                    :isVisible="getVisibleDepartamentalRoads"
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
      
    </b-container>
  </div>
</template>

<script>
import Map from "@/components/Map.vue";

import ListServiceProviders_HeritageSites from "@/components/ListServiceProviders_HeritageSites.vue";
import ListLayers from "@/components/ListLayers.vue";
import { mapGetters } from "vuex";
import { Circle8 } from "vue-loading-spinner";
export default {
  name: "GeoViewer",
  components: {
    Map,
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
      loading: true,

    };
  },
  beforeCreate:function(){
    this.$store.dispatch("loadLayers");
  },
  updated: function() {},

  methods: {
    helpLayers() {
      this.$bvToast.toast(`${this.help_layer3}`, {
        title: "Información de check",
        autoHideDelay: 20000,
        variant: "info",
        toaster:"b-toaster-top-right"
      }),
        this.$bvToast.toast(`${this.help_layer2}`, {
          title: "Despliegue de información",
          autoHideDelay: 15000,
          variant: "info",
          toaster:"b-toaster-top-right"
        }),
        this.$bvToast.toast(`${this.help_layer1}`, {
          title: "Selección de capas",
          autoHideDelay: 10000,
          variant: "info",
          toaster:"b-toaster-top-right"
        });
    },
    helpMap() {
      this.$bvToast.toast(`${this.help_map4}`, {
        title: "Patrimonios",
        autoHideDelay: 25000,
        variant: "info",
        toaster:"b-toaster-top-left"
      }),
        this.$bvToast.toast(`${this.help_map3}`, {
          title: "Prestadores de servicio",
          autoHideDelay: 20000,
          variant: "info",
          toaster:"b-toaster-top-left"
        }),
        this.$bvToast.toast(`${this.help_map2}`, {
          title: "Mapa base",
          autoHideDelay: 15000,
          variant: "info",
          toaster:"b-toaster-top-left"
        }),
        this.$bvToast.toast(`${this.help_map1}`, {
          title: "Movimiento",
          autoHideDelay: 10000,
          variant: "info",
          toaster:"b-toaster-top-left"
        });
    }
  },
  computed: {
    ...mapGetters([
      "getTitle",
      "getVisibleServiceProviders",
      "getVisibleHeritageSites",
      "getVisibleDepartamentalRoads",

      "getVisibleMunicipalities",
      "getVisibleProvinces",
      "getVisibleDepartments",
      "getVisibleProjects"
    ])
  }
};
</script>

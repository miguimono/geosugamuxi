<template>
  <div class="map">
    <div style="height: 100%; width: 100%">
      <!-- Map-->
      <l-map
        @update:center="centerUpdate"
        @update:zoom="zoomUpdate"
        @update:bounds="boundsUpdated"
        @click.right="mapRclicked"
        :center="center"
        :zoom="zoom"
        ref="map"
        style="height: 100%; width: 100%"
      >
        <!-- Scale-->
        <l-control-scale
          position="bottomleft"
          :imperial="false"
          :metric="true"
        ></l-control-scale>
        <!-- Layers-->
        <l-control-layers position="topright"></l-control-layers>
        <!-- Title-->
        <l-tile-layer
          v-for="map in this.$store.getters.getBaseMap"
          :key="map.name"
          :name="map.name"
          :visible="map.visible"
          :url="map.url"
          :attribution="map.attribution"
          layer-type="base"
        ></l-tile-layer>

        <!--Prestador de servicios-->
        <div v-if="this.service_providers && getVisibleServiceProviders">
          <l-marker
            v-for="(service_provider, index) in this.service_providers"
            :key="service_provider.properties.name"
            :visible="service_provider.properties.is_visible"
            :lat-lng="[
              service_provider.geometry.coordinates[1],
              service_provider.geometry.coordinates[0]
            ]"
            :icon="iconServiceProvider"
          >
            <l-popup :key="service_provider.properties.name + index">
              <b-button
                pill
                variant="outline-success"
                v-b-modal="'sp' + service_provider.properties.name"
                @click="
                  setServiceProvider(
                    service_provider.properties.id_service_provider,
                    service_provider.properties.name
                  )
                "
                >{{ service_provider.properties.name }}
              </b-button>
            </l-popup>
            <l-tooltip>
              Prestador de servicios - {{ service_provider.properties.name }}
            </l-tooltip>
          </l-marker>

          <ModalServiceProvider :iModal="this.name_service_provider_modal" />
        </div>
        <!--Patrimonio-->

        <div v-if="this.heritage_sites && getVisibleHeritageSites">
          <l-marker
            v-for="(heritage_sites, index2) in this.heritage_sites"
            :key="heritage_sites.properties.name"
            :visible="heritage_sites.properties.is_visible"
            :lat-lng="[
              heritage_sites.geometry.coordinates[1],
              heritage_sites.geometry.coordinates[0]
            ]"
            :icon="iconHeritageSite"
          >
            <l-popup :key="heritage_sites.properties.name + index2">
              <b-button
                pill
                variant="outline-success"
                v-b-modal="'hs' + heritage_sites.properties.name"
                @click="
                  setHeritageSite(
                    heritage_sites.properties.id_heritage_site,
                    heritage_sites.properties.name
                  )
                "
                >{{ heritage_sites.properties.name }}
              </b-button>
            </l-popup>
            <l-tooltip>
              Patrimonio - {{ heritage_sites.properties.name }}</l-tooltip
            >
          </l-marker>

          <ModalHeritageSite :iModal="this.name_heritage_site_modal" />
        </div>
        <div v-if="this.$store.getters.getProjects && getVisibleProjects">
          <l-geo-json :geojson="this.$store.getters.getProjects" />
        </div>
        <div
          v-if="
            this.$store.getters.getMunicipalities && getVisibleMunicipalities
          "
        >
          <l-geo-json :geojson="this.$store.getters.getMunicipalities" />
        </div>
        <div v-if="this.$store.getters.getProvinces && getVisibleProvinces">
          <l-geo-json :geojson="this.$store.getters.getProvinces" />
        </div>
        <div v-if="this.$store.getters.getDepartments && getVisibleDepartments">
          <l-geo-json :geojson="this.$store.getters.getDepartments" />
        </div>
        <div
          v-if="
            this.$store.getters.getDepartamentalRoads &&
              getVisibleDepartamentalRoads
          "
        >
          <l-geo-json :geojson="this.$store.getters.getDepartamentalRoads" />
        </div>
      </l-map>
    </div>
  </div>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LIcon,
  LControlScale,
  LPolygon,
  LPolyline,
  LTooltip,
  LControlLayers,
  LControl,
  LGeoJson
} from "vue2-leaflet";
import ModalServiceProvider from "@/components/ModalServiceProvider.vue";
import ModalHeritageSite from "@/components/ModalHeritageSite.vue";
import { mapGetters } from "vuex";
export default {
  name: "Map",
  props: {},
  data: function() {
    return {
      zoom: 11,
      center: L.latLng(5.6, -72.9),
      bounds: null,
      iconServiceProvider: L.icon({
        iconUrl: require("../assets/icon/actor.png"),
        iconSize: [32, 32],
        iconAnchor: [16, 32]
      }),
      iconHeritageSite: L.icon({
        iconUrl: require("../assets/icon/experience.png"),
        iconSize: [32, 32],
        iconAnchor: [16, 32]
      }),
      name_service_provider_modal: null,
      name_heritage_site_modal: null,
      service_providers: null,
      heritage_sites: null
    };
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LIcon,
    LControlScale,
    LPolygon,
    LPolyline,
    LTooltip,
    LControlLayers,
    LControl,
    LGeoJson,
    ModalServiceProvider,
    ModalHeritageSite
  },
  beforeCreate: function() {
    this.$store.dispatch("loadBaseMap");
  },
  created: function() {
    this.service_providers = this.$store.getters.getServiceProviders.features;
    this.heritage_sites = this.$store.getters.getHeritageSites.features;
  },
  methods: {
    latLng: function(lat, lng) {
      return L.latLng(lat, lng);
    },
    zoomUpdate: function(zoom) {
      this.zoom = zoom;
    },
    centerUpdate: function(center) {
      this.center = center;
    },
    boundsUpdated: function(bounds) {
      this.bounds = bounds;
    },
    setServiceProvider: function(id, name_service_provider) {
      this.name_service_provider_modal = name_service_provider;
      console.log(
        "ID: " +
          id +
          " name: " +
          name_service_provider +
          " modal: " +
          this.name_service_provider_modal
      );
      this.$store.commit("loadServiceProvidersById", id);
    },

    setHeritageSite: function(id, name_heritage_site) {
      this.name_heritage_site_modal = name_heritage_site;
      console.log(
        "ID: " +
          id +
          " name: " +
          name_heritage_site +
          " modal: " +
          this.name_heritage_site_modal
      );
      this.$store.commit("loadHeritageSitesById", id);
    }
  },
  computed: {
    ...mapGetters([
      "getTitle",
      "getBaseMap",
      "getServiceProviders",
      "getHeritageSites",
      "getDepartamentalRoads",
      "getMunicipalities",
      "getProvinces",
      "getDepartments",
      "getProjects",

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
<style scoped>
.map {
  width: 100%;
  height: 600px;
}
</style>

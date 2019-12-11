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
          v-for="map in getBaseMap"
          :key="map.name"
          :name="map.name"
          :visible="map.visible"
          :url="map.url"
          :attribution="map.attribution"
          layer-type="base"
        ></l-tile-layer>

        <!--Prestador de servicios-->
        <div v-if="getServiceProviders && getVisibleServiceProviders">
          <l-marker
            v-for="(service_provider, index) in getServiceProviders.features"
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
                v-b-modal="'e' + service_provider.properties.name"
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
          <div v-if="name_service_provider_modal">
            <ModalServiceProvider :iModal="this.name_service_provider_modal" />
          </div>
        </div>
        <!--Patrimonio-->

        <div v-if="getHeritageSites && getVisibleHeritageSites">
          <l-marker
            v-for="(heritage_sites, index2) in getHeritageSites.features"
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
                v-b-modal="'a' + heritage_sites.properties.name"
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
          <div v-if="name_heritage_site_modal">
            <ModalHeritageSite :iModal="this.name_heritage_site_modal" />
          </div>
        </div>
        <div v-if="getDepartamentalRoads && getVisibleDepartamentalRoads">
          <l-geo-json :geojson="getDepartamentalRoads" />
        </div>
        <div
          v-if="getPopulatedCenterSugamuxi && getVisiblePopulatedCenterSugamuxi"
        >
          <l-geo-json :geojson="getPopulatedCenterSugamuxi" />
        </div>

        <div v-if="getProjects && getVisibleProjects">
          <l-geo-json :geojson="getProjects" />
        </div>
        <div v-if="getMunicipalities && getVisibleMunicipalities">
          <l-geo-json :geojson="getMunicipalities" />
        </div>
        <div v-if="getProvinces && getVisibleProvinces">
          <l-geo-json :geojson="getProvinces" />
        </div>
        <div v-if="getDepartments && getVisibleDepartments">
          <l-geo-json :geojson="getDepartments" />
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
      name_service_provider_modal: null,
      name_heritage_site_modal: null,
      iconServiceProvider: L.icon({
        iconUrl: require("../assets/icon/actor.png"),
        iconSize: [32, 32],
        iconAnchor: [16, 32]
      }),
      iconHeritageSite: L.icon({
        iconUrl: require("../assets/icon/experience.png"),
        iconSize: [32, 32],
        iconAnchor: [16, 32]
      })
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
      for (
        let index = 0;
        index < this.getServiceProviders.features.length;
        index++
      ) {
        if (
          this.getServiceProviders.features[index].properties
            .id_service_provider == id
        ) {
          this.$store.commit("setIdElement", id);
        }
      }
    },
    setHeritageSite: function(id, name_heritage_site) {
      this.name_heritage_site_modal = name_heritage_site;
      for (
        let index = 0;
        index < this.getHeritageSites.features.length;
        index++
      ) {
        if (
          this.getHeritageSites.features[index].properties.id_heritage_site ==
          id
        ) {
          this.$store.commit("setIdElement", id);
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      "getTittle",
      "getBaseMap",
      "getServiceProviders",
      "getHeritageSites",
      "getDepartamentalRoads",
      "getPopulatedCenterSugamuxi",
      "getMunicipalities",
      "getProvinces",
      "getDepartments",
      "getProjects",

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
<style scoped>
.map {
  width: 100%;
  height: 600px;
}
</style>

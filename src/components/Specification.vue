<template>
  <div class="specification">
    <!-- Vias departamentales-->
    <div
      v-if="getDepartamentalRoads && $route.params.id == 'Vias departamentales'"
    >
      <b-card-group fluid class="p-2 bg-light">
        <b-card
          title="Vias departamentales"
          bg-variant="white"
          border-variant="light"
          class="shadow p-2 mb-3 rounded"
        >
          <div
            :key="index"
            v-for="(dr, index) in getDepartamentalRoads.features"
          >
            <b-card
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-5 rounded"
              :title="dr.properties.name"
            >
              <b-card-text>
                Detalles:
              </b-card-text>
              <b-card-text>
                {{ dr.properties.properties }}
              </b-card-text>
            </b-card>
          </div>
          <b-button squared block variant="success" @click="goBack()"
            >Volver</b-button
          >
        </b-card>
      </b-card-group>
    </div>
    <!-- Centro poblado -->
    <div
      v-else-if="
        getPopulatedCenterSugamuxi && $route.params.id == 'Centro poblado'
      "
    >
      <b-card-group fluid class="p-2 bg-light">
        <b-card
          title="Centro poblado sugamuxi"
          bg-variant="white"
          border-variant="light"
          class="shadow p-2 mb-3 rounded"
        >
          <div
            :key="index"
            v-for="(pc, index) in getPopulatedCenterSugamuxi.features"
          >
            <b-card
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-5 rounded"
              :title="pc.properties.name"
            >
              <b-card-text>
                Detalles:
              </b-card-text>
              <b-card-text>
                {{ pc.properties.properties }}
              </b-card-text>
            </b-card>
          </div>
          <b-button squared block variant="success" @click="goBack()"
            >Volver</b-button
          >
        </b-card>
      </b-card-group>
    </div>
    <!-- Municipios -->
    <div v-else-if="getMunicipalities && $route.params.id == 'Municipios'">
      <b-card-group fluid class="p-2 bg-ligth">
        <b-card
          title="Municipios"
          bg-variant="white"
          border-variant="light"
          class="shadow p-2 mb-3 rounded"
        >
          <div
            :key="index"
            v-for="(municipality, index) in getMunicipalities.features"
          >
            <b-card
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-5 rounded"
              :title="municipality.properties.name_municipality"
              :sub-title="
                'Perteneciente a la provincia de ' +
                  municipality.properties.name_province
              "
            >
              <b-card-text>
                Se pueden encontrar los siguientes prestadores de servicio:
              </b-card-text>
              <b-list-group>
                <div
                  :key="index"
                  v-for="(service_provider, index) in municipality.properties
                    .service_provider"
                >
                   <b-button
                              variant="outline-success"
                              pill
                              block
                              @click="
                                goToServiceProvider(
                                  service_provider.id_service_provider,
                                  service_provider.name_service_provider)">
                              {{service_provider.name_service_provider}}
                            </b-button>
                  <p></p>
                </div>
              </b-list-group>
            </b-card>
          </div>
          <b-button squared block variant="success" @click="goBack()"
            >Volver</b-button
          >
        </b-card>
      </b-card-group>
    </div>
    <!-- Provincias -->
    <div v-else-if="getProvinces && $route.params.id == 'Provincias'">
      <b-card-group fluid class="p-2 bg-light">
        <b-card
          title="Provincias"
          bg-variant="white"
          border-variant="light"
          class="shadow p-2 mb-3 rounded"
        >
          <div :key="index" v-for="(province, index) in getProvinces.features">
            <b-card
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-5 rounded"
              :title="province.properties.name_province"
            >
              <div v-if="province.properties.municipality.length != 0">
                <b-card-text>
                  Se pueden encontrar los siguientes municipios
                </b-card-text>
                <b-list-group>
                  <div
                    :key="index"
                    v-for="(municipality, index) in province.properties
                      .municipality"
                  >
                    <b-list-group-item variant="success">{{
                      municipality.name_municipality
                    }}</b-list-group-item>
                    <p></p>
                  </div>
                </b-list-group>
              </div>
              <div v-else>
                <b-card-text>
                  Por el momento no hay municipios asociados con las
                  experiencias.
                </b-card-text>
              </div>
            </b-card>
          </div>

          <b-button squared block variant="success" @click="goBack()"
            >Volver</b-button
          >
        </b-card>
      </b-card-group>
    </div>
    <!-- Departamentos -->
    <div v-else-if="getDepartments && $route.params.id == 'Departamentos'">
      <b-card-group fluid class="p-2 bg-light">
        <b-card
          title="Departamentos"
          bg-variant="white"
          border-variant="light"
          class="shadow p-2 mb-3 rounded"
        >
          <div
            :key="index"
            v-for="(department, index) in getDepartments.features"
          >
            <b-card
              class="shadow p-3 mb-5 bg-white rounded"
              bg-variant="Default"
              header-bg-variant="success"
              :title="department.properties.name_department"
            >
              <b-card-text>
                Se pueden encontrar las siguientes provincias
              </b-card-text>
              <b-list-group>
                <div
                  :key="index"
                  v-for="(province, index) in department.properties.province"
                >
                  <b-list-group-item variant="success">{{
                    province.name_province
                  }}</b-list-group-item>
                  <p></p>
                </div>
              </b-list-group>
            </b-card>
          </div>
          <b-button squared block variant="success" @click="goBack()"
            >Volver</b-button
          >
        </b-card>
      </b-card-group>
    </div>
    <!-- Proyectos -->
    <div v-else-if="getProjects && $route.params.id == 'Proyectos'">
      <b-card-group fluid class="p-2 bg-ligth">
        <b-card
          title="Proyectos"
          bg-variant="white"
          border-variant="light"
          class="shadow p-2 mb-3 rounded"
        >
          <b-card-text>
            Proyectos que se han o estan realizando este momento en la provincia
          </b-card-text>
          <div :key="index" v-for="(project, index) in getProjects.features">
            <b-card
              :title="project.properties.name"
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-5 rounded"
            >
              <b-card-text>
                {{ project.properties.description }}
              </b-card-text>
            </b-card>
          </div>
          <b-button squared block variant="success" @click="goBack()"
            >Volver</b-button
          >
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Carousel from "@/components/Carousel.vue";
import Photo360 from "@/components/Photo360.vue";
export default {
  name: "Specification",
  components: {
    Carousel,
    Photo360
  },
  data() {
    return {
      element: null
    };
  },
  updated() {},
  methods: {
    goBack: function() {
      window.history.back();
    },
    goToServiceProvider(id, name) {
      this.$store.commit("setIdElement", id);
      this.$router.push("/service_provider/" + name);
    }
  },

  computed: {
    ...mapGetters([
      "getTittle",
      "getDepartamentalRoads",
      "getPopulatedCenterSugamuxi",
      "getMunicipalities",
      "getProvinces",
      "getDepartments",
      "getProjects"
    ])
  }
};
</script>

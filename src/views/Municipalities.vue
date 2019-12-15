<template>
  <div class="municipalities">
    <b-container fluid class="p-2 bg-light">
      <div v-if="this.$store.getters.getMunicipalitiesBasic">
        <b-card
          bg-variant="white"
          border-variant="light"
          class="shadow p-4 mb-3 rounded"
          title="Municipios"
        >
          <b-card-text>
            Todos los municipios de las provincias de Boyacá
          </b-card-text>
          <div
            v-for="(municipality, index) in this.$store.getters
              .getMunicipalitiesBasic"
            :key="index"
          >
            <b-card
              no-body
              bg-variant="white"
              border-variant="light"
              class="shadow rounded"
            >
              <b-button
                block
                v-b-toggle="municipality.name_municipality"
                variant="outline-success"
                >{{ municipality.name_municipality }}</b-button
              >
              <b-collapse
                :id="municipality.name_municipality"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-text>
                  <div class="p-2">
                    De la provincia de
                    {{ municipality.name_province }} del departamento de
                    {{ municipality.name_department }}
                  </div>
                </b-card-text>
                <b-container fluid class="p-2 bg-default">
                  <b-card-group deck>
                    <b-card
                      bg-variant="white"
                      border-variant="light"
                      class="shadow p-2 mb-5 rounded text-center"
                      title="Prestadores de servicio en este municipio"
                    >
                      <div v-if="municipality.service_provider.length != 0">
                        <b-list-group>
                          <div
                            v-for="(service_provider,
                            index) in municipality.service_provider"
                            :key="index"
                          >
                            <b-button
                              variant="outline-success"
                              pill
                              block
                              @click="
                                goToServiceProvider(
                                  service_provider.id_service_provider,
                                  service_provider.name_service_provider
                                )
                              "
                            >
                              {{ service_provider.name_service_provider }}
                            </b-button>
                            <p></p>
                          </div>
                        </b-list-group>
                      </div>
                      <div v-else>
                        Por el momento no hay prestadores relacionados a este
                        municipio
                      </div>
                    </b-card>
                  </b-card-group>
                </b-container>
              </b-collapse>
            </b-card>
            <p></p>
          </div>
          <b-button squared block variant="success" @click="goBack()"
            >Volver</b-button
          >
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
import { Circle8 } from "vue-loading-spinner";
import { mapGetters } from "vuex";
export default {
  name: "Municipalities",
  data() {
    return {
      name: "Municipios"
    };
  },
  components: {
    Circle8
  },
  methods: {
    goBack: function() {
      window.history.back();
    },
    goToServiceProvider(id, name) {
      this.$store.commit("loadServiceProvidersById", id);
      this.$router.push("service_provider/" + name);
    }
  },
  beforeCreate: function() {
    this.$store.commit("loadMunicipalitiesBasic");
  }
};
</script>

<template>
  <div class="municipalities">
    <b-container fluid class="p-2 bg-light">
      <div v-if="this.loading" class="mx-auto bg-success" style="width: 100px;">
        <Circle8></Circle8>
      </div>
      <div v-else>
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
            v-for="(municipality, index) in this.municipalities"
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
                v-b-toggle="municipality.properties.name_municipality"
                variant="outline-success"
                >{{ municipality.properties.name_municipality }}</b-button
              >
              <b-collapse
                :id="municipality.properties.name_municipality"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-text>
                  <div class="p-2">
                    De la provincia de
                    {{ municipality.properties.name_province }} del departamento
                    de {{ municipality.properties.name_department }}
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
                      <div
                        v-if="
                          municipality.properties.service_provider.length != 0
                        "
                      >
                        <b-list-group>
                          <div
                            v-for="(service_provider, index) in municipality
                              .properties.service_provider"
                            :key="index"
                          >
                            <b-list-group-item variant="success">{{
                              service_provider.name_service_provider
                            }}</b-list-group-item>
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
export default {
  name: "Municipalities",
  data() {
    return {
      name: "Municipios",
      municipalities: null,
      loading: false
    };
  },
  components: {
    Circle8
  },
  methods: {
    goBack: function() {
      window.history.back();
    }
  },
  created: function() {
    try {
      this.loading = false;
      this.municipalities = this.$store.getters.getMunicipalities.features;
    } catch (error) {
      this.loading = true;
    }
  }
};
</script>

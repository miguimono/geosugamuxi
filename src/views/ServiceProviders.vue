<template>
  <div class="service_providers">
    <b-container fluid class="p-2 bg-light">
      <div v-if="this.loading" class="mx-auto bg-success" style="width: 100px;">
        <Circle8></Circle8>
      </div>
      <div v-else>
        <b-card
          bg-variant="white"
          border-variant="light"
          class="shadow p-4 mb-3 rounded"
          title="Prestadores de servicio"
        >
          <b-card-text>
            Aqui se pueden consultar todos los prestadores de servicios
          </b-card-text>
          <div
            v-for="(service_provider, index) in this.service_providers"
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
                v-b-toggle="service_provider.properties.name"
                variant="outline-success"
                >{{ service_provider.properties.name }}</b-button
              >
              <b-collapse
                :id="service_provider.properties.name"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-text>
                  <div class="p-2">
                    <b-button
                      variant="outline-success"
                      pill
                      @click="
                        goToServiceProvider(
                          service_provider.properties.id_service_provider,
                          service_provider.properties.name
                        )
                      "
                    >
                      Ver detalles
                    </b-button>
                  </div>
                  <div class="p-2">
                    {{ service_provider.properties.history }}
                  </div>
                </b-card-text>
                <b-container fluid class="p-2 bg-default">
                  <b-card-group deck>
                    <b-card
                      bg-variant="white"
                      border-variant="light"
                      class="shadow p-2 mb-5 rounded text-center"
                      title="Servicios que se prestan"
                    >
                      <b-list-group>
                        <div
                          v-for="(service, index) in service_provider.properties
                            .services"
                          :key="index"
                        >
                          <b-button
                            block
                            variant="outline-success"
                            pill
                            @click="goToService(service.name_service)"
                          >
                            Servicio de {{ service.name_service }}
                          </b-button>
                          <p></p>
                        </div>
                      </b-list-group>
                    </b-card>
                    <b-card
                      bg-variant="white"
                      border-variant="light"
                      class="shadow p-2 mb-5 rounded text-center"
                      title="Algunos planes que puedes preguntar"
                    >
                      <b-list-group>
                        <div
                          v-for="(tourist_plan, index2) in service_provider
                            .properties.tourist_plan"
                          :key="index2"
                        >
                          <b-list-group-item variant="success">{{
                            tourist_plan.name_tourist_plan
                          }}</b-list-group-item>
                          <p></p>
                        </div>
                      </b-list-group>
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
  name: "Service_providers",
  data() {
    return {
      name: "Prestadores de servicio",
      service_providers: null,
      loading: false
    };
  },
  components: {
    Circle8
  },
  methods: {
    goBack: function() {
      window.history.back();
    },
    goToService(name) {
      if (name == "Alojamiento") {
        this.$router.push("/accommodation");
      } else if (name == "Gastronomía") {
        this.$router.push("/gastronomy");
      } else if (name == "Animación") {
        this.$router.push("/animation");
      } else if (name == "Transporte") {
        this.$router.push("/transport");
      }
    },
    goToServiceProvider(id, name) {
      this.$store.commit("setIdElement", id);
      this.$router.push("service_provider/" + name);
    }
  },

  created: function() {
    try {
      this.service_providers = this.$store.getters.getServiceProviders.features;
      this.loading = false;
    } catch (error) {
      this.loading = true;
    }
  }
};
</script>

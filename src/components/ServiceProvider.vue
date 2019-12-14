<template>
  <div class="specification">
    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="warning"
      @dismiss-count-down="countDownChanged"
    >
      Desliza hacia abajo para ver mas información
    </b-alert>
    <!-- Prestador de servicio -->
    <div v-if="this.service_provider">
      <b-container fluid class="p-2 bg-light">
        <b-card
          bg-variant="white"
          border-variant="light"
          class="shadow p-2 mb-3 rounded"
          :title="this.service_provider.name"
        >
          <div v-if="this.service_provider.history">
            <b-card-text>{{ this.service_provider.history }} </b-card-text>
          </div>

          <b-container fluid class="p-2 bg-default">
            <b-card
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-5 rounded"
              title="Trayectoria"
            >
              <b-card-text>
                Creada desde el
                {{ this.service_provider.start_date[0] }}
                {{ this.service_provider.start_date[1] }}
                {{ this.service_provider.start_date[2] }}
                {{ this.service_provider.start_date[3] }}
                , {{ this.service_provider.trajectory }}
              </b-card-text>

              <b-card-text>
                Horario: {{ this.service_provider.opening_hours }}
              </b-card-text>
            </b-card>
          </b-container>
          <b-container fluid class="p-2 bg-default">
            <b-card-group deck>
              <b-card
                bg-variant="white"
                border-variant="light"
                class="shadow p-2 mb-5 rounded"
                title="Planes turísticos"
              >
                <div v-if="this.service_provider.tourist_plan.length != 0">
                  <div
                    :key="index"
                    v-for="(tourist_plan, index) in this.service_provider
                      .tourist_plan"
                  >
                    <b-card-group deck>
                      <b-card
                        bg-variant="white"
                        border-variant="light"
                        class="shadow p-2 mb-5 rounded"
                        :title="tourist_plan.name_tourist_plan"
                      >
                        <b-card-text>
                          <div v-if="tourist_plan.terms">
                            Terminos: {{ tourist_plan.terms }}
                          </div>
                          <div v-if="tourist_plan.description">
                            Descripcion: {{ tourist_plan.description }}
                          </div>
                          <div v-if="tourist_plan.price">
                            Precio: ${{ tourist_plan.price }} COP
                          </div>
                        </b-card-text>
                      </b-card>
                    </b-card-group>
                    <p></p>
                  </div>
                </div>
                <div v-else>
                  No se registran planes por el momento
                </div>
              </b-card>
              <b-card
                bg-variant="white"
                border-variant="light"
                class="shadow p-2 mb-5 rounded"
                title="Servicios que se pueden preguntar"
              >
                <div
                  :key="index"
                  v-for="(services, index) in this.service_provider.services"
                >
                  <b-card-group deck>
                    <b-card
                      bg-variant="white"
                      border-variant="light"
                      class="shadow p-2 mb-5 rounded"
                      :title="services.name_service"
                    >
                      <b-card-text>
                        <div v-if="services.minimum_price">
                          Precion mínimo: ${{ services.minimum_price }} COP
                        </div>
                        <div v-if="services.maximum_price">
                          Precio máximo: ${{ services.maximum_price }} COP
                        </div>
                        <div v-if="services.capacity">
                          Capacidad: {{ services.capacity }}
                        </div>
                      </b-card-text>
                      <b-button
                        :id="services.name_service"
                        @click="goTo(services.name_service)"
                        block
                        pill
                        size="sm"
                        variant="outline-success"
                        >Ver detalles de {{ services.name_service }}</b-button
                      >
                    </b-card>
                  </b-card-group>
                </div>
              </b-card>
            </b-card-group>
          </b-container>
          <b-container fluid class="p-2 bg-default">
            <b-card-group deck>
              <b-card
                bg-variant="white"
                border-variant="light"
                class="shadow p-2 mb-5 rounded"
                title="Localización"
              >
                <b-card-text>
                  {{ this.service_provider.name_department }} /
                  {{ this.service_provider.name_province }} /
                  {{ this.service_provider.name_municipality }}
                  <div v-if="this.service_provider.sidewalk">
                    Vereda: {{ this.service_provider.sidewalk }}
                  </div>
                  <div v-if="this.service_provider.sector">
                    Sector: {{ this.service_provider.sector }}
                  </div>
                  <div v-if="this.service_provider.address">
                    Direccion: {{ this.service_provider.address }}
                  </div>
                  <p></p>
                </b-card-text>
              </b-card>

              <b-card
                bg-variant="white"
                border-variant="light"
                class="shadow p-2 mb-5 rounded"
                :title="this.service_provider.contact_name"
              >
                <b-card-text>
                  <div v-if="this.service_provider.contact_cell">
                    Celular: {{ this.service_provider.contact_cell }}
                  </div>
                  <div v-if="this.service_provider.contact_phone">
                    Número adicional:
                    {{ this.service_provider.contact_phone }}
                  </div>
                  <div v-if="this.service_provider.contact_mail">
                    Correo: {{ this.service_provider.contact_mail }}
                  </div>
                  <div v-if="this.service_provider.contact_web">
                    Web: {{ this.service_provider.contact_web }}
                  </div>
                </b-card-text>
              </b-card>
            </b-card-group>
          </b-container>
          <b-container fluid>
            <b-card
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-5 rounded text-center"
              title="Conoce quien ofrece los servicios"
            >
              <Carousel :gallery_id="this.service_provider.id_photo" />
            </b-card>
          </b-container>
          <b-button squared block variant="success" @click="goBack()"
            >Volver</b-button
          >
        </b-card>
      </b-container>
    </div>
    <!--Patrimonio-->
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
      service_provider: null,
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  },
  created() {
    this.showAlert();
    for (
      let index = 0;
      index < this.getServiceProviders.features.length;
      index++
    ) {
      if (
        this.getServiceProviders.features[index].properties
          .id_service_provider == this.getIdElement
      ) {
        this.service_provider = this.getServiceProviders.features[
          index
        ].properties;
      }
    }
  },
  methods: {
    goBack: function() {
      window.history.back();
    },

    goTo(name) {
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
    goToExperience(name) {
      this.$router.push("/experience/" + name);
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  },

  computed: {
    ...mapGetters(["getTitle", "getIdElement", "getServiceProviders"])
  }
};
</script>

<template>
  <div class="specification">
    <div v-if="this.$store.getters.getServiceProvider">
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

      <b-container fluid class="p-2 bg-light">
        <b-card
          bg-variant="white"
          border-variant="light"
          class="shadow p-2 mb-3 rounded"
          :title="
            this.$store.getters.getServiceProvider.features[0].properties.name
          "
        >
          <div
            v-if="
              this.$store.getters.getServiceProvider.features[0].properties
                .history
            "
          >
            <b-card-text
              >{{
                this.$store.getters.getServiceProvider.features[0].properties
                  .history
              }}
            </b-card-text>
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
                {{
                  this.$store.getters.getServiceProvider.features[0].properties
                    .start_date[0]
                }}
                {{
                  this.$store.getters.getServiceProvider.features[0].properties
                    .start_date[1]
                }}
                {{
                  this.$store.getters.getServiceProvider.features[0].properties
                    .start_date[2]
                }}
                {{
                  this.$store.getters.getServiceProvider.features[0].properties
                    .start_date[3]
                }}
                ,
                {{
                  this.$store.getters.getServiceProvider.features[0].properties
                    .trajectory
                }}
              </b-card-text>

              <b-card-text>
                Horario:
                {{
                  this.$store.getters.getServiceProvider.features[0].properties
                    .opening_hours
                }}
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
                <div
                  v-if="
                    this.$store.getters.getServiceProvider.features[0]
                      .properties.tourist_plan.length != 0
                  "
                >
                  <div
                    :key="index"
                    v-for="(tourist_plan, index) in this.$store.getters
                      .getServiceProvider.features[0].properties.tourist_plan"
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
                            Precio: {{ tourist_plan.price }}
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
                  v-for="(services, index) in this.$store.getters
                    .getServiceProvider.features[0].properties.services"
                >
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
                </div>
              </b-card>
            </b-card-group>
          </b-container>
          <b-container fluid class="p-2 bg-default">
            <b-card-group deck>
              <b-card
                bg-variant="white"
                border-variant="white"
                class="shadow mb-5 rounded text-center"
                title="Conoce quién ofrece los servicios"
              >
                <Carousel
                  :gallery_id="
                    this.$store.getters.getServiceProvider.features[0]
                      .properties.id_photo
                  "
                />
              </b-card>
              <b-card bg-variant="white" border-variant="white" no-body>
                <b-card
                  bg-variant="white"
                  border-variant="light"
                  class="shadow p-2 mb-5 rounded"
                  title="Localización"
                >
                  <b-card-text>
                    {{
                      this.$store.getters.getServiceProvider.features[0]
                        .properties.name_department
                    }}
                    /
                    {{
                      this.$store.getters.getServiceProvider.features[0]
                        .properties.name_province
                    }}
                    /
                    {{
                      this.$store.getters.getServiceProvider.features[0]
                        .properties.name_municipality
                    }}
                    <div
                      v-if="
                        this.$store.getters.getServiceProvider.features[0]
                          .properties.sidewalk
                      "
                    >
                      Vereda:
                      {{
                        this.$store.getters.getServiceProvider.features[0]
                          .properties.sidewalk
                      }}
                    </div>
                    <div
                      v-if="
                        this.$store.getters.getServiceProvider.features[0]
                          .properties.sector
                      "
                    >
                      Sector:
                      {{
                        this.$store.getters.getServiceProvider.features[0]
                          .properties.sector
                      }}
                    </div>
                    <div
                      v-if="
                        this.$store.getters.getServiceProvider.features[0]
                          .properties.address
                      "
                    >
                      Direccion:
                      {{
                        this.$store.getters.getServiceProvider.features[0]
                          .properties.address
                      }}
                    </div>
                    <p></p>
                  </b-card-text>
                </b-card>

                <b-card
                  bg-variant="white"
                  border-variant="light"
                  class="shadow p-2 mb-5 rounded"
                  :title="
                    this.$store.getters.getServiceProvider.features[0]
                      .properties.contact_name
                  "
                >
                  <b-card-text>
                    <div
                      v-if="
                        this.$store.getters.getServiceProvider.features[0]
                          .properties.contact_cell
                      "
                    >
                      Celular:
                      {{
                        this.$store.getters.getServiceProvider.features[0]
                          .properties.contact_cell
                      }}
                    </div>
                    <div
                      v-if="
                        this.$store.getters.getServiceProvider.features[0]
                          .properties.contact_phone
                      "
                    >
                      Número adicional:
                      {{
                        this.$store.getters.getServiceProvider.features[0]
                          .properties.contact_phone
                      }}
                    </div>
                    <div
                      v-if="
                        this.$store.getters.getServiceProvider.features[0]
                          .properties.contact_mail
                      "
                    >
                      Correo:
                      {{
                        this.$store.getters.getServiceProvider.features[0]
                          .properties.contact_mail
                      }}
                    </div>
                    <div
                      v-if="
                        this.$store.getters.getServiceProvider.features[0]
                          .properties.contact_web
                      "
                    >
                      Web:
                      {{
                        this.$store.getters.getServiceProvider.features[0]
                          .properties.contact_web
                      }}
                    </div>
                  </b-card-text>
                </b-card>
              </b-card>
            </b-card-group>
          </b-container>

          <b-button squared block variant="success" @click="goBack()"
            >Volver</b-button
          >
        </b-card>
      </b-container>
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
      service_provider: null,
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  },
  created() {
    this.showAlert();
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
    ...mapGetters(["getTitle", "getServiceProviders"])
  }
};
</script>

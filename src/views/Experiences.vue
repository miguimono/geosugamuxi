<template>
  <div class="experiences">
    <b-container fluid class="p-2 bg-light">
      <div v-if="this.$store.getters.getExperiencesBasic">
        <b-card
          bg-variant="white"
          border-variant="light"
          class="shadow p-4 mb-3 rounded"
          title="Experiencias significativas"
        >
          <b-card-text>
            Las experiencias en turismo rural vinculan un número significativo
            de patrimonios naturales y culturales -del tipo material e
            inmaterial- que dan cuenta de la valoración, manejo y protección de
            bienes y manifestaciones territoriales históricas, que forjan la
            identidad y la apropiación espacial en una región.
          </b-card-text>

          <div
            v-for="(experience, index) in this.$store.getters
              .getExperiencesBasic"
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
                v-b-toggle="experience.name"
                variant="outline-success"
                >{{ experience.name }}</b-button
              >

              <b-collapse
                :id="experience.name"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-text>
                  <div class="p-2" style="float: right;">
                    <b-button
                      variant="outline-success"
                      pill
                      @click="
                        goToExperience(
                          experience.id_experience,
                          experience.name
                        )
                      "
                    >
                      Ver detalles
                    </b-button>
                  </div>
                  <div class="p-2">
                    {{ experience.short_history }}
                  </div>
                </b-card-text>
                <b-container fluid class="p-2 bg-default">
                  <b-card-group deck>
                    <b-card
                      bg-variant="white"
                      border-variant="light"
                      class="shadow p-2 mb-5 rounded text-center"
                      title="Patrimonios que se pueden encontrar"
                    >
                      <b-list-group>
                        <div
                          v-for="(heritage_sites,
                          index) in experience.heritage_sites"
                          :key="index"
                        >
                          <b-button
                            block
                            variant="outline-success"
                            pill
                            :id="heritage_sites.name_heritage_site"
                            @click="
                              goToHeritageSite(
                                heritage_sites.id_heritage_site,
                                heritage_sites.name_heritage_site
                              )
                            "
                          >
                            {{ heritage_sites.name_heritage_site }}
                          </b-button>
                          <p></p>
                          <b-tooltip
                            variant="info"
                            placement="leftbottom"
                            :target="heritage_sites.name_heritage_site"
                            triggers="hover"
                          >
                            Patrimonio {{ heritage_sites.type_heritage_site }}
                          </b-tooltip>
                        </div>
                      </b-list-group>
                    </b-card>
                    <b-card
                      bg-variant="white"
                      border-variant="light"
                      class="shadow p-2 mb-5 rounded text-center"
                      title="Servicios para disfrutar"
                    >
                      <b-list-group>
                        <div
                          v-for="(service, index) in experience.services"
                          :key="index"
                        >
                          <b-button
                            block
                            variant="outline-success"
                            pill
                            @click="goToService(service.name_service)"
                            :id="service.name_service"
                          >
                            Servicio de {{ service.name_service }} 
                          </b-button>
                          <b-tooltip
                            variant="info"
                            placement="rightbottom"
                            :target="service.name_service"
                            triggers="hover"
                          >
                            {{ service.type }}
                          </b-tooltip>
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
  name: "Experiences",
  data() {
    return {
      name: "Experiencias"
    };
  },
  components: {
    Circle8
  },
  methods: {
    goBack: function() {
      window.history.back();
    },
    goToHeritageSite: function(id, name) {
      this.$store.commit("loadHeritageSitesById", id);
      this.$router.push("/heritage_site/" + name);
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
    goToExperience(id, name) {
      this.$store.commit("loadExperienceById", id);
      this.$router.push("/experience/" + name);
    }
  },

  beforeCreate: function() {
    this.$store.commit("loadExperiencesBasic");
  }
};
</script>

<template>
  <div class="experiences">
    <b-container fluid class="p-2 bg-light">
      <div v-if="this.loading" class="mx-auto bg-success" style="width: 100px;">
        <Circle8></Circle8>
      </div>
      <div v-else>
        <b-card
          bg-variant="white"
          border-variant="light"
          class="shadow p-4 mb-3 rounded"
          title="Experiencia"
        >
          <b-card-text>
            El turismo rural es aquélla actividad de viajar a las áreas rurales
            (en sentido amplio) con finalidades múltiples, por lo tanto es un
            concepto analítico multidimensional: económico, jurídico, gerencial
            y fenomenológico. La investigación sobre turismo rural debe
            realizarse a partir de su definición, de su naturaleza y de sus
            dimensiones. La autenticidad existencial es un concepto
            fenomenológico que resultó útil para el estudio de cualquier
            experiencia, incluyendo la del turismo rural, que es una experiencia
            significativa o existencial.
          </b-card-text>

          <div v-for="(experience, index) in this.experiences" :key="index">
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
                  <div class="p-2">
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
                          >
                            El servicio de {{ service.name_service }} cuenta con
                            {{ service.type }}, {{ service.description }}
                          </b-button>
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
      name: "Experiencias",
      experiences: null,
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
    goToHeritageSite: function(id, name) {
      this.$store.commit("setIdElement", id);
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
      this.$store.commit("setIdElement", id);
      this.$router.push("/experience/" + name);
    }
  },
  created: function() {
    try {
      this.experiences = this.$store.getters.getExperiences;
      this.loading = false;
    } catch (error) {
      this.loading = true;
    }
  }
};
</script>

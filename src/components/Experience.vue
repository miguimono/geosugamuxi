<template>
  <div class="experience">
    <div v-if="this.experience">
      <b-container fluid class="p-2 bg-ligth">
        <b-card
          bg-variant="white"
          border-variant="light"
          class="shadow p-2 mb-3 rounded"
          :title="this.experience.name"
        >
          <b-card-text>
            <h5 class="mb-2">¡{{ this.experience.slogan }}!</h5>
            <p class="mb-2">
              {{ experience.history }}
            </p>
          </b-card-text>

          <b-container fluid class="p-2 bg-default">
            <b-card
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-5 rounded"
              title="Recomendaciones"
            >
              <p class="mt-2">
                {{ this.experience.recommendations }}
              </p>
            </b-card>
          </b-container>
          <b-container fluid class="p-2 bg-default">
            <b-card-group deck>
              <b-card
                bg-variant="white"
                border-variant="light"
                class="shadow p-2 mb-5 rounded"
                title="Patrimonios"
              >
                <div
                  v-for="(heritage_sites, index) in experience.heritage_sites"
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
                    {{ heritage_sites.name_heritage_site }} de tipo
                    {{ heritage_sites.type_heritage_site }}</b-button
                  >

                  <p></p>
                </div>
              </b-card>
              <b-card
                bg-variant="white"
                border-variant="light"
                class="shadow p-2 mb-5 rounded"
                title="Servicios"
              >
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
                    Disfruta de la {{ service.name_service }} de tipo
                    {{ service.type }}
                  </b-button>
                  <p></p>
                </div>
              </b-card>
            </b-card-group>
          </b-container>
          <b-container fluid>
            <b-card
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-5 rounded"
              title="Galeria fotografica"
            >
              <Carousel :gallery_id="this.experience.id_gallery" />
            </b-card>
          </b-container>
          <b-container fluid>
            <b-card
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-5 rounded"
              title="Recorrido virtual"
            >
              <Photo360 :photo_src="this.experience.id_photo_360" />
            </b-card>
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
  name: "Experience",
  components: {
    Carousel,
    Photo360
  },
  data() {
    return {
      experience: null
    };
  },
  created() {
    for (let index = 0; index < this.getExperiences.length; index++) {
      if (this.getExperiences[index].id_experience == this.getIdElement) {
        this.experience = this.getExperiences[index];
      }
    }
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
    goToHeritageSite: function(id, name) {
      this.$store.commit("setIdElement", id);
      this.$router.push("/heritage_site/" + name);
    }
  },
  computed: {
    ...mapGetters([
      "getTittle",
      "getExperiences",
      "getIdElement",
      "getHeritageSites"
    ])
  }
};
</script>

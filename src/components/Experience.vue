<template>
  <div class="experience">
    <div v-if="this.$store.getters.getExperience">
      <b-alert
        :show="dismissCountDown"
        dismissible
        fade
        variant="warning"
        @dismiss-count-down="countDownChanged"
      >
        Desliza hacia abajo para ver mas información
      </b-alert>

      <b-container fluid class="p-2 bg-ligth">
        <b-card
          bg-variant="white"
          border-variant="light"
          class="shadow p-2 mb-3 rounded"
          :title="this.$store.getters.getExperience[0].name"
        >
          <div></div>
          <b-card-text>
            <h5 class="mb-2">
              ¡{{ this.$store.getters.getExperience[0].slogan }}!
            </h5>
            <p class="mb-2">
              {{ this.$store.getters.getExperience[0].history }}
            </p>
          </b-card-text>

          <b-container fluid class="p-2 bg-default">
            <b-card
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-5 rounded"
              title="!Recomendaciones para tener en cuenta!"
            >
              <p class="mt-2">
                {{ this.$store.getters.getExperience[0].recommendations }}
              </p>
            </b-card>
          </b-container>
          <b-container fluid class="p-2 bg-default">
            <b-card-group deck>
              <b-card
                bg-variant="white"
                border-variant="light"
                class="shadow p-2 mb-5 rounded text-center"
                title="Lugares patrimonio de la humanidad"
              >
                <div
                  v-for="(heritage_sites, index) in this.$store.getters
                    .getExperience[0].heritage_sites"
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
                class="shadow p-2 mb-5 rounded text-center"
                title="Facilita tu experiencia con estos servicios"
              >
                <div
                  v-for="(service, index) in this.$store.getters
                    .getExperience[0].services"
                  :key="index"
                >
                  <b-button
                    block
                    variant="outline-success"
                    pill
                    @click="goToService(service.name_service)"
                    :id="service.name_service"
                  >
                    Disfruta del servicio de {{ service.name_service }}
                  </b-button>
                  <b-tooltip
                    variant="info"
                    placement="righttop"
                    :target="service.name_service"
                    triggers="hover"
                  >
                    {{ service.type }}
                  </b-tooltip>
                  <p></p>
                </div>
              </b-card>
            </b-card-group>
          </b-container>

          <b-container fluid>
            <b-card
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-5 rounded text-center"
              title="Sorprendete con la belleza de esta experiencia"
            >
              <b-container fluid class="p-1 bg-dark">
                <Gallery
                  :images="this.$store.getters.getPhotosGallery"
                ></Gallery>
              </b-container>
            </b-card>
          </b-container>
          <b-container fluid>
            <b-card
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-5 rounded text-center"
              title="Sorprendete con la belleza de esta experiencia"
            >
              <Carousel
                :gallery_id="
                  this.$store.getters.getExperience[0].id_gallery
                "
              />
            </b-card>
          </b-container>
          <b-container fluid>
            <b-card
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-5 rounded text-center"
              title="Realiza una inmersión virtual"
            >
              <Photo360
                :photo_src="
                  this.$store.getters.getExperience[0].id_photo_360
                "
              />
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
import Gallery from "vue-cover-gallery";

export default {
  name: "Experience",
  components: {
    Carousel,
    Photo360,
    Gallery
  },
  data() {
    return {
      experience: null,
      images: this.$store.getters.getPhotos2,
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  },

  created() {
    this.showAlert();
  },

  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
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
      this.$store.commit("loadHeritageSitesById", id);
      this.$router.push("/heritage_site/" + name);
    }
  },
  computed: {
    ...mapGetters([
      "getTitle",
      "getExperiences",
      "getHeritageSites"
    ])
  }
};
</script>

<template>
  <div class="home">
    <b-container fluid class="p-2 bg-light">
      <div
        v-if="
          this.$store.getters.getExperience &&
            this.$store.getters.getHeritageSite &&
            this.$store.getters.getServiceProvider
        "
      >
        <b-card bg-variant="light" border-variant="light" no-body>
          <b-card
            no-body
            bg-variant="dark"
            class="shadow p-1 rounded"
            border-variant="dark"
          >
            <section class="hero">
              <div class="hero-inner">
                <h1>Descubre experiencias de turismo rural</h1>
                <h2>
                  ¿Quiéres explorar nuevas emociones en el paisaje boyacense?
                </h2>
                <div>
                  <a href="experiences" class="btn1">Conoce mas</a>
                </div>
              </div>
            </section>
          </b-card>
          <b-card
            no-body
            bg-variant="dark"
            class="shadow p-1 mb-5 rounded"
            border-variant="dark"
          >
            <section class="hero2" id="conoce">
              <div class="hero-inner">
                <h1>Diálogo entre culturas, aprendiendo con las personas</h1>
                <h2>Mira quiénes pueden guiar tu recorrido...</h2>
                <div>
                  <a href="service_providers" class="btn2">Conócelos</a>
                </div>
              </div>
            </section>
          </b-card>
          <b-card
            fluid
            no-body
            class="bg-light"
            bg-variant="light "
            border-variant="light"
          >
            <InfoCard
              :type="true"
              :headerFront="this.$store.getters.getExperience[0].name"
              front="¡Experiencia recomendada para tí"
              :headerBack="this.$store.getters.getExperience[0].slogan"
              :back="this.$store.getters.getExperience[0].short_history"
            >
            </InfoCard>
            <b-card
              fluid
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-5 rounded"
            >
              <Carousel
                :gallery_id="this.$store.getters.getExperience[0].id_gallery"
              />
              <p />
              <b-button
                class="center"
                variant="outline-success"
                block
                pill
                @click="goToExperiences()"
                >Explora todas las experiencias de la provincia
              </b-button>
            </b-card>
          </b-card>
          <b-card-group deck>
            <b-card
              id="conoce"
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-5 rounded"
              :title="
                'Conoce... ' +
                  this.$store.getters.getHeritageSite.features[0].properties
                    .name
              "
            >
              <b-card-text>
                {{
                  this.$store.getters.getHeritageSite.features[0].properties
                    .description
                }}
              </b-card-text>
              <b-card-text>
                <b-button
                  block
                  variant="outline-success"
                  pill
                  @click="goToHeritageSites()"
                  >Encuentra todos los patrimonios
                </b-button>
              </b-card-text>
            </b-card>
            <b-card
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-5 rounded"
              :title="
                'Visita... ' +
                  this.$store.getters.getServiceProvider.features[0].properties
                    .name
              "
            >
              <b-card-text>
                {{
                  this.$store.getters.getServiceProvider.features[0].properties
                    .history
                }}
              </b-card-text>
              <b-card-text>
                <b-button
                  variant="outline-success"
                  block
                  pill
                  @click="goToServiceProviders()"
                  >Visita todos los prestadores de servicio
                </b-button>
              </b-card-text>
            </b-card>
          </b-card-group>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import { mapGetters } from "vuex";
//import { Circle8 } from "vue-loading-spinner";
import InfoCard from "@/components/InfoCard.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    //  Circle8,
    InfoCard
  },
  data() {
    return {
      image: "require('@/assets/picutres/hero.jpeg')"
    };
  },
  created: function() {
    this.$store.commit("loadRandomServiceProvider");
    this.$store.commit("loadRandomExperience");
    this.$store.commit("loadRandomHeritageSite");
  },
  mounted: function() {},

  methods: {
    goToExperiences() {
      this.$router.push("experiences");
    },
    goToHeritageSites: function() {
      this.$router.push("heritage_sites");
    },
    goToServiceProviders: function() {
      this.$router.push("service_providers");
    }
  },
  computed: {
    ...mapGetters(["getTitle"])
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: sans-serif;
}

.hero {
  /* Sizing */
  width: 79vw;
  height: 100vh;

  /* Flexbox stuff */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Text styles */
  text-align: center;
  color: white; /* ADD THIS LINE */
  text-shadow: 2px 2px #000000;
  /* Background styles */
  background-image: url("../assets/pictures/hero2.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.hero .btn1 {
  /* Positioning and sizing */
  display: block;
  width: 200px;

  /* Padding and margins */
  padding: 1em;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

  /* Text styles */
  color: white; /* CHANGE THIS LINE */
  text-decoration: none;
  font-size: 1.5em;

  /* Border styles */
  border: 3px solid white; /* CHANGE THIS LINE */
  border-radius: 20px;
}

.hero h1 {
  /* Text styles */
  font-size: 5em;

  /* Margins */
  margin-top: 0;
  margin-bottom: 0.5em;
}

.hero2 {
  /* Sizing */
  width: 79vw;
  height: 100vh;

  /* Flexbox stuff */
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 2px 2px #000000;
  /* Text styles */
  text-align: center;
  color: white; /* ADD THIS LINE */

  /* Background styles */
  background-image: url("../assets/pictures/hero.jpeg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.hero2 .btn2 {
  /* Positioning and sizing */
  display: block;
  width: 200px;

  /* Padding and margins */
  padding: 1em;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

  /* Text styles */
  color: white; /* CHANGE THIS LINE */
  text-decoration: none;
  font-size: 1.5em;

  /* Border styles */
  border: 3px solid white; /* CHANGE THIS LINE */
  border-radius: 20px;
}
.hero2 h1 {
  /* Text styles */
  font-size: 4em;

  /* Margins */
  margin-top: 0;
  margin-bottom: 0.5em;
}
</style>

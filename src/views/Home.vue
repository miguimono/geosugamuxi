<template>
  <div class="home">
    <b-container fluid class="p-2 bg-light">
      <div v-if="loading">
        <Circle8 />
      </div>
      <div v-else>
        <b-card bg-variant="light" border-variant="light" no-body>
          <b-card-group deck>
            <b-card no-body bg-variant="light" border-variant="light">
              <b-card
                bg-variant="white"
                border-variant="light"
                class="shadow p-2 mb-5 rounded"
                :title="
                  'Descubre el ' + getHeritageSites[this.rnd_hs].properties.name
                "
              >
                <b-card-text>
                  {{ getHeritageSites[this.rnd_hs].properties.description }}
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
                  'Conoce a ' + getServiceProviders[this.rnd_sp].properties.name
                "
              >
                <b-card-text>
                  {{ getServiceProviders[this.rnd_sp].properties.history }}
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
            </b-card>
            <b-card
              fluid
              no-body
              class="bg-light"
              bg-variant="light"
              border-variant="light"
            >
              <b-card
                fluid
                class="bg-light"
                bg-variant="light"
                border-variant="light"
              >
                <info-card
                  :frontType="'text'"
                  frontTitle="Disfruta de la experiencia"
                  :frontData="getExperiences[this.rnd_ex].name"
                  :backType="'text'"
                  :backTitle="getExperiences[this.rnd_ex].slogan"
                  :backData="getExperiences[this.rnd_ex].short_history"
                />
                <p />
              </b-card>
              <p />
              <b-card
                fluid
                bg-variant="white"
                border-variant="light"
                class="shadow p-2 mb-5 rounded"
                :title="getExperiences[this.rnd_ex].name"
              >
                <Carousel
                  :gallery_id="getExperiences[this.rnd_ex].id_gallery"
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
          </b-card-group>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import InfoCard from "vue-info-card";
import { mapGetters } from "vuex";
import { Circle8 } from "vue-loading-spinner";

export default {
  name: "Home",
  components: {
    Carousel,
    Circle8,
    InfoCard
  },
  data() {
    return {
      loading: false,
      rnd_ex: null,
      rnd_hs: null,
      rnd_sp: null,
      getExperiences: null,
      getHeritageSites: null,
      getServiceProviders: null
    };
  },
  created: function() {
    try {
      this.getExperiences = this.$store.getters.getExperiences;
      this.getHeritageSites = this.$store.getters.getHeritageSites.features;
      this.getServiceProviders = this.$store.getters.getServiceProviders.features;
      this.load_rnd();
      this.loading = false;
    } catch (error) {
      this.loading = true;
    }
  },

  methods: {
    load_rnd() {
      this.loading = false;
      try {
        this.loading = false;
        this.rnd_ex = Math.floor(Math.random() * this.getExperiences.length);
        this.rnd_hs = Math.floor(Math.random() * this.getHeritageSites.length);
        this.rnd_sp = Math.floor(
          Math.random() * this.getServiceProviders.length
        );
      } catch (error) {
        this.loading = true;
      }
    },
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
    ...mapGetters(["getTittle"])
  }
};
</script>

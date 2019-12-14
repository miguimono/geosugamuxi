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
    <!--Patrimonio-->
    <div v-if="this.heritage_site">
      <b-card-group fluid class="p-2 bg-ligth">
        <b-card
          bg-variant="white"
          border-variant="light"
          class="shadow p-2 mb-3 rounded "
          :title="this.heritage_site.name"
        >
          <b-container fluid class="p-2 bg-default">
            <b-card
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-5 rounded "
              :title="'Pertenece al patrimonio ' + this.heritage_site.type"
            >
              <div v-if="this.heritage_site.description">
                <b-card-text>{{ this.heritage_site.description }} </b-card-text>
              </div>
            </b-card>
            <b-card
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-5 rounded"
              title="Experiencias que recorren este patrimonio"
            >
              <div
                :key="index"
                v-for="(experience, index) in this.heritage_site.experiences"
              >
                <b-card-group deck>
                  <b-card
                    bg-variant="white"
                    border-variant="light"
                    class="shadow p-2 mb-5 rounded "
                    :title="experience.name_experience"
                  >
                    <b-card-text>{{ experience.short_history }} </b-card-text>
                    <b-button
                      :id="experience.name_experience"
                      @click="
                        goToExperience(
                          experience.id_experience,
                          experience.name_experience
                        )
                      "
                      block
                      pill
                      size="sm"
                      variant="outline-success"
                      >Ver detalles de
                      {{ experience.name_experience }}</b-button
                    >
                  </b-card>
                </b-card-group>
                <p></p>
              </div>
            </b-card>
          </b-container>
          <b-button squared block variant="success" @click="goBack()"
            >Volver</b-button
          >
        </b-card>
      </b-card-group>
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
      heritage_site: null,
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  },
  created() {
    this.showAlert();
    for (
      let index = 0;
      index < this.getHeritageSites.features.length;
      index++
    ) {
      if (
        this.getHeritageSites.features[index].properties.id_heritage_site ==
        this.getIdElement
      ) {
        this.heritage_site = this.getHeritageSites.features[index].properties;
      }
    }
  },
  methods: {
    goBack: function() {
      window.history.back();
    },

    goToExperience(id, name) {
      this.$store.commit("setIdElement", id);
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
    ...mapGetters(["getTitle", "getIdElement", "getHeritageSites"])
  }
};
</script>

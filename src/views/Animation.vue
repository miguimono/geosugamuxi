<template>
  <div class="animation">
    <b-container fluid class="p-2 bg-light">
      <div v-if="this.$store.getters.getServicesByName">
        <b-card
          bg-variant="white"
          border-variant="light"
          class="shadow p-4 mb-3 rounded"
          :title="this.$store.getters.getServicesByName[0].name"
        >
          <b-card-text> </b-card-text>
          <b-card-group deck>
            <b-container fluid class="p-2 bg-default">
              <b-card-group deck>
                <b-card
                  bg-variant="white"
                  border-variant="light"
                  class="shadow p-2 mb-5 rounded text-center"
                  title="Prestadores de servicio"
                >
                  <div
                    v-for="(service_provider, index) in this.$store.getters
                      .getServicesByName[0].service_providers"
                    :key="index"
                  >
                    <b-button
                      block
                      pill
                      variant="outline-success"
                      @click="
                        goToService(
                          service_provider.id_service_provider,
                          service_provider.name_service_providers
                        )
                      "
                      >{{ service_provider.name_service_providers }}</b-button
                    >
                    <p></p>
                  </div>
                </b-card>
                <b-card
                  bg-variant="white"
                  border-variant="light"
                  class="shadow p-2 mb-5 rounded text-center"
                  title="Experiencias"
                >
                  <div
                    v-for="(experiences, index2) in this.$store.getters
                      .getServicesByName[0].experiences"
                    :key="index2"
                  >
                    <b-button
                      :id="experiences.name_experience"
                      @click="
                        goToExperience(
                          experiences.id_experience,
                          experiences.name_experience
                        )
                      "
                      block
                      pill
                      variant="outline-success"
                    >
                      {{ experiences.name_experience }}</b-button
                    >
                    <p></p>
                  </div>
                </b-card>
              </b-card-group>
            </b-container>
            <b-button squared block variant="success" @click="goBack()"
              >Volver</b-button
            >
          </b-card-group>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Circle8 } from "vue-loading-spinner";

export default {
  name: "Animation",
  data() {
    return {
      name: "Animación",
    };
  },
  components: {
    Circle8
  },
  methods: {
    goToExperience(id, name) {
      this.$store.commit("loadExperienceById", id);
      this.$router.push("experience/" + name);
    },
    goToService: function(id, name) {
      this.$store.commit("loadServiceProvidersById", id);
      this.$router.push("service_provider/" + name);
    },
    goBack: function() {
      window.history.back();
    }
  },
  beforeCreate: function() {
    this.$store.commit("loadServicesByName", "Animación");
  }
};
</script>

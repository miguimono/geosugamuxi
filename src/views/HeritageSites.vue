<template>
  <div class="heritage_sites">
    <b-container fluid class="p-2 bg-light">
      <div v-if="this.loading" class="mx-auto bg-success" style="width: 100px;">
        <Circle8></Circle8>
      </div>
      <div v-else>
        <b-card
          bg-variant="white"
          border-variant="light"
          class="shadow p-2 mb-3 rounded"
          title="Patrimonios"
        >
          <b-card-text>
            Se pueden conocer los patrimonios existentes en la provincia
          </b-card-text>

          <div
            v-for="(heritage_site, index) in this.heritage_sites"
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
                v-b-toggle="heritage_site.properties.name"
                variant="outline-success"
                >{{ heritage_site.properties.name }}</b-button
              >
              <b-collapse
                :id="heritage_site.properties.name"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-text>
                  <div class="p-2">
                    <b-button
                      variant="outline-success"
                      pill
                      @click="
                        goToHeritageSite(
                          heritage_site.properties.id_heritage_site,
                          heritage_site.properties.name_heritage_site
                        )
                      "
                      >Ver detalles
                    </b-button>
                  </div>
                  <div class="p-2">
                    {{ heritage_site.properties.description }}
                  </div>
                </b-card-text>
                <b-container fluid class="p-2 bg-default">
                  <b-card-group deck>
                    <b-card
                      bg-variant="white"
                      border-variant="light"
                      class="shadow p-2 mb-5 rounded text-center"
                      title="Experiencias que recorren este lugar:"
                    >
                      <b-list-group>
                        <div
                          v-for="(experience, index) in heritage_site.properties
                            .experiences"
                          :key="index"
                        >
                          <b-button
                            variant="outline-success"
                            block
                            pill
                            @click="
                              goToExperience(
                                experience.id_experience,
                                experience.name_experience
                              )
                            "
                            >{{ experience.name_experience }}
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
  name: "Heritage_sites",
  data() {
    return {
      name: "Patrimonios",
      heritage_sites: null,
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
    goToExperience(id, name) {
      this.$store.commit("setIdElement", id);
      this.$router.push("/experience/" + name);
    }
  },
  created: function() {
    try {
      this.heritage_sites = this.$store.getters.getHeritageSites.features;
      this.loading = false;
    } catch (error) {
      this.loading = true;
    }
  }
};
</script>

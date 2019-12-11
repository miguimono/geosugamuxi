<template>
  <div class="listElementPrimary" scrollable>
    <div v-if="layer">
      <b-list-group>
        <b-card
          no-body
          bg-variant="white"
          border-variant="white"
          class="shadow mb-2 rounded "
        >
          <b-button-group>
            <b-button block v-b-toggle="name_layer" variant="success">{{
              name_layer
            }}</b-button>
            <div v-if="isVisible">
              <b-button
                block
                pill
                variant="success"
                @click="updateIsVisible(name_layer)"
                >✓</b-button
              >
            </div>
            <div v-else>
              <b-button
                block
                pill
                variant="danger"
                @click="updateIsVisible(name_layer)"
                >X</b-button
              >
            </div>
          </b-button-group>

          <b-collapse :id="name_layer" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <div v-for="(l, index) in layer" :key="index">
                <b-row>
                  <b-col cols="11">
                    <div
                      v-if="l.properties.id_service_provider"
                      bg-variant="white"
                      border-variant="white"
                      class="shadow mb-1 rounded "
                    >
                      <b-button
                        :id="l.properties.name"
                        @click="
                          loadLayers(
                            l.properties.id_service_provider,
                            l.properties.name
                          )
                        "
                        block
                        squared
                        size="sm"
                        variant="outline-success"
                        >{{ l.properties.name }}</b-button
                      >
                    </div>
                    <div
                      v-else-if="l.properties.id_heritage_site"
                      bg-variant="white"
                      border-variant="white"
                      class="shadow mb-1 rounded "
                    >
                      <b-button
                        :id="l.properties.name"
                        @click="
                          loadLayers(
                            l.properties.id_heritage_site,
                            l.properties.name
                          )
                        "
                        block
                        squared
                        size="sm"
                        variant="outline-success"
                        >{{ l.properties.name }}</b-button
                      >
                    </div>
                  </b-col>
                  <b-col cols="1">
                    <b-form-checkbox
                      :id="l.properties.name + index"
                      v-model="l.properties.is_visible"
                      :name="l.properties.name + index"
                      size="lg"
                      class="p-1"
                    >
                    </b-form-checkbox>
                  </b-col>
                </b-row>
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ListElementPrimary",
  data: function() {
    return {};
  },
  props: {
    layer: Array,
    name_layer: String,
    isVisible: Boolean
  },
  components: {},
  created() {},
  methods: {
    loadLayers: function(id, name) {
      if (this.name_layer == "Prestadores de servicio") {
        for (
          let index = 0;
          index < this.getServiceProviders.features.length;
          index++
        ) {
          if (
            this.getServiceProviders.features[index].properties
              .id_service_provider == id
          ) {
            this.$store.commit("setIdElement", id);
            this.$router.push("service_provider/" + name);
          }
        }
      } else if (this.name_layer == "Patrimonios") {
        for (
          let index2 = 0;
          index2 < this.getHeritageSites.features.length;
          index2++
        ) {
          if (
            this.getHeritageSites.features[index2].properties
              .id_heritage_site == id
          ) {
            this.$store.commit("setIdElement", id);
            this.$router.push("heritage_site/" + name);
          }
        }
      }
    },
    updateIsVisible: function(name) {
      this.$store.dispatch("updateIsVisible", name);
    }
  },
  computed: {
    ...mapGetters(["getIdElement", "getServiceProviders", "getHeritageSites"])
  }
};
</script>

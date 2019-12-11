<template>
  <div class="listElement" scrollable>
    <div v-if="layer">
      <b-list-group>
        <b-card
          no-body
          bg-variant="white"
          border-variant="white"
          class="shadow mb-2 rounded "
        >
          <b-button block v-b-toggle="name_layer" variant="success">{{
            name_layer
          }}</b-button>

          <b-collapse :id="name_layer" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <div v-for="(l, index) in layer" :key="index">
                <div
                  v-if="name_layer == 'Experiencias'"
                  bg-variant="white"
                  border-variant="white"
                  class="shadow mb-1 rounded "
                >
                  <b-button
                    :id="l.name"
                    @click="setExperience(l.id_experience, l.name)"
                    block
                    squared
                    size="sm"
                    variant="outline-success"
                    >{{ l.name }}</b-button
                  >
                </div>
                <div
                  v-else
                  bg-variant="white"
                  border-variant="white"
                  class="shadow mb-1 rounded "
                >
                  <b-button
                    :id="l.name"
                    @click="setService(l.name)"
                    block
                    squared
                    size="sm"
                    variant="outline-success"
                    >{{ l.name }}</b-button
                  >
                </div>
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListElement",
  data: function() {
    return {};
  },
  props: {
    layer: Array,
    name_layer: String
  },
  components: {},
  created() {},
  methods: {
    setExperience: function(id, name) {
      this.$store.commit("setIdElement", id);
      this.$router.push("experience/" + name);
    },
    setService: function(name) {
      if (name == "Alojamiento") {
        this.$router.push("/accommodation");
      } else if (name == "Gastronomía") {
        this.$router.push("/gastronomy");
      } else if (name == "Animación") {
        this.$router.push("/animation");
      } else if (name == "Transporte") {
        this.$router.push("/transport");
      }
    }
  },
  computed: {}
};
</script>

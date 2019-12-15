<template>
  <div class="list_layers" scrollable>
    <div v-if="name_layer">
      <b-list-group>
        <b-card
          no-body
          bg-variant="white"
          border-variant="white"
          class="shadow mb-2 rounded "
        >
          <b-button-group>
            <b-button
              block
              v-b-toggle="name_layer"
              @click="setSecondaryLayers(name_layer)"
              variant="outline-success" 
              >{{ name_layer }}</b-button
            >
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
        </b-card>
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListLayers",
  data: function() {
    return {};
  },
  props: {
    layer: Object,
    name_layer: String,
    isVisible: Boolean
  },
  components: {},
  created() {},
  methods: {
    setSecondaryLayers: function(name) {
      if (this.name_layer =="Municipios") {
        this.$router.push("municipalities/");  
      }else{
      this.$router.push("specification/" + name);
      }
    },
    updateIsVisible: function(name) {
      this.$store.dispatch("updateIsVisible", name);
    }
  },
  computed: {}
};
</script>

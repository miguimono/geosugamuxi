<template>
  <div>
    <div>
      <Navbar />
    </div>
    <b-container fluid class="bg-light">
        <b-row>
          <b-col md="10" offset-md="1">
            <div>
              <router-view />
            </div>
          </b-col>
        </b-row>
    </b-container>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Circle8 } from "vue-loading-spinner";
import { mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      loading: false,
      componentKey: 0
    };
  },
  components: {
    Navbar,
    Footer,
    Circle8
  },

  beforeCreate: function() {
    /*try {
      this.$store.dispatch("loadBaseMap");
      this.$store.dispatch("loadPrincipalLayers");
      this.$store.commit("loadRandomServiceProviders");
      console.log("Capas principales");
    } catch (error) {
      console.log("No se ha podido cargar capa primaria");
    }*/
  },
  created: function() {
    /*
    try {
      this.$store.dispatch("loadSecondaryLayers");
      console.log("Capas secundarias");
    } catch (error) {
      console.log("No se ha podido cargar capa secundaria");
    }*/
  },
  methods: {},

  computed: {
    ...mapGetters(["getTitle", "getPrincipalLayers"])
  }
};
</script>

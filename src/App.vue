<template>
  <div>
    <div>
      <Navbar />
    </div>
    <b-container fluid class="bg-light">
      <div v-if="this.loading" class="mx-auto bg-success" style="width: 100px;">
        <Circle8></Circle8>
      </div>
      <div v-else>
        <b-row>
          <b-col md="10" offset-md="1">
            <div>
              <router-view />
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: "App",
  data() {
    return {
      loading: false
    };
  },
  components: {
    Navbar,
    Footer
  },
  created: function() {
    try {
      this.$store.dispatch("loadBaseMap");
      this.$store.dispatch("loadLayers");
      this.loading = false;
    } catch (error) {
      this.loading = true;
    }
  }
};
</script>

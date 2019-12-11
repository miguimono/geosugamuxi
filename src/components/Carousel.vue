<template>
  <div class="carousel">
    <b-container fluid class="p-1 bg-dark">
      <div v-if="this.$store.getters.getPhotos">
        <b-carousel
          id="carousel-fade"
          fade
          :interval="4000"
          indicators
          controls
          style="text-shadow: 1px 1px 2px #333;"
        >
          <div v-for="image in this.$store.getters.getPhotos" :key="image.id">
            <b-carousel-slide
              class="d-block img-fluid w-100"
              :caption="image.title"
              :img-src="image.url_n"
              :text="image.ownername"
            ></b-carousel-slide>
          </div>
        </b-carousel>
      </div>
      <div v-else>
        <p>La galeria se encuentra vacia</p>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    gallery_id: null
  },

  data() {
    return {};
  },
  beforeMount: function() {
    this.$store.commit("loadPhotos", this.gallery_id);
  }
};
</script>

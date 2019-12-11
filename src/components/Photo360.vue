<template>
  <div class="photo360">
    <div v-if="isNull">
      <p>Por el momento no ha fotos 360º</p>
    </div>
    <div v-else>
      <div v-if="loading" class="text-center">
        <b-spinner type="grow" label="Spinning"></b-spinner>
      </div>
      <div v-else>
        <b-embed
          frameborder="0"
          allow="vr,gyroscope,accelerometer,fullscreen"
          scrolling="no"
          allowfullscreen="true"
          :src="photo_src"
        ></b-embed>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Photo360",
  props: {
    photo_src: null
  },

  data() {
    return {
      loading: true,
      isNull: true
    };
  },
  created: function() {
    this.loading = true;
  },
  mounted: function() {
    this.loading = false;
    this.search();
  },
  methods: {
    search() {
      if (this.photo_src) {
        this.isNull = false;
      }
    }
  }
};
</script>

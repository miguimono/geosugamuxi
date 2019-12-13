<template>
  <div>
    <div v-if="type">
      <div
      @mouseover="isToggle = !isToggle"
      v-show="!isToggle"
      class="animationY flipY"
    >
      <b-card
        fluid
                bg-variant="white"
                border-variant="light"
                class="shadow p-2 mb-5 rounded text-center"
        :title="headerFront"
      >
       <b-card-text>
                {{ front }}
                 </b-card-text>
      </b-card>
    </div>
    <div
      @mouseleave="isToggle = !isToggle"
      v-show="isToggle"
      class="animationY flipY"
    >
      <b-card
        fluid
        border-variant="success"
        :header="headerBack"
        header-bg-variant="success"
        header-text-variant="white"
        class="shadow p-2 mb-5 rounded"
      >
        
          {{back}}
        
      </b-card>
    </div>
    </div>
    <div v-else>
      <div
      @click="isToggle = !isToggle"
      v-show="!isToggle"
      class="animation flipX infoCard"
    >
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 540px;"
        bg-variant="white"
        border-variant="white"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src="image" width="128" height="128"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="headerFront">
              <b-card-text>
                {{ front }}
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <div
      @click="isToggle = !isToggle"
      v-show="isToggle"
      class="animation flipX infoCard"
    >
      <b-card
        border-variant="success"
        :header="headerBack"
        header-bg-variant="success"
        header-text-variant="white"
        align="center"
      >
        <b-list-group>
          <div v-for="(bk, index) in back" :key="index">
            <b-list-group-item :id="bk.name" variant="success">
              <b>{{ bk.name }} </b>: {{ bk.mail }}
            </b-list-group-item>
            <p></p>
            <b-tooltip
              :target="bk.name"
              triggers="hover"
              variant="info"
              placement="rightbottom"
            >
              {{ bk.contribution }}
            </b-tooltip>
          </div>
        </b-list-group>
      </b-card>
    </div>
    </div>



    
  </div>
</template>
<script>
export default {
  data() {
    return {
      isToggle: false
    };
  },
  props: {
    type: {
      type: Boolean,
      default: false
    },
    image: {
      type: String,
      default: ""
    },

    front: {
      type: String,
      default: ""
    },
    back: {
      type: null
    },
    headerFront: {
      type: String,
      default: "Conoce a:"
    },
    headerBack: {
      type: String,
      default: "Volver"
    }
  }
};
</script>
<style scoped>
.center {
  text-align: center;
}

.infoCard {
  cursor: pointer;
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
  text-align: center;
}

.infoCard:hover {
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.8);
}

.animation {
  animation-duration: 1s;
  animation-fill-mode: both;
}

@keyframes flipX {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

.animationY {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.flipX {
  backface-visibility: visible !important;
  animation-name: flipX;
}


@keyframes flipY {
  from {
    transform: perspective(400px) rotate3d(0, -1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(0, -1, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(0, -1, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(0, -1, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

.flipY {
  backface-visibility: visible !important;
  animation-name: flipY;
}
</style>

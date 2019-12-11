<template>
  <div class="modal_heritage_site">
    <!--heritage_site-->
    <div v-if="this.element != null">
      <b-modal
        :id="'a' + iModal"
        scrollable
        :title="getTittle"
        bg-variant="white"
        border-variant="light"
        class="shadow p-2 mb-2 rounded"
      >
        <div>
          <b-card
            :title="this.element.name"
            :sub-title="'Patrimonio'"
            bg-variant="white"
            border-variant="light"
            class="shadow p-2 mb-2 rounded"
          >
            <div v-if="this.element.type">
              <b-card
                title="Tipo de patrimonio"
                bg-variant="white"
                border-variant="light"
                class="shadow p-2 mb-2 rounded"
              >
                <b-card-text>{{ this.element.type }} </b-card-text>
              </b-card>
              <p></p>
            </div>
            <b-card
              title="Experiencias relacionadas"
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-2 rounded"
            >
              <b-list-group>
                <div
                  :key="index"
                  v-for="(experiences, index) in this.element.experiences"
                >
                  <b-list-group-item variant="success">
                    {{ experiences.slogan }}
                  </b-list-group-item>
                  <p></p>
                </div>
              </b-list-group>
            </b-card>
          </b-card>
          <p></p>
        </div>
        <template v-slot:modal-footer="{ ok, cancel, hide }">
          <b-button size="sm" variant="success" @click="setElement()"
            >Ver detalles</b-button
          >
          <b-button size="sm" variant="danger" @click="cancel()"
            >Volver</b-button
          >
        </template>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ModalHeritageSite",
  props: {
    iModal: String
  },
  data() {
    return {
      element: null
    };
  },
  methods: {
    setElement: function() {
      this.$router.push("heritage_site/" + this.element.name);
    }
  },
  created() {
    for (
      let index = 0;
      index < this.getHeritageSites.features.length;
      index++
    ) {
      if (
        this.getHeritageSites.features[index].properties.id_heritage_site ==
        this.getIdElement
      ) {
        this.element = this.getHeritageSites.features[index].properties;
      }
    }
  },
  updated() {
    for (
      let index = 0;
      index < this.getHeritageSites.features.length;
      index++
    ) {
      if (
        this.getHeritageSites.features[index].properties.id_heritage_site ==
        this.getIdElement
      ) {
        this.element = this.getHeritageSites.features[index].properties;
      }
    }
  },
  computed: {
    ...mapGetters(["getTittle", "getIdElement", "getHeritageSites"])
  }
};
</script>

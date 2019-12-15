<template>
  <div class="modal_heritage_site">
    <!--heritage_site-->

    <b-modal
      :id="'hs' + iModal"
      scrollable
      :title="getTitle"
      bg-variant="white"
      border-variant="light"
      class="shadow p-2 mb-2 rounded"
    >
      <div v-if="this.$store.getters.getHeritageSite">
        
          <b-card
            :title="
              this.$store.getters.getHeritageSite.features[0].properties.name
            "
            :sub-title="'Patrimonio'"
            bg-variant="white"
            border-variant="light"
            class="shadow p-2 mb-2 rounded"
          >
            <template v-slot:modal-header="{ close }">
              <b-button
                size="sm"
                variant="outline-info"
                @click="helpHeritageSite()"
                >?</b-button
              >
              <h3>{{ getTitle }}</h3>
            </template>
            <div
              v-if="
                this.$store.getters.getHeritageSite.features[0].properties.type
              "
            >
              <b-card
                title="Tipo de patrimonio"
                bg-variant="white"
                border-variant="light"
                class="shadow p-2 mb-2 rounded"
              >
                <b-card-text
                  >{{
                    this.$store.getters.getHeritageSite.features[0].properties
                      .type
                  }}
                </b-card-text>
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
                  v-for="(experiences, index) in this.$store.getters
                    .getHeritageSite.features[0].properties.experiences"
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
        <b-button size="sm" variant="danger" @click="cancel()">Volver</b-button>
      </template>
    </b-modal>
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
      element: null,
      help_HeritageSite1:
        "Consulte la información basica del patrimonio en el que se encuentra",
      help_HeritageSite2:
        "Puede acceder a unformación mas completa en la seccion 'Ver detalles'"
    };
  },
  methods: {
    setElement: function() {
      this.$router.push(
        "heritage_site/" +
          this.$store.getters.getHeritageSite.features[0].properties.name
      );
    },
    helpLayers() {
      this.$bvToast.toast(`${this.help_HeritageSite2}`, {
        title: "Mayor información",
        autoHideDelay: 15000,
        variant: "info",
        toaster: "b-toaster-bottom-right"
      }),
        this.$bvToast.toast(`${this.help_HeritageSite1}`, {
          title: "Informacio básica",
          autoHideDelay: 10000,
          variant: "info",
          toaster: "b-toaster-bottom-right"
        });
    }
  },

  computed: {
    ...mapGetters(["getTitle", "getHeritageSites"])
  }
};
</script>

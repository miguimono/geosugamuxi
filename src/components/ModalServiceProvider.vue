<template>
  <div class="modal_serivice_provider">
    <!--Prestador de servicios-->

    <b-modal
      :id="'sp' + iModal"
      scrollable
      :title="getTitle"
      bg-variant="white"
      border-variant="light"
      class="shadow p-2 mb-2 rounded"
    >
      <div v-if="this.$store.getters.getServiceProvider">
        <b-card
          bg-variant="white"
          border-variant="light"
          class="shadow p-2 mb-2 rounded"
          :title="
            this.$store.getters.getServiceProvider.features[0].properties.name
          "
          :sub-title="'Prestador de servicios'"
        >
          <template v-slot:modal-header="{ close }">
            <b-button
              size="sm"
              variant="outline-info"
              @click="helpServiceProvider()"
              >?</b-button
            >
            <h3>{{ getTitle }}</h3>
          </template>

          <div
            v-if="
              this.$store.getters.getServiceProvider.features[0].properties
                .contact_name
            "
          >
            <b-card
              :title="
                this.$store.getters.getServiceProvider.features[0].properties
                  .contact_name
              "
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-2 rounded"
            >
              <b-card-text>
                <div
                  v-if="
                    this.$store.getters.getServiceProvider.features[0]
                      .properties.contact_cell
                  "
                >
                  Celular:
                  {{
                    this.$store.getters.getServiceProvider.features[0]
                      .properties.contact_cell
                  }}
                </div>
                <div
                  v-if="
                    this.$store.getters.getServiceProvider.features[0]
                      .properties.contact_phone
                  "
                >
                  Telefono:
                  {{
                    this.$store.getters.getServiceProvider.features[0]
                      .properties.contact_phone
                  }}
                </div>
                <div
                  v-if="
                    this.$store.getters.getServiceProvider.features[0]
                      .properties.contact_mail
                  "
                >
                  Correo:
                  {{
                    this.$store.getters.getServiceProvider.features[0]
                      .properties.contact_mail
                  }}
                </div>
              </b-card-text>
            </b-card>
          </div>
          <p></p>
          <div
            v-if="
              this.$store.getters.getServiceProvider.features[0].properties
                .opening_hours
            "
          >
            <b-card
              title="Horario"
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-2 rounded"
            >
              <b-card-text
                >{{
                  this.$store.getters.getServiceProvider.features[0].properties
                    .opening_hours
                }}
              </b-card-text>
            </b-card>
          </div>
          <p></p>
          <div
            v-if="
              this.$store.getters.getServiceProvider.features[0].properties
                .tourist_plan == null
            "
          >
            <b-card
              title="Planes turisticos"
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-2 rounded"
            >
              <b-list-group>
                <div
                  :key="index"
                  v-for="(tourist_plan, index) in this.$store.getters
                    .getServiceProvider.features[0].properties.tourist_plan"
                >
                  <b-list-group-item>{{
                    tourist_plan.name_tourist_plan
                  }}</b-list-group-item>
                </div>
              </b-list-group>
            </b-card>
          </div>
          <p></p>
          <b-card
            title="Servicios relacionados"
            bg-variant="white"
            border-variant="light"
            class="shadow p-2 mb-2 rounded"
          >
            <b-list-group>
              <div
                :key="index"
                v-for="(service, index) in this.$store.getters
                  .getServiceProvider.features[0].properties.services"
              >
                <b-list-group-item variant="success">{{
                  service.name_service
                }}</b-list-group-item>
                <p />
              </div>
            </b-list-group>
          </b-card>
        </b-card>
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
  name: "ModalServiceProvider",
  props: {
    iModal: String
  },
  data() {
    return {
      element: null,
      help_ServiceProvider1:
        "Se puede observar información básica del prestador de servicios",
      help_ServiceProvider2:
        "En la parte inferior puede acceder una información mas detallada"
    };
  },
  methods: {
    setElement: function() {
      this.$router.push("service_provider/" + this.$store.getters.getServiceProvider.features[0].properties.name);
    },
    helpServiceProvider() {
      this.$bvToast.toast(`${this.help_ServiceProvider2}`, {
        title: "Mayor información",
        autoHideDelay: 15000,
        variant: "info",
        toaster: "b-toaster-bottom-left"
      }),
        this.$bvToast.toast(`${this.help_ServiceProvider1}`, {
          title: "Información básica",
          autoHideDelay: 10000,
          variant: "info",
          toaster: "b-toaster-bottom-left"
        });
    }
  },

  computed: {
    ...mapGetters(["getTitle", "getServiceProviders"])
  }
};
</script>

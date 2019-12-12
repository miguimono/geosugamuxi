<template>
  <div class="modal_serivice_provider">
    <!--Prestador de servicios-->

    <div v-if="this.element != null">
      <b-modal
        :id="'e' + iModal"
        scrollable
        :title="getTittle"
        bg-variant="white"
        border-variant="light"
        class="shadow p-2 mb-2 rounded"
      >
        <template v-slot:modal-header="{ close }">
          <b-button
            size="sm"
            variant="outline-info"
            @click="helpServiceProvider()"
            >?</b-button
          >
          <h3>{{ getTittle }}</h3>
        </template>

        <b-card
          bg-variant="white"
          border-variant="light"
          class="shadow p-2 mb-2 rounded"
          :title="this.element.name"
          :sub-title="'Prestador de servicios'"
        >
          <div v-if="this.element.contact_name">
            <b-card
              :title="this.element.contact_name"
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-2 rounded"
            >
              <b-card-text>
                <div v-if="this.element.contact_cell">
                  Celular: {{ this.element.contact_cell }}
                </div>
                <div v-if="this.element.contact_phone">
                  Telefono: {{ this.element.contact_phone }}
                </div>
                <div v-if="this.element.contact_mail">
                  Correo: {{ this.element.contact_mail }}
                </div>
              </b-card-text>
            </b-card>
          </div>
          <p></p>
          <div v-if="this.element.opening_hours">
            <b-card
              title="Horario"
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-2 rounded"
            >
              <b-card-text>{{ this.element.opening_hours }} </b-card-text>
            </b-card>
          </div>
          <p></p>
          <div v-if="this.element.tourist_plan == null">
            <b-card
              title="Planes turisticos"
              bg-variant="white"
              border-variant="light"
              class="shadow p-2 mb-2 rounded"
            >
              <b-list-group>
                <div
                  :key="index"
                  v-for="(tourist_plan, index) in this.element.tourist_plan"
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
                v-for="(service, index) in this.element.services"
              >
                <b-list-group-item variant="success">{{
                  service.name_service
                }}</b-list-group-item>
                <p />
              </div>
            </b-list-group>
          </b-card>
        </b-card>

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
      this.$router.push("service_provider/" + this.element.name);
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
  mounted() {},
  created() {
    for (
      let index = 0;
      index < this.getServiceProviders.features.length;
      index++
    ) {
      if (
        this.getServiceProviders.features[index].properties
          .id_service_provider == this.getIdElement
      ) {
        this.element = this.getServiceProviders.features[index].properties;
      }
    }
  },
  updated() {
    for (
      let index = 0;
      index < this.getServiceProviders.features.length;
      index++
    ) {
      if (
        this.getServiceProviders.features[index].properties
          .id_service_provider == this.getIdElement
      ) {
        this.element = this.getServiceProviders.features[index].properties;
      }
    }
  },
  computed: {
    ...mapGetters(["getTittle", "getIdElement", "getServiceProviders"])
  }
};
</script>

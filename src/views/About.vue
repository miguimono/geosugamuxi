<template>
  <div class="about">
    <b-container fluid class="p-2 bg-light">
      <b-card
        bg-variant="white"
        border-variant="light"
        class="shadow p-3 mb-3 rounded"
        title="Proyecto:  'Espacialidad del turismo rural en la Provincia de Sugamuxi,
          departamento de Boyacá: Sistematización de experiencias, código SGI.
          2718'"
      >
        <b-card-text>
          <h5>
            Es un convenio interadministrativo entre la Universidad Pedagógica y
            Tecnológica de Colombia y la Gobernación de Boyacá 2400
          </h5>
        </b-card-text>
        <b-card-group>
          <b-card no-body bg-variant="white" border-variant="white">
            <div v-for="(l, index) in this.logo1" :key="index">
              <vue-flashcard
                :headerFront="l.headerFront"
                :front="l.front"
                :imgFront="l.imgFront"
                :footerFront="l.footerFront"
                :headerBack="l.headerBack"
                :back="l.back"
                :imgBack="l.imgBack"
                :footerBack="l.footerBack"
              >
              </vue-flashcard>
            </div>
          </b-card>
          <b-card no-body bg-variant="white" border-variant="white">
            <div v-for="(l, index) in this.logo2" :key="index">
              <vue-flashcard
                :headerFront="l.headerFront"
                :front="l.front"
                :imgFront="l.imgFront"
                :footerFront="l.footerFront"
                :headerBack="l.headerBack"
                :back="l.back"
                :imgBack="l.imgBack"
                :footerBack="l.footerBack"
              >
              </vue-flashcard>
            </div>
          </b-card>
          <b-card no-body bg-variant="white" border-variant="white">
            <div v-for="(l, index) in this.logo3" :key="index">
              <vue-flashcard
                :headerFront="l.headerFront"
                :front="l.front"
                :imgFront="l.imgFront"
                :footerFront="l.footerFront"
                :headerBack="l.headerBack"
                :back="l.back"
                :imgBack="l.imgBack"
                :footerBack="l.footerBack"
              >
              </vue-flashcard>
            </div>
          </b-card>
        </b-card-group>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import vueFlashcard from "vue-flashcard";

export default {
  name: "About",
  components: { vueFlashcard },
  data() {
    return {
      logo1: [
        {
          headerFront:
            "Espacialidad del turismo rural en la Provincia de Sugamuxi, departamento de Boyacá: Sistematización de experiencias",
          front: "GeoSugamuxi",
          imgFront: require("@/assets/logos/logo.png"),
          footerFront: "Ver contacto",
          headerBack: "Vovler",
          back: "Contacte con el administrador",
          footerBack: "Volver"
        },
        {
          headerFront: "Universidad Pedagógica y Tecnológica de Colombia",
          front: "UPTC",
          imgFront: require("@/assets/logos/uptc.png"),
          footerFront: "Ver contacto",
          headerBack: "Contacto",
          back: "http://www.uptc.edu.co/",
          footerBack: "Volver"
        },
      ],
      logo2: [
        {
          headerFront: "Grupo de investigación en manejo de la información",
          front: "GIMI",
          imgFront: require("@/assets/logos/gimi.png"),
          footerFront: "Ver contacto",
          headerBack: "Contacto",
          back:
            "http://www.uptc.edu.co/facultades/f_ingenieria/pregrado/sistemas/inf_adicional/investigacion/gimi/",
          footerBack: "Volver"
        },
        {
          headerFront: "Grupo de Investigación para la Animación Cultural",
          front: "Muisuata",
          imgFront: require("@/assets/logos/muisuata.png"),
          footerFront: "Ver contacto",
          headerBack: "Contacto",
          back:
            "http://www.uptc.edu.co/facultades/f_duitama/pregrado/adminturistica/inf_adicional/investigacion/muisuata/",
          footerBack: "Volver"
        },
        {
          headerFront: "Estudios de posgrado en geografía",
          front: "epg",
          imgFront: require("@/assets/logos/epg.png"),
          footerFront: "Ver contacto",
          headerBack: "Contacto",
          back:
            "http://www.uptc.edu.co/facultades/f_educacion/maestria/geograf/inf_general/index.html",
          footerBack: "Volver"
        },
        {
          headerFront: "Maestria en patrimonio cultural",
          imgFront: require("@/assets/logos/patrimonio_cultural.png"),
          footerFront: "Ver contacto",
          headerBack: "Contacto",
          back:
            "http://www.uptc.edu.co/facultades/f_educacion/maestria/patrim_cultural/inf_general/index.html",
          footerBack: "Volver"
        }
        
      ],
      logo3: [
        {
          headerFront: "Gobernación de Boyacá",
          imgFront: require("@/assets/logos/gobernacion_boyaca.png"),
          footerFront: "Ver contacto",
          headerBack: "Contacto",
          back: "www.boyaca.gov.co",
          footerBack: "Volver"
        },
        {
          headerFront: "Boyacá es para vivirla",
          imgFront: require("@/assets/logos/boyaca_es_para_vivirla.png"),
          footerFront: "Ver contacto",
          headerBack: "Contacto",
          back: "www.boyaca.gov.co",
          footerBack: "Volver"
        }
      ]
    };
  }
};
</script>

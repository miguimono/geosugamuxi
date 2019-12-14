<template>
  <div class="about">
    <b-container fluid class="p-2 bg-light">
      <b-card
        bg-variant="white"
        border-variant="light"
        class="shadow p-3 mb-3 rounded"
        title="Información sobre el geoportal"
      >
        <b-card-text>
          <h5>
            El geoportal de <b> Experiencia rural Sugamuxi </b>, fue creado como
            parte del proyecto 'Espacialidad del turismo rural en la Provincia
            de Sugamuxi, departamento de Boyacá: Sistematización de
            experiencias, código SGI. 2718', bajo el convenio
            interadministrativo entre la Universidad Pedagógica y Tecnológica de
            Colombia y la Gobernación de Boyacá 2400
          </h5>
        </b-card-text>
        <b-card-text>
          El desarrollo fue realizado en fomra conjunta por estudiantes,
          docentes, administrativos y colaboradores de diferentes carreras,
          aplicando múltiples técnicas de propias de su especialidad.
        </b-card-text>
        <b-card-group>
          <b-card no-body bg-variant="white" border-variant="white" class="p-3">
            <div
              v-for="(l, index) in this.$store.getters.getAbout"
              :key="index"
            >
              <div v-if="parImpar(index) == 1">
                <InfoCard
                  :headerFront="l.headerFront"
                  :front="l.front"
                  :image="require('@/assets/logos/' + l.image + '.png')"
                  :headerBack="l.headerBack"
                  :back="l.back"
                >
                </InfoCard>
              </div>
            </div>
          </b-card>
          <b-card no-body bg-variant="white" border-variant="white" class="p-3">
            <div
              v-for="(l, index) in this.$store.getters.getAbout"
              :key="index"
            >
              <div v-if="parImpar(index) == 0">
                <InfoCard
                  :headerFront="l.headerFront"
                  :front="l.front"
                  :image="require('@/assets/logos/' + l.image + '.png')"
                  :headerBack="l.headerBack"
                  :back="l.back"
                >
                </InfoCard>
              </div>
            </div>
          </b-card>
        </b-card-group>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import InfoCard from "@/components/InfoCard.vue";
import { mapGetters } from "vuex";
export default {
  name: "About",
  components: { InfoCard },
  created() {
    this.$store.dispatch("loadAbout");
  },
  methods: {
    parImpar(pos) {
      var valor = parseInt(pos);
      return valor % 2 ? 0 : 1;
    }
  },
  data() {
    return {
      title: this.getTitle,
      logo1: [
        {
          front: "Grupo de investigación en manejo de la información",
          headerFront: "GIMI",
          image: require("@/assets/logos/gimi.png"),
          headerBack: "Ingeniería de sistemas y computacíon",
          back: [
            {
              name: "Miguel Niño",
              mail: "miguimono@gmail.com",
              contribution: "Desarrollo del geoporta"
            },
            {
              name: "Gustavo Cáceres",
              mail: "gustavo@gmail.com",
              contribution: "Director del proyecto"
            }
          ]
        },
        {
          front: "Grupo de Investigación para la Animación Cultural",
          headerFront: "Muisuata",
          image: require("@/assets/logos/muisuata.png"),
          headerBack: "Administración turística y hotelera",
          back: [
            {
              name: "Miguel1",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            },
            {
              name: "Miguel2 ",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            },
            {
              name: "Miguel3",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            },
            {
              name: "Miguel4",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            },
            {
              name: "Miguel5",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            },
            {
              name: "Miguel6",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            },
            {
              name: "Miguel7",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            },
            {
              name: "Miguel8",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            },
            {
              name: "Miguel9",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            }
          ]
        },
        {
          front: "Estudios de posgrado en geografía",
          headerFront: "EPG",
          image: require("@/assets/logos/epg.png"),
          headerBack: "Contacto",
          back: [
            {
              name: "Miguel10",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            },
            {
              name: "Miguel12 ",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            }
          ]
        },
        {
          front: "Maestria en patrimonio cultural",
          image: require("@/assets/logos/patrimonio_cultural.png"),
          headerBack: "Contacto",
          back: [
            {
              name: "Miguel12",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            },
            {
              name: "Miguel13 ",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            }
          ]
        }
      ],
      logo2: [
        {
          front: "Experiencia rural Sugamuxi",
          headerFront: "Colaboradores del proyecto",
          image: require("@/assets/logos/logo.png"),
          headerBack: "Ingeniería de sistemas y computación",
          back: [
            {
              name: "Miguel14",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            },
            {
              name: "Miguel15 ",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            }
          ]
        },
        {
          front: "Universidad Pedagógica y Tecnológica de Colombia",
          headerFront: "UPTC",
          image: require("@/assets/logos/uptc.png"),
          headerBack: "Contacto",
          back: [
            {
              name: "Miguel16",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            },
            {
              name: "Miguel17 ",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            }
          ]
        },
        {
          front: "SENA",
          image: require("@/assets/logos/sena.png"),
          headerBack: "Contacto",
          back: [
            {
              name: "Miguel18",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            },
            {
              name: "Miguel19",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            }
          ]
        },
        {
          front: "Gobernación de Boyacá",
          image: require("@/assets/logos/gobernacion_boyaca.png"),
          headerBack: "Contacto",
          back: [
            {
              name: "Miguel18",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            },
            {
              name: "Miguel19",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            }
          ]
        },
        {
          front: "Boyacá es para vivirla",
          image: require("@/assets/logos/boyaca_es_para_vivirla.png"),
          headerBack: "Contacto",
          back: [
            {
              name: "Miguel20",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            },
            {
              name: "Miguel21",
              mail: "miguimono@gmail.com",
              contribution: "Deesarrollo del geoporta"
            }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["getTitle"])
  }
};
</script>

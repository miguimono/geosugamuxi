<template>
  <div id="navbar">
    <b-navbar toggleable="lg" type="dark" variant="success"  >
      <b-container position: relative>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand :to="{ name: 'home' }">
          <img
            src="../assets/iconset/icon.png"
            class="d-inline-block align-top"
            alt="logo"
            
          />
          {{ getTitle }}</b-navbar-brand
        >

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav >
            <b-nav-item :to="{ name: 'home' }">Inicio</b-nav-item>
            <b-nav-item :to="{ name: 'experiences' }"> Experiencias</b-nav-item>
            <b-nav-item :to="{ name: 'geoviewer' }"><strong>GeoVisor</strong></b-nav-item>
            <b-nav-item :to="{ name: 'service_providers' }"
              >Prestadores de servicio</b-nav-item
            >
            <b-nav-item :to="{ name: 'heritage_sites' }"
              >Patrimonios</b-nav-item
            >
            <b-nav-item :to="{ name: 'municipalities' }">Municipios</b-nav-item>
            <b-nav-item-dropdown text="Servicios">
              <b-dropdown-item :to="{ name: 'accommodation' }"
                >Alojamientos</b-dropdown-item
              >
              <b-dropdown-item :to="{ name: 'gastronomy' }"
                >Gastronomia</b-dropdown-item
              >
              <b-dropdown-item :to="{ name: 'animation' }"
                >Animacion</b-dropdown-item
              >
              <b-dropdown-item :to="{ name: 'transport' }"
                >Transporte</b-dropdown-item
              >
            </b-nav-item-dropdown>

            <b-nav-item :to="{ name: 'about' }">Acerca de</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["getTitle"])
  }
};
</script>

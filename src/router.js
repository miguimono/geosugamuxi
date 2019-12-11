import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/accommodation',
      name: 'accommodation',
      component: () => import('./views/Accommodation.vue')
    },
    {
      path: '/animation',
      name: 'animation',
      component: () => import('./views/Animation.vue')
    },
    {
      path: '/gastronomy',
      name: 'gastronomy',
      component: () => import('./views/Gastronomy.vue')
    },
    {
      path: '/transport',
      name: 'transport',
      component: () => import('./views/Transport.vue')
    },
    {
      path: '/geoviewer',
      name: 'geoviewer',
      component: () => import('./views/GeoViewer.vue')
    },
    {
      path: '/specification/:id',
      name: 'specification',
      component: () => import('./components/Specification.vue')
    },
    {
      path: '/experience/:id',
      name: 'experience',
      component: () => import('./components/Experience.vue')
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: () => import('./views/Experiences.vue')
    },
    {
      path: '/service_provider/:id',
      name: 'service_provider',
      component: () => import('./components/ServiceProvider.vue')
    },
    {
      path: '/service_providers',
      name: 'service_providers',
      component: () => import('./views/ServiceProviders.vue')
    },
    {
      path: '/heritage_site/:id',
      name: 'heritage_site',
      component: () => import('./components/HeritageSite.vue')
    },
    {
      path: '/heritage_sites',
      name: 'heritage_sites',
      component: () => import('./views/HeritageSites.vue')
    },
    {
      path: '/municipalities',
      name: 'municipalities',
      component: () => import('./views/Municipalities.vue')
    }
  ]
})

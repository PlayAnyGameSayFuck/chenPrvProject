import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomeWelcomePage from '../views/home/content/homeWelcomePage.vue'
import Weather from '../../src/views/third/weather.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/weather',
      name: 'Weather',
      component: Weather
    },
    {
      path: '/',
      name: 'HomeWelcomePage',
      component: HomeWelcomePage
    }
  ]
})

import Vue from 'vue'
import Home from './views/home/home'
import router from './router'
import axios from '../node_modules/axios'
import layer from '../node_modules/layui-layer'
import $ from '../node_modules/jquery'

Vue.config.productionTip = false
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:8082',
  timeout: 10000,
  withCredentials: true,
})

new Vue({
  el: '#app',
  router,
  components: { Home },
  template: '<Home/>'
})

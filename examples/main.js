import Vue from 'vue'
import App from './APP.vue'
import router from './router/index'
import name from '../dist/main'
console.log(name)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
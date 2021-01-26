import Vue from 'vue'
import Vuelidate from 'vuelidate'
// import VModal from 'vue-js-modal'
import App from './App.vue'
import router from './router'
import store from './store'
import './axios'

Vue.config.productionTip = false
Vue.use(Vuelidate)
// Vue.use(VModal)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

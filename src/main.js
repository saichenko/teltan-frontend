import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LoadScript from 'vue-plugin-load-script'

Vue.use(LoadScript)
Vue.loadScript('https://code.jquery.com/jquery-3.5.1.min.js')
Vue.loadScript('@/assets/js/script.js')
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

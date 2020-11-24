import Vue from 'vue'
import App from './App.vue'
import VueMqtt from 'vue-mqtt'
import store from './store'
import router from './router'

// Bootstrap imports
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Use vue-mqtt to handle the pub-sub to backend
Vue.use(VueMqtt, 'ws://localhost:5000', {
  clientId: 'DentistimoClient-' + parseInt(Math.random() * 100000),
})

// Use bootstrap for styling the ui
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

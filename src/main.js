import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
//import VueMqtt from 'vue-mqtt'

// Bootstrap imports
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// This is used to display the marker
import { Icon } from 'leaflet'
// Vue Leaflet imports
import 'leaflet/dist/leaflet.css'

const ourClient = parseInt(Math.random() * 100000)
export { ourClient }

//Vue.use(VueMqtt, 'ws://localhost:9001', { clientId: 'WebClient-' + ourClient })

delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
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

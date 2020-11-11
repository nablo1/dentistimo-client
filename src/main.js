import Vue from 'vue'
import App from './App.vue'

// Bootstrap imports
import {
  BootstrapVue,
  BootstrapVueIcons,
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Use bootstrap for styling the ui
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

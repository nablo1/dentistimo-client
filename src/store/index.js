import Vue from 'vue'
import Vuex from 'vuex'
import dentalClinic from './modules/dentalClinic'

// Load Vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
  modules: {
    dentalClinic,
  },
})

import Vue from 'vue'
import Vuex from 'vuex'
import dentalClinicUser from './modules/dentalClinicUser'
import dentalClinic from './modules/dentalClinic'

// Load Vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
  modules: {
    dentalClinicUser,
    dentalClinic,
  },
})

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  computed: {},
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [],
})

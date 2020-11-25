import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminDashboard from '@/views/AdminDashboard/AdminDashboard'
import Home from '@/views/Home/Home'
Vue.use(VueRouter)

export default new VueRouter({
  computed: {},
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // Path to dental clinic admin dashboard
    {
      path: '/clinic-admin',
      name: 'AdminDashboard',
      component: AdminDashboard,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    }
  ],
})

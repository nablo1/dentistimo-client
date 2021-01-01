import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminDashboard from '@/views/AdminDashboard/AdminDashboard'
import Home from '@/views/Home/Home'
import Calendar from '@/views/Calendar'
import RegisterClinic from '@/views/RegisterClinic'
import DentalClinic from '@/views/DentalClinic'
import Login from '@/views/Login'
import TimeSlots from '@/views/TimeSlots'
import AddToCalendar from '@/views/AddToCalendar'
import AddTimeSlots from '@/views/AddTimeSlots'


Vue.use(VueRouter)

const router = new VueRouter({
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
    },
    {
      path: '/:dentalClinicId/calendar',
      name: 'Calendar',
      component: Calendar,
    },
    {
      path: '/registerclinic',
      name: 'RegisterClinic',
      component: RegisterClinic,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/:dentalClinicId',
      name: 'DentalClinic',
      component: DentalClinic,
    },
    {
      path: '/:dentalClinicId/calendar/:dateId/timeslots',
      name: 'TimeSlots',
      component: TimeSlots,
    },
    {
      path: '/:dentalClinicId/calendar/add',
      name: 'AddToCalendar',
      component: AddToCalendar,
      meta: { requiresAuth: true }
    },
    {
      path: '/:dentalClinicId/calendar/:dateId/timeslots/add',
      name: 'AddTimeSlots',
      component: AddTimeSlots,
      meta: { requiresAuth: true }
    }

  ],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})


export default router


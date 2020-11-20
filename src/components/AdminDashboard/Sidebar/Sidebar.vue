<template>
  <div class="admin-sidebar">
    <div class="admin-sidebar_brand-logo">
      <b-button
        v-b-modal.go-home-modal
        id="tooltip-target-dentistimo"
        class="admin-sidebar_button"
      >
        <logo-small-white />
      </b-button>
    </div>

    <ul class="admin-sidebar_nav">
      <li
        v-for="(navItem, index) in sidebarNav"
        :key="index"
        class="admin-sidebar_nav-item"
      >
        <b-button @click="setDashboardView(navItem.dashboardContent)">
          <b-icon :icon="navItem.icon" />
        </b-button>
      </li>
    </ul>

    <sidebar-modal />
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import LogoSmallWhite from '../../svg/LogoSmallWhite/LogoSmallWhite'
  import SidebarModal from './SidebarModal'

  export default {
    name: 'Sidebar',

    components: {
      SidebarModal,
      LogoSmallWhite,
    },

    methods: { ...mapActions(['setDashboardView']) },

    data() {
      return {
        sidebarNav: [
          {
            icon: 'journal-bookmark-fill',
            dashboardContent: 'patientLog',
          },
          {
            icon: 'calendar3',
            dashboardContent: 'calendarSettings',
          },
          {
            icon: 'people-fill',
            dashboardContent: 'dentistSettings',
          },
          {
            icon: 'tools',
            dashboardContent: 'clinicSettings',
          },
        ],
      }
    },
  }
</script>

<style scoped>
  @import 'Sidebar.css';
</style>

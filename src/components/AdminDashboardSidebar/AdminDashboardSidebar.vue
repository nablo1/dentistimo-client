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
        :id="navItem.tooltipId"
        class="admin-sidebar_nav-item"
      >
        <b-button @click="setDashboardView(navItem.dashboardContent)">
          <b-icon :icon="navItem.icon" />
        </b-button>
      </li>
    </ul>

    <admin-dashboard-sidebar-tooltips />

    <admin-dashboard-sidebar-modal />
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import LogoSmallWhite from '../svg/LogoSmallWhite/LogoSmallWhite'
  import AdminDashboardSidebarModal from './AdminDashboardSidebarModal'
  import AdminDashboardSidebarTooltips from './AdminDashboardSidebarTooltips'

  export default {
    name: 'AdminSidebar',

    components: {
      AdminDashboardSidebarModal,
      AdminDashboardSidebarTooltips,
      LogoSmallWhite,
    },

    methods: { ...mapActions(['setDashboardView']) },

    data() {
      return {
        sidebarNav: [
          {
            icon: 'journal-bookmark-fill',
            tooltipId: 'tooltip-target-patient-log',
            tooltipText: 'Patient log',
            dashboardContent: 'patientLog',
          },
          {
            icon: 'calendar3',
            tooltipId: 'tooltip-target-calendar',
            tooltipText: 'Calendar',
            dashboardContent: 'calendarSettings',
          },
          {
            icon: 'people-fill',
            tooltipId: 'tooltip-target-dentists',
            tooltipText: 'Dentists',
            dashboardContent: 'dentistSettings',
          },
          {
            icon: 'tools',
            tooltipId: 'tooltip-target-settings',
            tooltipText: 'Settings',
            dashboardContent: 'clinicSettings',
          },
        ],
      }
    },
  }
</script>

<style scoped>
  @import './AdminDashboardSidebar.css';
</style>

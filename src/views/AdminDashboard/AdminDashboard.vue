<template>
  <div class="admin-dashboard">
    <admin-dashboard-sidebar />
    <div class="admin-dashboard_content">
      <b-container>
        <b-row>
          <b-col>
            <patient-log v-if="dashboardView === 'patientLog'" />
            <calendar-settings v-if="dashboardView === 'calendarSettings'" />
            <dentist-settings v-if="dashboardView === 'dentistSettings'" />
            <clinic-settings v-if="dashboardView === 'clinicSettings'" />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import AdminDashboardSidebar from '@/components/AdminDashboardSidebar/AdminDashboardSidebar'
  import PatientLog from '@/components/PatientLog/PatientLog'
  import CalendarSettings from '@/components/CalendarSettings/CalendarSettings'
  import DentistSettings from '@/components/DentistSettings/DentistSettings'
  import ClinicSettings from '@/components/ClinicSettings/ClinicSettings'

  export default {
    name: 'AdminDashboard',
    components: {
      ClinicSettings,
      DentistSettings,
      CalendarSettings,
      PatientLog,
      AdminDashboardSidebar,
    },

    computed: { ...mapGetters(['clinicSignedIn', 'dashboardView']) },

    created() {
      // TODO: push to a view with sign-in when one is created, instead of '/'
      if (!this.clinicSignedIn) this.$router.push('/')
    },
  }
</script>

<style scoped>
  @import './AdminDashboard.css';
</style>

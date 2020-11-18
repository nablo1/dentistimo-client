<template>
  <div class="admin-dashboard">
    <admin-dashboard-sidebar />
    <div class="admin-dashboard_content">
      <b-container>
        <b-row>
          <b-col>
            <patient-log />
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

  export default {
    name: 'AdminDashboard',
    components: { PatientLog, AdminDashboardSidebar },

    computed: { ...mapGetters(['clinicSignedIn']) },

    created() {
      // TODO: push to a view with sign-in when one is created, instead of '/'
      if (!this.clinicSignedIn) this.$router.push('/')
    },
  }
</script>

<style scoped>
  @import './AdminDashboard.css';
</style>

<template>
  <div class="admin-dashboard">
    <admin-dashboard-sidebar />
    <div class="admin-dashboard_content">
      <!-- TODO: Add dashboard content here -->
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import AdminDashboardSidebar from '@/components/AdminDashboardSidebar/AdminDashboardSidebar'

  export default {
    name: 'AdminDashboard',
    components: { AdminDashboardSidebar },

    computed: { ...mapGetters(['clinicSignedIn']) },

    created() {
      if (!this.clinicSignedIn) this.$router.push('/')
    },
  }
</script>

<style scoped>
  @import './AdminDashboard.css';
</style>

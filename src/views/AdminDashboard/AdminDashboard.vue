<template>
  <div class="admin-dashboard">
    <admin-sidebar />
    <div class="admin-dashboard_content">
      <!-- TODO: Add dashboard content here -->
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar/AdminSidebar";
export default {
  name: "AdminDashboard",
  components: { AdminSidebar }
};
</script>

<style scoped>
@import "./AdminDashboard.css";
</style>

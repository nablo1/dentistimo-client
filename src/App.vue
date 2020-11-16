<template>
  <div id="app">
    <!-- TODO: AdminDashboard is added for testing in UI, remove when no longer needed here :) -->
    <admin-dashboard />
  </div>
</template>

<script>
import AdminDashboard from "@/views/AdminDashboard/AdminDashboard";

export default {
  name: "App",
  components: {
    AdminDashboard
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

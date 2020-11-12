<template>
  <div id="app" class="root">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader/AppHeader";

export default {
  name: "App",
  components: { AppHeader }
};
</script>

<style>
@import "./App.css";
</style>

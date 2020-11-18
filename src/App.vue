<template>
  <div id="app" class="root">
    <app-header />

    <transition name="fade">
      <router-view />
    </transition>

    <app-footer />
  </div>
</template>

<script>
  import AppHeader from '@/components/AppHeader/AppHeader'
  import AppFooter from '@/components/AppFooter/AppFooter'

  export default {
    name: 'App',
    components: { AppFooter, AppHeader },
  }
</script>

<style>
  @import './App.css';
</style>

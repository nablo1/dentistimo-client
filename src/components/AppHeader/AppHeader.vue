<!--
Component use case:
This component acts as the primary navigation for Dentistimo use cases.
It does not appear in AdminDashboard.vue, where another type of navigation is used.
-->

<template>
  <header id="appHeader" class="app-header">
    <b-container v-if="!clinicSignedIn">
      <b-row class="py-2">
        <b-col cols="10" sm="6" md="8" lg="9" xl="9">
          <router-link to="/">
            <header-logo />
            <dentistimo-text />
          </router-link>
        </b-col>

        <b-button v-if="!checkSignedIn()" href="/login" variant="light">
          Admin sign in
        </b-button>

        <b-button
          class="mr-1"
          v-if="checkSignedIn()"
          @click="signOut()"
          variant="light"
        >
          Sign out
        </b-button>
        <b-button v-if="checkSignedIn()" href="/registerclinic" variant="light">
          Register New Clinic
        </b-button>
      </b-row>
    </b-container>
    <app-header-sidebar />
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'
  import DentistimoText from '../svg/LandingPage/DentistimoText.vue'
  import HeaderLogo from '../svg/LandingPage/HeaderLogo.vue'
  import AppHeaderSidebar from './AppHeaderSidebar'

  export default {
    name: 'AppHeader',
    components: { AppHeaderSidebar, HeaderLogo, DentistimoText },
    computed: { ...mapGetters(['clinicSignedIn']) },
    methods: {
      checkSignedIn() {
        if (localStorage.getItem('jwt') == null) {
          return false
        }
        return true
      },
      signOut() {
        localStorage.removeItem('jwt')
        location.reload()
      },
    },
  }
</script>

<style scoped>
  @import './AppHeader.css';
</style>

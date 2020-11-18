<template>
  <header id="appHeader" class="app-header">
    <b-container v-if="!clinicSignedIn">
      <b-row class="py-2">
        <b-col cols="8" sm="9" md="10" lg="10" xl="10">
          <!-- TODO: Replace 'Dentistimo' with app logos here -->
          <router-link to="/">
            Dentistimo
          </router-link>
        </b-col>

        <b-col cols="2" sm="2" md="1" lg="1" xl="1">
          <b-button variant="light" class="app-header_search-btn">
            <b-icon-search />
          </b-button>
          <!--
          TODO: Show search input field on click of above button. Cols have to be adjusted to fit this, probably with a v-if for the b-col.
           -->
        </b-col>

        <b-col cols="2" sm="1" md="1" lg="1" xl="1">
          <b-button
            v-b-toggle.app-header-sidebar
            variant="light"
            class="app-header_nav-btn"
          >
            <b-icon-justify />
          </b-button>
        </b-col>
      </b-row>
    </b-container>
    <app-header-sidebar />
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'
  import AppHeaderSidebar from './AppHeaderSidebar'

  export default {
    name: 'AppHeader',
    components: { AppHeaderSidebar },
    computed: { ...mapGetters(['clinicSignedIn']) },
  }
</script>

<style scoped>
  @import './AppHeader.css';
</style>

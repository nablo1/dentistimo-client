<template>
  <footer class="app-footer">
    <b-container v-if="!clinicSignedIn">
      <b-row>
        <b-col>
          <router-link to="/" class="app-footer_brand-logo">
            Dentistimo
          </router-link>
        </b-col>
      </b-row>
      <b-row class="app-footer_nav">
        <!-- TODO: Add router link paths -->

        <b-col xl="2" lg="2" md="2" sm="6">
          <router-link to="/">
            About
          </router-link>
          <router-link to="/">
            Faq
          </router-link>
        </b-col>

        <b-col xl="2" lg="2" md="2" sm="6">
          <router-link to="/">
            Contact
          </router-link>
          <router-link to="/">
            Careers
          </router-link>
        </b-col>

        <b-col xl="8" lg="8" md="8" sm="12">
          <router-link to="/">
            Privacy policy and cookies
          </router-link>
          <router-link to="/">
            Terms and conditions
          </router-link>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="app-footer_copy">
          <p>
            <small>
              &copy; Dentistimo 2020
            </small>
          </p>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'AppFooter',
    computed: { ...mapGetters(['clinicSignedIn']) },
  }
</script>

<style scoped>
  @import './AppFooter.css';
</style>

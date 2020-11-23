<!--
Component use case:
This component works as an alert, letting the end-user know
that they're about to leave the admin dashboard for their
dentist clinic, sign out, and return to '/', Home.vue
-->

<template>
  <b-modal
    @ok="returnHome"
    id="go-home-modal"
    class="admin-sidebar_modal"
    centered
  >
    <p>
      By continuing, you sign out from admin view and return to Dentistimo's
      main website
    </p>
  </b-modal>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'SidebarModal',

    methods: {
      ...mapActions(['setSignedIn', 'setDashboardView']),

      returnHome() {
        // TODO: Change once auth is set up
        this.setSignedIn(false)
        this.$router.push('/')
        this.setDashboardView(null)
      },
    },
  }
</script>

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
    name: 'AdminSidebarModal',

    methods: {
      ...mapActions(['setSignedIn']),

      returnHome() {
        // TODO: Change once auth is set up
        this.setSignedIn(false)
        this.$router.push('/')
      },
    },
  }
</script>

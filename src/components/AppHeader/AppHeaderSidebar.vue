<!--
Component use case:
This component slides out from the right of the viewport when an end-user clicks
the hamburger menu in the AppHeader.vue component.
The purpose of the component is to show more navigation options that would not fit in the AppHeader.
-->

<template>
  <b-sidebar id="app-header-sidebar" right shadow>
    <div class="pt-4 px-3">
      <!-- TODO: Add v-if to display different sidebar content if the user is signed in/signed out or signing in -->
      <!-- <signed-in-content /> -->
      <signed-out-content />
      <!-- <signing-in-content /> -->

      <!-- TODO: Add router link when page is created -->
      <p class="mt-4">
        <small>
          Not finding what you're looking for?
          <br />
          <router-link to="/"
            >Visit our Frequently Asked Questions page.</router-link
          >
        </small>
      </p>
    </div>
  </b-sidebar>
</template>

<script>
  // import SignedInContent from './SignedInContent'
  import SignedOutContent from './SignedOutContent'
  // import SigningInContent from './SigningInContent'

  export default {
    name: 'AppHeaderSidebar',
    components: {
      /*SignedInContent,*/ SignedOutContent /*, SigningInContent*/,
    },
  }
</script>

<style scoped></style>

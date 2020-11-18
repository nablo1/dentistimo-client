<template>
  <b-sidebar id="app-header-sidebar" right shadow>
    <div class="pt-4 px-3">
      <!-- TODO: Add v-if to display different sidebar content if the user is signed in/signed out or signing in -->
      <!-- <signed-in-content /> -->
      <signed-out-content />
      <!-- <signing-in-content /> -->
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

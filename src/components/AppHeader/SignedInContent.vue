<!--
Component use case:
This component is conditionally rendered if an end-user is signed in as a patient user.
-->

<template>
  <div>
    <b-card>
      <b-card-body>
        <h5>Dentistimo navigation</h5>
        <h6>
          Ready to leave?
        </h6>
        <b-button variant="primary" block>
          Sign out
        </b-button>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: 'SignedInContent',
  }
</script>

<style scoped></style>

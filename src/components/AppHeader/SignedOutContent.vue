<template>
  <div>
    <b-card class="mb-4">
      <b-card-body>
        <h5>
          Patient portal
        </h5>
        <p>
          <small>
            Once you're a register membered, Dentistimo allows you to book
            appointments for all our available dentist clinics in Gothenburg.
          </small>
        </p>

        <b-button-group class="w-100">
          <!-- TODO: Lead log in button to modal on click -->
          <b-button variant="outline-primary">
            Sign in
          </b-button>

          <!-- TODO: Lead sign up button to view on click -->
          <b-button variant="primary">
            Sign up
          </b-button>
        </b-button-group>
      </b-card-body>
    </b-card>

    <b-card>
      <b-card-body>
        <h5>
          Dentist portal
        </h5>
        <p>
          <small>
            Are you here to access your dentist clinic administration pages or
            register your dentist clinic with Dentistimo? Follow one of the
            paths below.
          </small>
        </p>
        <b-button @click="authDentalClinic" variant="outline-primary" block>
          Sign in
        </b-button>
        <b-button variant="primary" block>
          Register your clinic
        </b-button>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'SidebarContentSignedOut',

    methods: {
      ...mapActions(['setSignedIn']),

      authDentalClinic() {
        // TODO: This has to be changed when authentication is set up
        this.setSignedIn(true)
        this.$router.push('/clinic-admin')
      },
    },
  }
</script>

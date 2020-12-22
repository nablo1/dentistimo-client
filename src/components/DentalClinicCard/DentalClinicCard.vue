<template>
  <div>
    <b-card no-body class="overflow-hidden dentistCard">
      <!--Placeholder link -->
      <a class="stretched-link " :href="dentalClinic._id">
        <b-row no-gutters>
          <b-col md="6">
            <!--Placeholder image -->
            <b-card-img
              src="https://images.unsplash.com/photo-1553691158-91a7f9183156?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt="dentist clinic name"
              class="rounded-0"
            />
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text class="font-weight-bold dentistNameCard">
                <br />

                <!-- Placeholder -->
                <p>{{dentalClinic.name}}</p>
              </b-card-text>
              <b-card-text class="dentistAddressCard">
                <b-icon icon="geo-alt-fill"></b-icon>

                <!--Placeholder -->
                {{dentalClinic.address}}
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </a>
    </b-card>
  </div>
</template>

<script>

  export default {
    name: 'DentalClinicCards',
    props: ['dentalClinic'],
    data() {
      return {
        message: '',
        text: '',
      }
    },
  }
</script>

<style>
  img {
    object-fit: cover;
    object-position: center;
    height: 200px;
  }

  @media only screen and (min-width: 768px) {
    img {
      max-width: 306px;
    }
  }
  .dentistAddressCard {
    /* TODO: Colors used. To be moved to the root styling */
    color: black;
    text-align: center;
  }

  .dentistNameCard {
    /* TODO: Colors used. To be moved to the root styling */
    color: black;
    text-align: center;
  }
</style>

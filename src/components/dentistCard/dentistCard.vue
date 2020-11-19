<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 306px;">
      <!--Placeholder link -->
      <a class="stretched-link " href>
        <b-row no-gutters>
          <b-col md="6">
            <!--Placeholder image -->
            <b-card-img
              src="dentistImage..jpg"
              alt="dentist clinic name"
              class="rounded-0"
              id="img"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="">
              <b-card-text class="font-weight-bold" id="name">
                <br />
                <!-- Placeholder -->
                Dentist Clinic Name
              </b-card-text>
              <b-card-text id="address">
                <b-icon icon="geo-alt-fill"></b-icon>

                <!--Placeholder -->
                Location
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </a>
    </b-card>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  #address {
    color: black;
    text-align: center;
  }

  #name {
    color: black;
    text-align: center;
  }

  #img {
    max-width: 100%;
    height: auto;
  }
</style>

<template>
<body>
 <div>
  <div class=" text-center background">
    <div class="col-sm-6 main-section">
      <div class="modal-content fixPos">
        <div class="cusImage">
          <img src="https://i.ibb.co/6ZrYYfF/Logo-Vector.png" />
        </div>
        <div>
          <div>
            <div>
              <h1>{{ dentalClinic.name }}</h1>
              <h3>Owned by: {{ dentalClinic.owner }} </h3>
              <h3> Address: {{ dentalClinic.address }} {{dentalClinic.city}}</h3>
              <h3>{{ dentalClinic.dentists }} Dentists available </h3>
              <h3>Opening Hours: </h3>
               <h5>Monday: {{ dentalClinic.openingHours.monday }}</h5>
               <h5>Tuesday: {{ dentalClinic.openingHours.tuesday }}</h5>
               <h5>Wedensday: {{ dentalClinic.openingHours.wednesday }}</h5>
               <h5>Thursday: {{ dentalClinic.openingHours.thursday }}</h5>
               <h5>Friday: {{ dentalClinic.openingHours.friday }}</h5>              
              <div>
                <b-button
                  type="button"
                  variant="outline-primary"
                  :href="dentalClinic._id + '/calendar'"
                  >Book an appoitment</b-button
                >
                &nbsp;
                <b-button
                  type="button"
                  variant="outline-primary"
                  href="/"
                  >Back to home page</b-button
                >
                <b-button
                  type="button"
                  variant="outline-primary"
                  :href="dentalClinic._id + '/update-info'"
                  v-if="checkSignedIn()"
                  >Update clinic info</b-button
                >
                <br><br><br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="pushDown" />
  </div>
</div>
</body>
</template>

<script>
import axios from 'axios';
export default {
  name: 'dentalClinic',
  data() {
      return {
          dentalClinic: {}
      }
  },
  methods: {
      getDentalClinic() {
          axios.get('http://localhost:3000/api/dentalClinics/' + this.dentalClnicId)
          .then((response) => {
          this.dentalClinic = response.data
          })
          .catch((error) => {
          this.message = error.message
          console.error(error)
          this.dentalClinic = null
          })
      },
      checkSignedIn() {
        if (localStorage.getItem('jwt') == null) {
          return false
        }
        return true
}

  },
  created() {
  this.dentalClnicId = this.$route.params.dentalClinicId
  },
  mounted() {
      this.getDentalClinic()
  }
}
</script>
<style>
  @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
body {
 background:url("https://i.ibb.co/r0kSL7Z/jj-ying-7-JX0-bfiux-Q-unsplash.jpg");
 font-family: "Source Sans Pro", sans-serif;
}
.main-section {
 margin: 0 auto;
 margin-top: 130px;
 padding: 0;
 
}
.modal-content {
 background-color: grey;
 opacity: 0.95;
 padding: 0 25px;
 box-shadow: 0px 0px 3px #848484;
 width: 1500px;
}
.cusImage img {
 height: 115px;
 width: 88px;
 box-shadow: 0px 0px 2px;
 margin-top: -50px;
 margin-bottom: 40px;
}
.btn {
 background-color: black;
 color: white;
 padding-left: 10px;
 height: 40px;
}
.divider {
 width: 5px;
 height: auto;
 display: inline-block;
}


</style>
 
 


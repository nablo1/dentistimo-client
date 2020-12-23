<template>
  <div id="pic" class="text-center" >
    <br />
    <div >
      <br /><br />
      <b-card class="text-center" style="max-width: 65%; margin:auto;" border-variant="info">
        <br />
        <h5>Dental Clinic *</h5>
        <b-input
          style="max-width: 75%; margin:auto;"
          v-model="name"
          placeholder="Enter Dental clinic name"
        ></b-input>
        <br />
        <div>
          <h5>Owner's name *</h5>
          <b-input
            style="max-width: 75%; margin:auto;"
            v-model="owner"
            placeholder="Enter Owner name"
          ></b-input>
        </div>
        <br />
        <div>
          <h5>Number of Dentists available</h5>
          <b-form-spinbutton
            id="sb-inline"
            v-model="dentists"
            inline
          ></b-form-spinbutton>
        </div>
        <br />
        <b-row no-gutters>
          <b-col md="6">
            <h5>Address *</h5>
            <b-input
              style="max-width: 90%; margin:auto;"
              v-model="address"
              placeholder="Enter address"
            ></b-input>
          </b-col>
          <b-col md="6">
            <h5>City *</h5>
            <b-input
              style="max-width: 90%; margin:auto;"
              v-model="city"
              placeholder="Enter city"
            ></b-input>
          </b-col>
        </b-row>
        <br />
        <div>
          <h5>Coordinates</h5>
          <h6>
            (Hint: You can convert your address to coordinates by using
            <a href="https://www.latlong.net/convert-address-to-lat-long.html"
              >this website</a
            >)
          </h6>
          <b-row no-gutters>
            <b-col md="6">
              <b-input
                style="max-width: 90%; margin:auto;"
                v-model="latitude"
                placeholder="Enter Latitude"
              ></b-input>
            </b-col>
            <b-col md="6">
              <b-input
                style="max-width: 90%; margin:auto;"
                v-model="longitude"
                placeholder="Enter Longitude"
              ></b-input>
            </b-col>
          </b-row>
        </div>
        <br />
        <div>
          <h5>Opening Hours</h5>
          <br />
          <b-row no-gutters>
            <b-col md="4">
              <h6>Monday :</h6>
            </b-col>
            <b-col md="8">
              <b-input
                style="max-width: 100%; margin:auto;"
                v-model="monday"
                placeholder="Eg: 8:00-17:00"
              ></b-input>
            </b-col>
          </b-row>
          <br />
          <b-row no-gutters>
            <b-col md="4">
              <h6>Tuesday :</h6>
            </b-col>
            <b-col md="8">
              <b-input
                style="max-width: 100%; margin:auto;"
                v-model="tuesday"
                placeholder="Eg: 8:00-17:00"
              ></b-input>
            </b-col> </b-row
          ><br />
          <b-row no-gutters>
            <b-col md="4">
              <h6>Wednesday :</h6>
            </b-col>
            <b-col md="8">
              <b-input
                style="max-width: 100%; margin:auto;"
                v-model="wednesday"
                placeholder="Eg: 8:00-17:00"
              ></b-input>
            </b-col> </b-row
          ><br />
          <b-row no-gutters>
            <b-col md="4">
              <h6>Thursday :</h6>
            </b-col>
            <b-col md="8">
              <b-input
                style="max-width: 100%; margin:auto;"
                v-model="thursday"
                placeholder="Eg: 8:00-17:00"
              ></b-input>
            </b-col> </b-row
          ><br />
          <div>
            <b-row no-gutters>
              <b-col md="4">
                <h6>Friday :</h6>
              </b-col>
              <b-col md="8">
                <b-input
                  style="max-width: 100%; margin:auto;"
                  v-model="friday"
                  placeholder="Eg: 8:00-17:00"
                ></b-input>
              </b-col>
            </b-row>
          </div>
          <br />
        </div>
        <br />
      </b-card>
    </div>
    <br />
    <p>Please make sure that you have filled the fileds maked with *</p>
    <b-alert
      style="max-width: 80%; margin:auto;"
      :show="dismissCountDown"
      dismissible
      variant="info"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      Welcome to Dentistimo! Please return to the home page to view your clinic.
    </b-alert><br>
    <b-button variant="info" v-on:click="addClinic()" @click="showAlert"
      >Register</b-button
    >
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        dentalClinics: [],
        name: this.name,
        owner: this.owner,
        dentists: this.dentists,
        address: this.address,
        city: this.city,
        longitude: this.longitude,
        latitude: this.latitude,
        monday: this.monday,
        tuesday: this.tuesday,
        wednesday: this.wednesday,
        thursday: this.thursday,
        friday: this.friday,
        dismissSecs: 6,
        dismissCountDown: 0,
        text: '',
        show: true,
      }
    },
    methods: {
      addClinic() {
        axios
          .post('http://localhost:3000/api/dentalClinics', {
            name: this.name,
            owner: this.owner,
            dentists: this.dentists,
            address: this.address,
            city: this.city,
            coordinates: [
              {
                longitude: this.longitude,
                latitude: this.latitude,
              },
            ],
            openingHours: [
              {
                monday: this.monday,
                tuesday: this.tuesday,
                wednesday: this.wednesday,
                thursday: this.thursday,
                friday: this.friday,
              },
            ],
          })
          .then(response => {
            this.dentalClinics.push('/dentalClinics')
            console.log(response)
          })
          .catch(error => {
            this.message = error.message
            console.error(error)
          })
      },
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      },
    },
  }
</script>

<style>
  #pic {
    width: 100%;
    height: 100%;
    background-image: url('../assets/dentalClinic.jpg');
    background-size: auto;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
    background-color: #ffffff;
  }
</style>
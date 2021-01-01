<template>
  <div class="text-center">
    <div>
      <b-card
        class="text-center"
        style="max-width: 65%; margin:auto;"
        border-variant="info"
      >
        <br />
        <form @submit.prevent="updateName()">
          <h5>Dental clinic Name</h5>
          <b-input
            style="max-width: 50%; margin:auto;"
            v-model="newName.name"
            placeholder="Enter new name"
            required
          ></b-input>
          <br />
          <b-button type="submit" variant="outline-secondary"
            >Update name</b-button
          >
        </form>
        <br />
        <h5>Number of Dentists available</h5>
        <b-form-spinbutton
          id="sb-inline"
          v-model="newDentistsNumber.dentists"
          inline
          required
        ></b-form-spinbutton>
        <br /><br />
        <b-button @click="updateDentistsNumber()" variant="outline-secondary"
          >Update number of dentists</b-button
        >
        <div>
          <br />
          <form @submit.prevent="updateOpeningHours()">
            <h5>Opening Hours</h5>
            <b-row no-gutters>
              <b-col md="4">
                <h6>Monday :</h6>
              </b-col>
              <b-col md="8">
                <b-input
                  style="max-width: 100%; margin:auto;"
                  v-model="newOpeningHours.openingHours.monday"
                  placeholder="Eg: 8:00-17:00"
                  required
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
                  v-model="newOpeningHours.openingHours.tuesday"
                  placeholder="Eg: 8:00-17:00"
                  required
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
                  v-model="newOpeningHours.openingHours.wednesday"
                  placeholder="Eg: 8:00-17:00"
                  required
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
                  v-model="newOpeningHours.openingHours.thursday"
                  placeholder="Eg: 8:00-17:00"
                  required
                ></b-input>
              </b-col> </b-row
            ><br />
            <b-row no-gutters>
              <b-col md="4">
                <h6>Friday :</h6>
              </b-col>
              <b-col md="8">
                <b-input
                  style="max-width: 100%; margin:auto;"
                  v-model="newOpeningHours.openingHours.friday"
                  placeholder="Eg: 8:00-17:00"
                  required
                ></b-input>
              </b-col>
            </b-row>
            <br />
            <b-button type="submit" variant="outline-secondary"
              >Update opening hours</b-button
            >
          </form>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  const swal = require('sweetalert')
  export default {
    data() {
      return {
        newName: {
          name: '',
        },
        newDentistsNumber: {
          dentists: null,
        },
        newOpeningHours: {
          openingHours: {
            monday: '',
            tuesday: '',
            wednesday: '',
            thursday: '',
            friday: '',
          },
        },
      }
    },
    methods: {
      updateName() {
        axios
          .put(
            'http://localhost:3000/api/dentalClinics/' + this.dentalClinicId,
            this.newName
          )
          .then(response => {
            console.log(response.data)
            swal('Success', 'Dental clinin name updated', 'success')
          })
          .catch(error => {
            this.message = error.message
            swal('Error', 'Something Went Wrong', 'error')
          })
      },
      updateDentistsNumber() {
        axios
          .put(
            'http://localhost:3000/api/dentalClinics/' + this.dentalClinicId,
            this.newDentistsNumber
          )
          .then(response => {
            console.log(response.data)
            swal('Success', 'Dentists number updated', 'success')
          })
          .catch(error => {
            this.message = error.message
            swal('Error', 'Something Went Wrong', 'error')
          })
      },
      updateOpeningHours() {
        axios
          .put(
            'http://localhost:3000/api/dentalClinics/' + this.dentalClinicId,
            this.newOpeningHours
          )
          .then(response => {
            console.log(response.data)
            swal('Success', 'Opening hours updated', 'success')
          })
          .catch(error => {
            this.message = error.message
            swal('Error', 'Something Went Wrong', 'error')
          })
      },
    },
    created() {
      this.dentalClinicId = this.$route.params.dentalClinicId
    },
  }
</script>

<style></style>

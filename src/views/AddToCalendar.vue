<template>
  <div>
    <body>
      <div class="modal-dialog text-center background">
        <div class="col-sm-8 main-section">
          <div class="modal-content fixPos">
            <div class="col-12 cusImage">
              <img src="https://i.ibb.co/6ZrYYfF/Logo-Vector.png" />
            </div>
            <div class="col-12">
              <div class="logForm">
                <div class="logform">
                  <label for="example-datepicker">Choose a date</label>
                  <b-form-datepicker
                    id="example-datepicker"
                    v-model="newDate.date"
                    class="mb-2"
                  ></b-form-datepicker>
                  <center>
                    <b-button
                      @click="addToCalendar()"
                      type="submit"
                      variant="primary"
                      >Add</b-button
                    >
                    &nbsp;
                    <b-button
                      type="button"
                      variant="outline-primary"
                      :href="'/' + this.dentalClinicId + '/calendar'"
                      >Back to calendar</b-button
                    >
                  </center>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
  import axios from 'axios'
  const swal = require('sweetalert')
  export default {
    data() {
      return {
        newDate: {
          date: '',
        },
      }
    },
    methods: {
      addToCalendar() {
        axios
          .post(
            'http://localhost:3000/api/dentalClinics/' +
              this.dentalClinicId +
              '/dates',
            this.newDate
          )
          .then(response => {
            console.log(response.data)
            swal('Success', 'Date added to calendar', 'success')
          })
          .catch(error => {
            console.log(error)
            swal('Error', 'Something Went Wrong', 'error')
          })
      },
    },
    created() {
      this.dentalClinicId = this.$route.params.dentalClinicId
    },
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
  body {
    background: url('https://i.ibb.co/r0kSL7Z/jj-ying-7-JX0-bfiux-Q-unsplash.jpg');
    font-family: 'Source Sans Pro', sans-serif;
  }
  .main-section {
    margin: 0 auto;
    margin-top: 130px;
    padding: 0;
  }
  .modal-content {
    background-color: white;
    opacity: 0.95;
    padding: 0 18px;
    box-shadow: 0px 0px 3px #848484;
  }
  .cusImage img {
    height: 115px;
    width: 88px;
    box-shadow: 0px 0px 2px #848484;
    margin-top: -50px;
    margin-bottom: 40px;
  }
  .logForm {
    margin-bottom: 25px;
    border-radius: 5px;
  }
  .logForm input {
    height: 42px;
    margin-bottom: 20px;
    border-radius: 5px;
  }
  .btn {
    background-color: blue;
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

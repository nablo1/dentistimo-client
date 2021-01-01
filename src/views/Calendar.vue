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
                        <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
                    <center>
                     <b-button @click="checkDates()" type="submit" variant="primary">Select</b-button>
                     &nbsp;
                    <b-button type="button" variant="outline-primary" href="/">Cancel</b-button>
                    <br><br>
                    <b-button v-if="checkSignedIn()" type="button" variant="outline-primary" :href="'/' + this.dentalClinicId + '/calendar/add'">Add days to your calendar</b-button>
                    </center><br>
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
import axios from 'axios';
//import Date from '@/components/Date'
const swal2 = require('sweetalert2')
  export default {
    data() {
      return {
       value:'',
       dates: []
      }
    },
    methods: {
      getAllDates() {
        axios.get('http://localhost:3000/api/dentalClinics/' + this.dentalClinicId + '/dates')
          .then((response) => {
          this.dates = response.data
          console.log(this.dates)
          })
          .catch((error) => {
          this.message = error.message
          console.error(error)
          this.dates = null
          })
      },
      checkDates() {
        for(var i = 0; i < this.dates.length; i++) {
          if(this.dates[i].date == this.value) {
            console.log(this.dates[i]._id)
            var dateId = this.dates[i]._id
            swal2.fire({
              html:
                '<a href="calendar/' + dateId + '/timeslots">Click here</a> ' +
                'to see the available time slots in this date',
              showCloseButton: true
            })
            break;
          } else {
            swal2.fire('There no available time slots in this date')
          }
        }
      },
      checkSignedIn() {
        if (localStorage.getItem('jwt') == null) {
          return false
        }
        return true
      }
    },
    mounted() {
      this.getAllDates()
    },
    created() {
      this.dentalClinicId = this.$route.params.dentalClinicId
    }
    
  }
</script>
<style scoped>
  .table {
    text-align: center;
  }
  .status {
    text-align: center;
  }
  .table-bordered {
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgb(0, 0, 0);
    border-collapse: collapse;
    table-layout: fixed;
    text-align: center;
    margin: 20px auto;
  }
  .book {
    margin-left: 47%;
    margin-top: 1cm;
    margin-bottom: 1in;
  }
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
body {
  background: url("https://i.ibb.co/r0kSL7Z/jj-ying-7-JX0-bfiux-Q-unsplash.jpg");
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

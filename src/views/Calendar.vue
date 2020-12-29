<template>
  <div>
     <div>
      <label for="example-datepicker">Choose a date</label>
      <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
    </div>
    <!-- <b-col
          v-for="date in dates"
          :key="date._id"
          cols="12"
          sm="12"
          md="6"
          lg="4"
          xl="3"
        >
          <Date v-bind:date="date" />
          <br>
        </b-col> -->

        <b-button @click="checkDates"> Continue</b-button>
  

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
        axios.get('http://localhost:3000/api/dentalClinics/' + this.dentalClnicId + '/dates')
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
      } 
    },
    mounted() {
      this.getAllDates()
    },
    created() {
      this.dentalClnicId = this.$route.params.dentalClinicId
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
</style>

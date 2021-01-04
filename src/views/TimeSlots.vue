<template>
  <div id="theme" class="theme">
    <h1 class="h1">Available Time Slots</h1>
    <div class="time">
      <b-card class="card">
        <b-row>
          <b-col
            class="col"
            cols="12"
            sm="12"
            md="6"
            lg="4"
            xl="3"
            v-for="timeSlot in timeSlots"
            :key="timeSlot._id"
          >
            <TimeSlotItem v-bind:timeSlot="timeSlot" />&nbsp;
          </b-col>
        </b-row>
      </b-card>
      <router-link class="Link" v-bind:to="'/'"
        >Back to the Home page ⇨
      </router-link>
      <br />
      <router-link
        v-if="checkSignedIn()"
        class="Link"
        v-bind:to="
          '/' +
            this.dentalClinicId +
            '/calendar/' +
            this.dateId +
            '/timeSlots/add'
        "
        >Add time slots to this date
      </router-link>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import TimeSlotItem from '@/components/TimeSlotItem'

  const swal = require('sweetalert')

  export default {
    data() {
      return {
        timeSlots: [],
      }
    },
    components: {
      TimeSlotItem,
    },
    methods: {
      getAllTimeSlots() {
        axios
          .get(
            'http://localhost:3000/api/dentalClinics/' +
              this.dentalClinicId +
              '/dates/' +
              this.dateId +
              '/timeSlots'
          )
          .then(response => {
            this.timeSlots = response.data
            console.log(this.timeSlots)
          })
          .catch(error => {
            this.message = error.message
            console.error(error)
            this.timeSlots = null
          })
      },
      checkSignedIn() {
        if (localStorage.getItem('jwt') == null) {
          return false
        }
        return true
      },
    },
    created() {
      ;(this.dentalClinicId = this.$route.params.dentalClinicId),
        (this.dateId = this.$route.params.dateId)
    },
    mounted() {
      this.getAllTimeSlots()
      this.$mqtt.subscribe('booking/response')
    },
    mqtt: {
      'booking/response'(message) {
        var msg = message.toString()
        console.log(msg)
        swal({
          text: msg,
          button: true,
        }).then(resOkay => {
          if (resOkay) {
            location.reload()
          }
        })
      },
    },
  }
</script>

<style scoped>
  .col {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.5cm;
  }
  .time {
    text-align: center;
    margin-top: 4cm;
  }

  .card {
    margin-left: 29%;
    margin-right: 29%;
    margin-bottom: 30%;
    text-align: center;
    border: 4px;
  }
  #theme {
    background-image: url('../assets/theme.jpg');
    background-size: 1462px 900px;
    background-repeat: no-repeat;
  }
  .h1 {
    color: rgb(0, 0, 0);
    font-family: 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS',
      sans-serif;
    text-align: center;
  }
  .Link {
    font-weight: bold;
    font-family: 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS',
      sans-serif;
    color: rgb(17, 18, 19);
    text-align: center;
  }
</style>

<template>
  <div>
      <b-col
          v-for="timeSlot in timeSlots"
          :key="timeSlot._id"
          cols="12"
          sm="12"
          md="6"
          lg="4"
          xl="3"
        >
          <TimeSlotItem v-bind:timeSlot="timeSlot" />

          <br>
        </b-col>
  </div>
</template>

<script>
import axios from 'axios';
import TimeSlotItem from '@/components/TimeSlotItem'
export default {
    data() {
        return {
            timeSlots: []
        }
    },
    components: {
        TimeSlotItem
    },
    methods: {
        getAllTimeSlots() {
            axios.get('http://localhost:3000/api/dentalClinics/' + this.dentalClnicId + '/dates/' + this.dateId + '/timeSlots')
          .then((response) => {
          this.timeSlots = response.data
          console.log(this.timeSlots)
          })
          .catch((error) => {
          this.message = error.message
          console.error(error)
          this.timeSlots = null
          })
        }
    },
    created() {
        this.dentalClnicId = this.$route.params.dentalClinicId,
        this.dateId = this.$route.params.dateId
    },
    mounted() {
        this.getAllTimeSlots()
    }

}
</script>

<style>

</style>
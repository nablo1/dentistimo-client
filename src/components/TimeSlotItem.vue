<template>
    <div>
        <b-button @click="showMsgBox()">{{timeSlot.timeSlot}} </b-button>
    </div>
</template>

<script>
import {ourClient} from '@/main'
import axios from 'axios';
export default {
  name: 'timeSlot',
  props: ['timeSlot'],
  data() {
    return {
      box: ''
    }
  },
  methods: {
    sendBookingRequest() {
      this.createRequestId()
      console.log(this.dentalClnicId)
      console.log(this.date.date)
      console.log(this.timeSlot.timeSlot)
      console.log(ourClient)
      console.log(this.request.number)
      
      //TODO: issuance and requestid
      //publish things to mqtt
    },
     showMsgBox() {
      this.box = ''
      this.$bvModal
        .msgBoxConfirm('Do you want to book this time slot?', {
          title: 'Please Confirm',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          okTitle: 'YES',
          cancelTitle: 'NO',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
        .then((value) => {
          this.box = value
          if (value) {
            this.sendBookingRequest()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getDate() {
      axios.get('http://localhost:3000/api/dentalClinics/' + this.dentalClnicId + '/dates/' + this.dateId)
          .then((response) => {
          this.date = response.data
          })
          .catch((error) => {
          this.message = error.message
          console.error(error)
          this.date = null
          })
    },
    createRequestId() {
      axios.post('http://localhost:3000/api/requests')
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })

    },
    getLastRequest() {
      axios.get('http://localhost:3000/api/requests')
          .then((response) => {
          this.request = response.data
          })
          .catch((error) => {
          this.message = error.message
          console.error(error)
          this.request = null
          })
    }
  },
  created() {
        this.dentalClnicId = this.$route.params.dentalClinicId,
        this.dateId = this.$route.params.dateId
  },
  mounted() {
    this.getDate(),
    this.getLastRequest()
  }
}
</script>
<style>

</style>

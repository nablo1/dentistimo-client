<template>
  <div>
    <b-button class="timeButton" pill variant="primary" @click="showMsgBox()"
      >{{ timeSlot.timeSlot }}
    </b-button>
  </div>
</template>

<script>
  import { ourClient } from '@/main'
  import axios from 'axios'
  export default {
    name: 'timeSlot',
    props: ['timeSlot'],
    data() {
      return {
        box: '',
      }
    },
    methods: {
      sendBookingRequest() {
        this.createRequestId()
        console.log(this.requestNumber)
        this.publishPlease()
      },
      getIssuance() {
        const current = new Date()
        const issuanceGen =
          current.getHours() +
          ' ' +
          current.getMinutes() +
          ' ' +
          current.getSeconds() +
          ' ' +
          current.getMilliseconds()
        const issuance = issuanceGen.replace(/\s+/g, '').trim()
        return issuance
      },
      publishPlease() {
        var message = `{"userid":"${ourClient}", "requestid":"${
          this.requestNumber
        }", "issuance":"${this.getIssuance()}", "date":"${
          this.date.date
        }", "time":"${this.timeSlot.timeSlot}", "timeSlot_id":"${
          this.timeSlot._id
        }"}`

        this.$mqtt.publish('booking/request', message)
        console.log('message' + message)
      },
      showMsgBox() {
        this.getLastRequest()
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
            centered: true,
          })
          .then(value => {
            this.box = value
            if (value) {
              this.sendBookingRequest()
            }
          })
          .catch(err => {
            console.log(err)
          })
      },
      getDate() {
        axios
          .get(
            'http://localhost:3000/api/dentalClinics/' +
              this.dentalClnicId +
              '/dates/' +
              this.dateId
          )
          .then(response => {
            this.date = response.data
          })
          .catch(error => {
            this.message = error.message
            console.error(error)
            this.date = null
          })
      },
      createRequestId() {
        axios
          .post('http://localhost:3000/api/requests')
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
      },
      getLastRequest() {
        axios
          .get('http://localhost:3000/api/requests')
          .then(response => {
            this.request = response.data
            if (!this.request) {
              this.requestNumber = 1
            } else {
              this.requestNumber = this.request.number + 1
            }
          })
          .catch(error => {
            this.message = error.message
            console.error(error)
            this.request = null
          })
      },
    },
    created() {
      ;(this.dentalClnicId = this.$route.params.dentalClinicId),
        (this.dateId = this.$route.params.dateId)
    },
    mounted() {
      this.getDate(), this.getLastRequest()
    },
  }
</script>
<style></style>

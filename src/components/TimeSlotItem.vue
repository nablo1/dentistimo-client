<template>
    <div>
        <b-button @click="showMsgBox()">{{timeSlot.timeSlot}} </b-button>
    </div>
</template>

<script>
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
      console.log(this.dentalClnicId)
      console.log(this.dateId)
      console.log(this.timeSlot._id)
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
    }
  },
  created() {
        this.dentalClnicId = this.$route.params.dentalClinicId,
        this.dateId = this.$route.params.dateId
    }
}
</script>
<style>

</style>

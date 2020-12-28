<template>
  <div>
    <InteractiveMap />
    <b-container>
      <b-row> </b-row>
      <br> <br>

      <b-row class="cards-row">
        <b-col
          v-for="dentalClinic in dentalClinics"
          :key="dentalClinic._id"
          cols="12"
          sm="12"
          md="6"
          lg="4"
          xl="3"
        >
          <DentalClinicCard v-bind:dentalClinic="dentalClinic" />
          <br>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
  @import './Home.css';
</style>

<script>
  
  import axios from 'axios';
  import InteractiveMap from '@/components/InteractiveMap/InteractiveMap'
  import DentalClinicCard from '../../components/DentalClinicCard/DentalClinicCard.vue'
  export default {
    //computed: mapGetters(['allClinics']),
    data() {
      return {
        dentalClinics: []
      }
    },
    components: { InteractiveMap, DentalClinicCard },
    methods: {
      getAllClinics() {
        axios.get('http://localhost:3000/api/dentalClinics')
        .then((response) => {
          this.dentalClinics = response.data
          console.log(this.dentalClinics)
        })
        .catch((error) => {
          this.message = error.message
          console.error(error)
          this.dentalClinics = []
          // TODO: display error message
        })

      },
      publishSomething() { //just to publishing to mqtt
        this.$mqtt.publish('booking/request', 'yooo')
        console.log('published the msg')
      }
    },
    created() {
      this.getAllClinics()
    }
  }
</script>

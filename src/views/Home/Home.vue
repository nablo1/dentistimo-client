<template>
  <div>
    <InteractiveMap />
    <b-container>
      <b-row> </b-row>

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
        </b-col>
      </b-row>

      <b-row class="justify-content-center pagination-row">
        <b-button pill variant="outline-secondary" size="sm">
          prev <b-icon-caret-left> </b-icon-caret-left>
        </b-button>
        <div class="divider" />
        <b-button @click="publishSomething()" pill variant="outline-secondary" size="sm">
          next <b-icon-caret-right> </b-icon-caret-right>
        </b-button>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
  @import './Home.css';
</style>

<script>
  
   /*const getAllClinics = async function() {
    try {
        const resp = await axios.get('http://localhost:3000/api/dentalClinics');
        console.log(resp.data);
        this.dentalClinics = resp.data
        
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
  }; */
  import axios from 'axios';
  // import dentistCard from '@/components/dentistCard/dentistCard.vue'
  //import { mapGetters, mapActions } from 'vuex'
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
     // ...mapActions(['getAllClinics'])
       /* async getAllClinics() {
        try {
          const response = await axios.post('http://localhost:3000/api/dentalClinics');
          console.log(response.data);

        } catch (e) {
          console.log(e);
        }
      }  */
      getAllClinics() {
        axios.get('http://localhost:3000/api/dentalClinics')
        .then((response) => {
          this.dentalClinics = response.data
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

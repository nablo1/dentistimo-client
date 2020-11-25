<template>

   <div>
       <InteractiveMap/>
        <b-container>
        <b-row>
        </b-row>

        <b-row class="cards-row">
            <b-col v-for="clinic in allClinics" :key="clinic.id"
            cols="12" sm="12" md="6" lg="4" xl="3">
                <p> {{clinic.name}}</p>
            </b-col>
        </b-row>

        <b-row class="justify-content-center pagination-row">
            <b-button pill variant="outline-secondary" size="sm">
                prev <b-icon-caret-left> </b-icon-caret-left>
                </b-button>
            <div class="divider"/>
            <b-button pill variant="outline-secondary" size="sm">
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
// import dentistCard from '@/components/dentistCard/dentistCard.vue'
import {mapGetters} from 'vuex'
import InteractiveMap from "@/components/InteractiveMap/InteractiveMap";
export default {

    computed: mapGetters(['allClinics']),
  components: { InteractiveMap }

}
</script>
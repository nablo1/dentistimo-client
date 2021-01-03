<template>
  <div class="interactiveMap">
    <l-map
      class="lmap"
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker
        :key="index"
        v-for="(dentalClinic, index) in dentalClinics"
        :lat-lng="
          latLngFunction(
            dentalClinic.coordinates.latitude,
            dentalClinic.coordinates.longitude
          )
        "
      >
        <l-popup :options="{ permanent: true, interactive: true }">
          <b>{{ dentalClinic.name }}</b> <br />
          {{ checkAvailability(dentalClinic._id) }}
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
  import { latLng } from 'leaflet'
  import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'
  import axios from 'axios'

  export default {
    //TODO: Incorporate state handling
    name: 'Example',
    props: {
      /*  dentalClinics: Array,
      timeSlots: Array, */
    },
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup,
    },
    data() {
      return {
        zoom: 13,
        center: latLng(57.7089, 11.9746),
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
        withPopup: latLng(57.7089, 11.9746),
        currentZoom: 11.5,
        currentCenter: latLng(57.7089, 11.9746),
        mapOptions: {
          zoomSnap: 0.5,
        },
        showMap: true,
        dentalClinics: Array,
        timeSlots: Array,
        availableClinics: [],
      }
    },
    methods: {
      zoomUpdate(zoom) {
        this.currentZoom = zoom
      },
      centerUpdate(center) {
        this.currentCenter = center
      },
      latLngFunction(lat, lng) {
        return latLng(lat, lng)
      },
      getAllClinics() {
        axios
          .get('http://localhost:3000/api/dentalClinics')
          .then(response => {
            this.dentalClinics = response.data
          })
          .catch(error => {
            this.message = error.message
            console.error(error)
            this.dentalClinics = []
          })
      },
      getAllTimeSlots() {
        axios
          .get('http://localhost:3000/api/timeSlots')
          .then(response => {
            this.timeSlots = response.data
          })
          .catch(error => {
            this.message = error.message
            console.error(error)
            this.timeSlots = []
          })
      },
      checkAvailability(clinicId) {
        var availableClinics = new Array()
        for (var i = 0; i < this.timeSlots.length; i++) {
          availableClinics.push(this.timeSlots[i].dentalClinic)
        }
        if (availableClinics.includes(clinicId)) {
          return 'This clinic has free time slots'
        } else {
          return 'Unfortunately there are no available time slots in this clinic at the moment'
        }
      },
    },
    created() {
      this.getAllClinics(), this.getAllTimeSlots()
    },
  }
</script>

<style>
  .interactiveMap {
    height: 500px;
    width: 100%;
  }

  .lmap {
    height: 90%;
  }
  .icon-style {
    height: 100%;
    width: 10%;
  }
</style>

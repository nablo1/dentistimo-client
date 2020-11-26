<template>
  <div class="row map">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
          :key="index"
          v-for="(dentist, index) in dentists"
          :lat-lng="latLng(dentist.longitude, dentist.latitude)"
      ></l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import L from 'leaflet'

export default {
  name: 'MapWithForLoop',
  props: {
    dentists: Array
  },
  data: function () {
    return {
      zoom: 13,
      center: L.latLng(57.708870, 11.974560),
      url: 'https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=fc61ee47c1974e34b1c8752b9df2b317',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(57.708870, 11.974560)
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  methods: {
    latLng: function (lat, lng) {
      return L.latLng(lat, lng)
    }
  }
}
</script>

<style scoped>
.map {
  height: 95vh;
}
</style>

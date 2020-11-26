<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <p></p>
        <p></p>
        <h1 class="text-center">Dentists</h1>
      </div>
    </div>
    <div>
    </div>
    <div class="row">
      <div class="col-6 dentist-list">
        <div class="card">
          <ul class="list-group list-group-flush">
            <li
                v-bind:key=" index "
                v-for="(dentist, index) in dentists"
                class="list-group-item">
              {{ dentist.name }}, {{ dentist.address}}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-6">
        <MapWithForLoop :dentists="dentists"/>
      </div>
    </div>
    <dentist/>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
import MapWithForLoop from "@/components/InteractiveMap/MapWithForLoop";

export default {
  name: 'HomeWithForLoop',
  props: {
    dentists: Array
  },
  mounted: function () {
    Api.get('/dentists')
        .then(response => {
          this.dentists = response.data
        })
        .catch(error => {
          this.dentists = []
          console.log(error)
        })
  },
  components: { MapWithForLoop }
}
</script>

<style lang="scss" scoped>
.dentist-list {
  overflow-y: scroll;
  height: 95vh;

  li {
    &:hover {
      background-color: darkgrey;
    }
  }
}

</style>

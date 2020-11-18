<template>
  <header id="appHeader" class="app-header">
    <b-container>
      <b-row>
        <b-col>
          <b-navbar class="app-header_nav">
            <b-navbar-brand class="app-header_brand">
              <!-- TODO: Replace 'Dentistimo' with app logos here -->
              <router-link to="/">
                Dentistimo
              </router-link>
            </b-navbar-brand>

            <!-- TODO: Use search form component -->

            <b-button v-b-toggle.app-header-sidebar>
              <b-icon-justify />
            </b-button>

            <app-header-sidebar class="ml-auto" />
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
  import AppHeaderSidebar from './AppHeaderSidebar'
  export default {
    name: 'AppHeader',
    components: { AppHeaderSidebar },
    data() {
      return {
        expanded: false,
        screenY: 0,
        mouseY: 0,
      }
    },

    /*

    TODO: Figure out why this doesn't work as intended.

    created() {
      window.addEventListener('scroll', () => {
        if (this.mouseY < 50 || this.screenY < 100)
          document.getElementById('app-header').style.top = '0'
        else document.getElementById('app-header').style.top = '-100px'
      })

      window.addEventListener('mousemove', event => {
        this.mouseY = event.pageY - this.state.screenY

        if (this.state.mouseY < 50 || this.state.screenY < 100)
          document.getElementById('appHeader').style.top = '0'
        else document.getElementById('appHeader').style.top = '-100px'
      })
    },

    */
  }
</script>

<style scoped>
  @import './AppHeader.css';
</style>

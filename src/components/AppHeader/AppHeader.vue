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

            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown right no-caret>
                <!-- TODO: Figure out why the icons down change on click -->
                <template #button-content #default="{ expanded }">
                  <b-icon-x v-if="expanded" class="app-header_nav-icon" />
                  <b-icon-justify v-else class="app-header_nav-icon" />
                </template>

                <!-- TODO: Add page links here -->
                <b-dropdown-item href="#">
                  <router-link to="/">Link to other view</router-link>
                </b-dropdown-item>

                <b-dropdown-item href="#">
                  <router-link to="/">Link to other view</router-link>
                </b-dropdown-item>

                <b-dropdown-item href="#">
                  <router-link to="/">Link to other view</router-link>
                </b-dropdown-item>

                <b-dropdown-item>
                  <b-button-group>
                    <!-- TODO: Lead log in button to modal on click -->
                    <b-button variant="outline-primary">
                      Log in
                    </b-button>

                    <!-- TODO: Lead sign up button to view on click -->
                    <b-button variant="primary">
                      Sign up
                    </b-button>
                  </b-button-group>
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
  export default {
    name: 'AppHeader',

    data() {
      return {
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

<template>
  <header class="app-header">
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
              <b-nav-item-dropdown text="Menu" right>
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
  name: "AppHeader"
};
</script>

<style scoped>
@import "./AppHeader.css";
</style>

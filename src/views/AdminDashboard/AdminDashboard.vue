<template>
  <div class="admin-dashboard">
    <admin-dashboard-sidebar />

    <div class="admin-dashboard_content">
      <!-- Default content for admin dashboard view -->
      <b-container v-if="dashboardView === null" class="pt-5">
        <b-row class="mb-4">
          <b-col cols="12">
            <h1 class="mb-3">
              <b-icon-house-door /> {{ dentistClinicName }} admin
            </h1>
            <p>
              <b>Hello!</b> This is your dental clinic's personal administration
              dashboard. Select a path below, or navigate via the dashboard menu
              to find what you need.
            </p>
          </b-col>
        </b-row>

        <b-row>
          <b-col
            v-for="(card, index) in dashboardCards"
            :key="index"
            cols="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="mb-4"
          >
            <b-card role="button" @click="setDashboardView(card.viewContent)">
              <b-card-body>
                <h6><b-icon :icon="card.icon" /> {{ card.titleText }}</h6>
                <p>
                  {{ card.useCaseText }}
                </p>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>

      <!-- Components that can be conditionally rendered via the view sidebar -->
      <patient-log v-if="dashboardView === 'patientLog'" />
      <calendar-settings v-if="dashboardView === 'calendarSettings'" />
      <dentist-settings v-if="dashboardView === 'dentistSettings'" />
      <clinic-settings v-if="dashboardView === 'clinicSettings'" />
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import AdminDashboardSidebar from '@/components/AdminDashboardSidebar/AdminDashboardSidebar'
  import PatientLog from '@/components/PatientLog/PatientLog'
  import CalendarSettings from '@/components/CalendarSettings/CalendarSettings'
  import DentistSettings from '@/components/DentistSettings/DentistSettings'
  import ClinicSettings from '@/components/ClinicSettings/ClinicSettings'

  export default {
    name: 'AdminDashboard',
    components: {
      ClinicSettings,
      DentistSettings,
      CalendarSettings,
      PatientLog,
      AdminDashboardSidebar,
    },

    computed: { ...mapGetters(['clinicSignedIn', 'dashboardView']) },

    methods: { ...mapActions(['setDashboardView']) },

    created() {
      // TODO: push to a view with sign-in when one is created, instead of '/'
      if (!this.clinicSignedIn) this.$router.push('/')
    },

    data() {
      return {
        // TODO: Replace dentistClinicName with Api data
        dentistClinicName: 'MyClinic',
        dashboardCards: [
          {
            icon: 'journal-bookmark-fill',
            titleText: 'Patient log',
            useCaseText:
              "See your dental clinic's patient log, and filter patient bookings based on their dates.",
            viewContent: 'patientLog',
          },
          {
            icon: 'calendar3',
            titleText: 'Dental clinic calendar settings',
            useCaseText:
              "Edit your dental clinic's opening hours and your dentist's booking availability.",
            viewContent: 'calendarSettings',
          },
          {
            icon: 'people-fill',
            titleText: "Dentist's settings",
            useCaseText:
              'Add profiles of dentists that work at your clinic, or update existing ones.',
            viewContent: 'dentistSettings',
          },
          {
            icon: 'tools',
            titleText: 'General dental clinic settings',
            useCaseText:
              'Update general information about your clinic. This is the information that patients see when they view your dentist clinic page on the Dentistimo app.',
            viewContent: 'clinicSettings',
          },
        ],
      }
    },
  }
</script>

<style scoped>
  @import './AdminDashboard.css';
</style>

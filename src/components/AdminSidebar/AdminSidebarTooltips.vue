<template>
  <!-- TODO: Make tooltips responsive -->

  <div>
    <!-- Sidebar brand logo tooltip -->
    <b-tooltip
      target="tooltip-target-dentistimo"
      triggers="hover"
      placement="right"
    >
      Dentistimo home
    </b-tooltip>

    <!-- Nav tooltips -->
    <b-tooltip
      target="tooltip-target-patient-log"
      triggers="hover"
      placement="right"
    >
      Patient log
    </b-tooltip>

    <b-tooltip
      target="tooltip-target-calendar"
      triggers="hover"
      placement="right"
    >
      Calendar
    </b-tooltip>

    <b-tooltip
      target="tooltip-target-dentists"
      triggers="hover"
      placement="right"
    >
      Dentists
    </b-tooltip>

    <b-tooltip
      target="tooltip-target-settings"
      triggers="hover"
      placement="right"
    >
      Settings
    </b-tooltip>
  </div>
</template>

<script>
export default {
  name: "AdminSidebarTooltips"
};
</script>

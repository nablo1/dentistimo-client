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
      Calendar settings
    </b-tooltip>

    <b-tooltip
      target="tooltip-target-dentists"
      triggers="hover"
      placement="right"
    >
      Dentist settings
    </b-tooltip>

    <b-tooltip
      target="tooltip-target-settings"
      triggers="hover"
      placement="right"
    >
      General settings
    </b-tooltip>
  </div>
</template>

<script>
export default {
  name: "AdminSidebarTooltips"
};
</script>

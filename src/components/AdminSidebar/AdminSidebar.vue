<template>
  <div class="admin-sidebar">
    <div class="admin-sidebar_brand-logo">
      <b-button id="tooltip-target-dentistimo" class="admin-sidebar_button">
        <logo-small-white />
      </b-button>
    </div>

    <ul class="admin-sidebar_nav">
      <li
        v-for="(navItem, index) in sidebarNav"
        :key="index"
        :id="navItem.tooltipId"
        class="admin-sidebar_nav-item"
      >
        <b-button>
          <b-icon :icon="navItem.icon" />
        </b-button>
      </li>
    </ul>

    <admin-sidebar-tooltips />
  </div>
</template>

<script>
import LogoSmallWhite from "@/components/svg/LogoSmallWhite/LogoSmallWhite";
import AdminSidebarTooltips from "@/components/AdminSidebar/AdminSidebarTooltips";

export default {
  name: "AdminSidebar",

  components: { AdminSidebarTooltips, LogoSmallWhite },

  methods: {
    // TODO: Create method that prompts the end-user to choose to sign out and go to landing page, or cancel, when clicking the brand logo router-link.
  },

  data() {
    return {
      sidebarNav: [
        {
          icon: "journal-bookmark-fill",
          tooltipId: "tooltip-target-patient-log",
          tooltipText: "Patient log"
        },
        {
          icon: "calendar3",
          tooltipId: "tooltip-target-calendar",
          tooltipText: "Calendar"
        },
        {
          icon: "people-fill",
          tooltipId: "tooltip-target-dentists",
          tooltipText: "Dentists"
        },
        {
          icon: "tools",
          tooltipId: "tooltip-target-settings",
          tooltipText: "Settings"
        }
      ]
    };
  }
};
</script>

<style scoped>
@import "./AdminSidebar.css";
</style>

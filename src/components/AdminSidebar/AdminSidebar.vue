<template>
  <div class="admin-sidebar">
    <div class="admin-sidebar_brand-logo">
      <b-button class="admin-sidebar_button">
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
  </div>
</template>

<script>
import LogoSmallWhite from "@/components/svg/LogoSmallWhite/LogoSmallWhite";

export default {
  name: "AdminSidebar",

  components: { LogoSmallWhite },

  methods: {
    // TODO: Create method that prompts the end-user to choose to sign out and go to landing page, or cancel, when clicking the brand logo router-link.
  },

  data() {
    return {
      sidebarNav: [
        {
          icon: "journal-bookmark-fill",
          tooltipId: "tooltip-target-2",
          tooltipText: "Patient log"
        },
        {
          icon: "calendar3",
          tooltipId: "tooltip-target-3",
          tooltipText: "Calendar"
        },
        {
          icon: "people-fill",
          tooltipId: "tooltip-target-4",
          tooltipText: "Dentists"
        },
        {
          icon: "tools",
          tooltipId: "tooltip-target-5",
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

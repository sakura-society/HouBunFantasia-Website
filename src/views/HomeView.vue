<template>
  <headers></headers>
  <tips></tips>
  <info></info>
  <stakeholder></stakeholder>
  <community></community>
  <contact></contact>
</template>

<script>
import tips from "../components/Home/tips.vue";
import Info from "../components/Home/info.vue";
import stakeholder from "../components/Home/stakeholder.vue";
import contact from "../components/Home/contact.vue";
import community from "../components/Home/community.vue";
import headers from "../components/Home/header.vue";
export default {
  components: {
    tips,
    Info,
    stakeholder,
    contact,
    community,
    headers,
  },
};
</script>

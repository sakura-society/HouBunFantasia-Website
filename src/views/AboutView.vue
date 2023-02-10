<template>
  <Header></Header>
  <JoinTab></JoinTab>
  <contact></contact>
</template>

<script>
import Header from "../components/About/Header.vue";
import JoinTab from "../components/About/join.vue";
import contact from "../components/About/contact.vue"

export default {
  components: {
    Header,
    contact,
    JoinTab,
  },
};
</script>


<template>
  <Header></Header>
  <Help></Help>
  <Afdian></Afdian>
</template>

<script>
import Header from "../components/Donate/Header.vue";
import Afdian from "../components/Donate/afdian.vue";
import Help from "../components/Donate/help.vue";

export default {
  components: {
    Header,
    Afdian,
    Help,
  },
};
</script>


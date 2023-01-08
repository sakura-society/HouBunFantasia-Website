<template>
  <div>
    <VueNavUI :navLinks="navLinks" :navConfig="navConfig" :btnConfig="btnConfig">
      <img class="img" src="./assets/logo.png" alt="" srcset="" />
    </VueNavUI>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import VueNavUI from "vue-nav-ui";
import Footer from "./components/Footer.vue";
//import { Nav } from "../components";
export default defineComponent({
  name: "HomeView",
  components: {
    VueNavUI,
    Footer,
  },
  setup() {
    const navLinks = ref([
      {
        name: "Home",
        path: "/",
      },
      {
        name: "About",
        path: "/about",
      },
      {
        name: "FAQs",
        path: "/faqs",
      },
      {
        name: "More",
        path: "/more",
      },
      {
        name: "Media",
        path: "/media",
      },
    ]);
    const navConfig = ref({
      whitespace: true,
      navBg: "#292b32",
      navBorderRadius: "0px",
      linkFont: "poppins",
      linkColor: "#fff",
      responsivePosition: "top",
    });

    const btnConfig = ref({
      btnLink: true,
      btnUrl: "https://kirara.sakurakoi.top/download",
      btnBg: "#003e8f",
      btnText: "ο(=•ω＜=)ρ⌒☆",
      btnTextColor: "white",
      btnBorderWidth: "0",
      btnBorderColor: "black",
      btnBorderRadius: "20px",
    });

    return {
      navLinks, btnConfig, navConfig
    };
  },
});
</script>
<style scoped>

</style>

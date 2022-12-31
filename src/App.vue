<template>
  <div>
    <VueNavUI :navLinks="navLinks" :navConfig="navConfig" :btnConfig="btnConfig">
      <img class="img" src="./assets/logo.png" alt="" srcset="" />
      <template #btnPrepend>
        <img class="img" src="./assets/logo.png" alt="" srcset="" />
      </template>
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
      navBg: "#FAFAFA",
      navBorderRadius: "30px",
      linkFont: "poppins",
      linkColor: "black",
      responsivePosition: "top",
    });

    const btnConfig = ref({
      btnLink: false,
      btnUrl: "https://dhaniel.disha.page",
      btnText: "Download app",
      btnBg: "#40269E",
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
<style>

</style>

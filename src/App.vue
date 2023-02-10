<template>
  <div>
    <VueNavUI :navLinks="navLinks" :navConfig="navConfig" :btnConfig="btnConfig">
      <img class="img" src="/favicon.ico" alt="" srcset="" />
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
        name: "主页",
        path: "/",
      },
      {
        name: "关于&加入",
        path: "/about",
      },
      {
        name: "文档&旧版官网",
        path: "/docs",
      },
      {
        name: "赞助&鸣谢",
        path: "/donate",
      }
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
      btnUrl: "https://docs.sakurakoi.top/download",
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
.img {
  width: auto !important;
}
</style>

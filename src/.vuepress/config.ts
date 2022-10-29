import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "芳文狂想曲",
      description: "一款芳文社的同人游戏",
    },
    "/en/": {
      lang: "en-US",
      title: "houbun fantasia",
      description: "A fan game of HouBunSha",
    },

  },

  theme,

  shouldPrefetch: false,
});

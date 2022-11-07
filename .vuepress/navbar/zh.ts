import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "教程", icon: "discover", link: "/course/" },
  {
    text: "开发文档",
    icon: "square-plus",
    prefix: "/guide/",
    link: "/guide/",
    children: [
      {
        text: "基础系统",
        icon: "genderless",
        prefix: "/Basic system/",
        link: "/Basic system/",
      },
    ],
  },
  {
    text: "社区",
    icon: "paper-plane",
    children: [
      {
        text: "QQ频道",
        icon: "qq fa-brands fa-qq",
        link: "https://pd.qq.com/s/8wjs231x2"
      },
      {
        text: "Discord",
        icon: "discord fa-brands fa-discord",
        link: "https://discord.gg/qe8kv5avvV"
      },
    ],
  },
  {
    text: "贡献翻译",
    icon: "earth-americas",
    link: "https://crwd.in/houbunfantasia"
  },
]);

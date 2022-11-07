import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  { text: "course", icon: "discover", link: "/course/" },
  {
    text: "Guide",
    icon: "square-plus",
    prefix: "/en/guide/",
    link: "/en/guide/",
    children: [
      {
        text: "Basic system",
        icon: "genderless",
        prefix: "/en/Basic system/",
        link: "/en/Basic system/",
      },
    ],
  },
  {
    text: "community",
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
    text: "Contribution to translation",
    icon: "earth-americas",
    link: "https://crwd.in/houbunfantasia"
  },
]);

import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "案例", icon: "discover", link: "/demo/" },
  {
    text: "指南",
    icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
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

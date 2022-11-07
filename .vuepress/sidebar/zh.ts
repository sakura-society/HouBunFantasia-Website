import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discourse",
      text: "教程",
      prefix: "course/",
      link: "course/",
      children: "structure",
    },
    {
      text: "开发文档",
      icon: "book",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    "schedule",
  ],
});

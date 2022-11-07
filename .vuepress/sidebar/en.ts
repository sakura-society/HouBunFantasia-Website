import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      icon: "discourse",
      text: "Course",
      prefix: "course/",
      link: "course/",
      children: "structure",
    },
    {
      text: "Docs",
      icon: "book",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    "schedule",
  ],
});

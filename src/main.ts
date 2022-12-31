import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import NProgress from "nprogress";
// 引入nprogress样式文件
import "nprogress/nprogress.css";
import "animate.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/brands.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";

createApp(App).use(router).mount("#app");

router.beforeEach((to, from, next) => {
  // 开启进度条
  NProgress.start();
  next();
});

router.afterEach((to, from, next) => {
  // 关闭进度条
  NProgress.done();
});
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());

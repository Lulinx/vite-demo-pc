import { createApp } from "vue";
import { createWebHashHistory } from "vue-router";
import createRouter from "./route/index";
import App from "./App.vue";
import { showToast } from "@/utils/extend.js";
const app = createApp(App);
const routes = createRouter(createWebHashHistory("/index.html"));
app.config.globalProperties.$toast = showToast;
app.use(routes).mount("#app");

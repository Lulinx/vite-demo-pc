import { createApp } from "vue";
import { createWebHashHistory } from "vue-router";
import createRouter from "./route/index";
import { showToast } from "@/utils/extend.js";

import App from "./App.vue";
const app = createApp(App);
app.config.globalProperties.$toast = showToast;
const routes = createRouter(createWebHashHistory("/index.html"));
app.use(routes).mount("#app");

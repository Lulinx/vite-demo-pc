/*
 * @Author: ws
 * @Date: 2022-01-17 08:56:49
 * @LastEditTime: 2022-01-17 17:56:20
 * @LastEditors: ws
 * @Description: 
 * @FilePath: \myDemo\vite-demo-pc\src\shop\main.js
 */
import { createApp } from "vue";
import { createWebHashHistory } from "vue-router";
import createRouter from "./route/index";
import { showToast } from "@/utils/extend.js";

import App from "./App.vue";
const app = createApp(App);
app.config.globalProperties.$toast = showToast;
const routes = createRouter(createWebHashHistory("/index.html"));
app.use(routes).mount("#app");

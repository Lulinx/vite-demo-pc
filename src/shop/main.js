import { createApp } from "vue";
import { createWebHashHistory } from "vue-router";
import createRouter from "./route/index";
import 'element-plus/theme-chalk/el-message.css';
import 'element-plus/theme-chalk/el-notification.css';
import App from "./App.vue";
const app = createApp(App);
const routes = createRouter(createWebHashHistory("/index.html"));
app.use(routes).mount("#app");

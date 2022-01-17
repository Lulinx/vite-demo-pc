import { createApp } from "vue";
import { showToast, dateFormat } from "@/utils/extend.js";

import App from "./App.vue";
const app = createApp(App);
Date.prototype.format = (dateType) => { return dateFormat(dateType) };
app.config.globalProperties.$toast = (type, message) => { return showToast(type, message) };
app.mount("#app");

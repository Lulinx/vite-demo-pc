import { createApp } from "vue";
import { showToast } from "@/utils/extend.js";

import App from "./App.vue";
const app = createApp(App);
app.config.globalProperties.$toast = (type, message) => { return showToast(type, message) };
app.mount("#app");

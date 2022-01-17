import { createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("../components/home/index.vue"),
    name: "home",
  },
  {
    path: "/shop",
    component: () => import("../components/shop/index.vue"),
    name: "shop",
  },
  {
    path: "/shopDetail",
    component: () => import("../components/shopDetail/index.vue"),
    name: "shopDetail",
  },
];
export default (history) => {
  return createRouter({
    history,
    routes,
  });
};

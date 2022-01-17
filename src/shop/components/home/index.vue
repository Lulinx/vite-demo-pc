<template>
  <div @click="click()">pc端多页面-带路由</div>
</template>

<script setup>
import { getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const { proxy } = getCurrentInstance();
const click = () => {
  proxy.$toast("success", "this is a message.");
  setTimeout(() => {
    router.push({
      name: "shop",
      item: {
        name: "111",
      },
    });
  }, 2000);
};
</script>
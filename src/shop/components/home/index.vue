<template>
  <div @click="click()">pc端多页面-带路由</div>
</template>

<script setup>
import { getCurrentInstance, h } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const { proxy } = getCurrentInstance();
const click = () => {
  proxy.$toast("success",{
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ])
  });
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
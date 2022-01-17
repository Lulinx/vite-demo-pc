<!--
 * @Author: ws
 * @Date: 2022-01-17 08:56:49
 * @LastEditTime: 2022-01-17 16:13:35
 * @LastEditors: ws
 * @Description: 
 * @FilePath: \myDemo\vite-demo-pc\src\shop\components\shop\index.vue
-->
<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :hollow="activity.hollow"
        :timestamp="activity.timestamp"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
    <el-button type="primary" :loading="loading" @click="goToDetail"
      >Loading</el-button
    >
    <el-button type="success" @click="numberAdd"
      >++count: {{ count }}</el-button
    >
  </div>
</template>

<script setup>
import { MoreFilled } from "@element-plus/icons-vue";
import { readonly, ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { searchDreamDetail } from "@/api/api";
let loading = ref(false);
const router = useRouter();
let count = ref(0);
let dataList = ref([]);
const activities = [
  {
    content: "Custom icon",
    timestamp: "2018-04-12 20:46",
    size: "large",
    type: "primary",
    icon: MoreFilled,
  },
  {
    content: "Custom color",
    timestamp: "2018-04-03 20:46",
    color: "#0bbd87",
  },
  {
    content: "Custom size",
    timestamp: "2018-04-03 20:46",
    size: "large",
  },
  {
    content: "Custom hollow",
    timestamp: "2018-04-03 20:46",
    type: "primary",
    hollow: true,
  },
  {
    content: "Default node",
    timestamp: "2018-04-03 20:46",
  },
];
const planObj = { count: 12 };
const rnPlanObj = readonly(planObj);
const numberAdd = () => {
  planObj.count += 888;
  return count.value++;
};
const getData = () => {
  const handler = searchDreamDetail({
    area: "武汉",
    apiKey: "MLi5N8Fa82d8c4c876569aa09698ad23b9610cffaf62972",
  }).then((res) => {
    if (res.statusCode == "000000") {
      dataList.value = res.result[0];
      console.log("dataList.value====", dataList.value);
    }
  });
  return handler;
};
watch(
  count,
  (newVal, odlVal, onClearUp) => {
    const handler = getData();
    // 清除副作用 ,作用相当于函数节流
    onClearUp(() => {
      clearTimeout(handler);
    });
  },
  {
    deep: true,
    lazy: true,
  }
);
const goToDetail = () => {
  loading.value = true;
  setTimeout(() => {
    router.push({
      name: "shopDetail",
      query: {
        name: "222",
      },
    });
  }, 2000);
};
</script>
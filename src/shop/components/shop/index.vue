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
    <el-button type="primary" :loading="loading" @click="goToDetail">Loading</el-button>
  </div>
</template>

<script setup>
import { MoreFilled } from "@element-plus/icons-vue";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
let loading = ref(false);
const router = useRouter();
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
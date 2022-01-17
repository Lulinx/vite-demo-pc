<template>
  <div @click="click()">
    pc端多页面-带路由
  </div>
</template>

<script>
import { getCurrentInstance,onMounted } from 'vue';
import { ElMessage } from 'element-plus';
export default {
  setup(omprops,content){
    const click = ()=>{
      ElMessage.success('this is a message.');
    }
    return {
      click,
    }
  }
};
</script>
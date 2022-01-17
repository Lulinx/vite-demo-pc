<template>
  <div @click="click()">
    pc端多页面-带路由
  </div>
</template>

<script>
import { ElMessage } from 'element-plus';
import { useRouter } from "vue-router";
export default {
  setup(omprops,content){
    const router = useRouter();
    const click = ()=>{
      ElMessage.success('this is a message.');
      setTimeout(() => {
        router.push({
          name:'shop',
          item:{
            name:'111',
          }
        })
      }, 2000);
    }
    return {
      click,
    }
  }
};
</script>
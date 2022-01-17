/*
 * @Author: ws
 * @Date: 2022-01-17 08:56:49
 * @LastEditTime: 2022-01-17 14:30:58
 * @LastEditors: ws
 * @Description: 
 * @FilePath: \myDemo\vite-demo-pc\request\index.js
 */
import axios from 'axios';
// 引入公共函数js文件
import { showToast } from "@/utils/extend.js";

// 默认请求连接
// axios.defaults.baseURL = "https://api.apishop.net";
// 超时时间（ms）
axios.defaults.timeout = 2000 * 1000;
// axios请求开启cookie，支持跨域请求携带cookie
axios.defaults.withCredentials = true;
// axios 请求头
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截
axios.interceptors.request.use(
  (config) => {
    // 可在这里做一些数据的校验。
    // session的校验等。
    return config
  },
  (error) => {
    return error
  }
)

// 响应拦截
axios.interceptors.response.use((result) => {
  if (result.status === 200) {
    if (result.data.result && result.data.statusCode == "000000") {
      return Promise.resolve(result);
    } else {
      showToast("error", result.data.desc || "操作失败");
      return Promise.reject(result);
    }
  } else {
    showToast("error", "网络异常");
    return Promise.reject(result);
  }
}, (err) => {
  // 返回数据前做了什么
  return Promise.reject(err)
})
export default axios
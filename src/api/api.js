/*
 * @Author: ws
 * @Date: 2022-01-17 08:56:49
 * @LastEditTime: 2022-01-17 14:35:21
 * @LastEditors: ws
 * @Description: 用于存放工程内所有的接口API方法
 * @FilePath: \myDemo\vite-demo-pc\src\api\api.js
 */
import request from "root/request/request";
import mockData from "root/mock/mock";
const Mock = true;
const baseUrl =
  process.env.NODE_ENV === "production" ? "https://api.apishop.net" : "";


  
// 狗狗大全
export const dogFamily = (data = {}, callback = "") =>
  Mock
    ? mockData("dogFamily")
    : request.post(
      `${baseUrl}/common/dogFamily/queryDogListByKeyword`,
      data,
      callback
    );

export const searchDreamDetail = (data = {}, callback = "") =>
  Mock
    ? mockData("searchDreamDetail")
    : request.post(
      `${baseUrl}/common/dream/searchDreamDetail`,
      data,
      callback
    );

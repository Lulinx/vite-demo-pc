/*
 * @Author: ws
 * @Date: 2022-01-17 08:56:49
 * @LastEditTime: 2022-01-17 14:28:29
 * @LastEditors: ws
 * @Description: 此文件用于存放公共方法API
 * @FilePath: \myDemo\vite-demo-pc\src\utils\extend.js
 */
import { ElMessage } from 'element-plus';


/**
 * @description: 接收两个参数（type,message）
 * @param {
 *      type:success/warning/info/error(消息类型,默认info),可不传arguments[0]
 *      message:{options}传字符串或对象，对象则为配置项arguments[1]
 * }
 * @return {*}
 */
export function showToast() {
    if (arguments[1] === undefined) {
        return ElMessage.info(arguments[0]);
    } else {
        return ElMessage[arguments[0]](arguments[1]);
    }
} 
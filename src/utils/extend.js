/*
 * @Author: ws
 * @Date: 2022-01-17 08:56:49
 * @LastEditTime: 2022-01-17 20:15:47
 * @LastEditors: ws
 * @Description: 此文件用于存放公共方法API
 * @FilePath: \vite-demo-pc\src\utils\extend.js
 */
import { ElMessage } from 'element-plus';
import { create, all } from 'mathjs'
import moment from "moment";

const config = {
    epsilon: 1e-12,
    matrix: 'Matrix',
    number: 'BigNumber', // 可选值：number BigNumber
    precision: 64,
    predictable: false,
    randomSeed: null
}
const math = create(all, config);

/**
 * @description: 提示语，接收两个参数（type,message）
 * @param {Number} arguments[1]t --success/warning/info/error(消息类型,默认info),可不传arguments[0]
 * @param {Number} arguments[2] --{options}传字符串或对象，对象则为配置项arguments[1]
 * @return {VNode} Vnode
 */
export function showToast() {
    if (arguments[1] === undefined) {
        return ElMessage.info(arguments[0]);
    } else {
        arguments[1] = typeof arguments[1] === "string" ? arguments[1] : Object.assign({}, {
            showClose: false,//显示关闭按钮
            message: arguments[1].message,//提示文案
            center: false,//文字居中
            dangerouslyUseHTMLString: false,//是否是HTML字符串
            duration: 700,//弹框显示时长
        }, arguments[1])
        return ElMessage[arguments[0]](arguments[1]);
    }
}
/**
 * @description: 解决小数计算不精确的问题
 * @param {Number} num1
 * @param {Number} num2
 * @param {String} symbol
 * @return {String}
 */
export function mathJsCalc([num1 = "", num2 = ""], symbol = "+") {
    const MathCompMap = {
        "+": math.format(math.add(math.bignumber(num1), math.bignumber(num2))),
        "-": math.format(math.subtract(math.bignumber(num1), math.bignumber(num2))),
        "*": math.format(math.multiply(math.bignumber(num1), math.bignumber(num2))),
        "/": math.format(math.divide(math.bignumber(num1), math.bignumber(num2))),
    }
    return MathCompMap[symbol];
}

/**
 * @description: 格式化各种时间格式
 * @param {String} current --当前时间
 * @param {String} dateType --格式化日期格式
 * @return {String}
 */
 export function dateFormat(current, dateType){
    return moment(current).format(dateType);
  }
/*
 * @Author: ws
 * @Date: 2022-01-17 08:56:49
 * @LastEditTime: 2022-01-17 17:56:47
 * @LastEditors: ws
 * @Description: 此文件用于存放公共方法API
 * @FilePath: \myDemo\vite-demo-pc\src\utils\extend.js
 */
import { ElMessage } from 'element-plus';
import { create, all } from 'mathjs'
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
 * @description: 
 * @param {Number} num1
 * @param {Number} num2
 * @param {String} symbol
 * @return {String}
 */
export function mathJsCalc([num1 = "", num2 = ""], symbol = "+") {
    const MathCompMap = {
        "+": math.format(math.add(math.bignumber(num1), math.bignumber(num2))), // 3.3
        "-": math.format(math.subtract(math.bignumber(num1), math.bignumber(num2))),
        "*": math.format(math.multiply(math.bignumber(num1), math.bignumber(num2))),
        "/": math.format(math.divide(math.bignumber(num1), math.bignumber(num2))),
    }
    return MathCompMap[symbol];
}

import { ElMessage } from 'element-plus';
export function showToast() {
    if (arguments[1] === undefined) {
        return ElMessage.info(arguments[0]);
    } else {
        return ElMessage[arguments[0]](arguments[1]);
    }

}
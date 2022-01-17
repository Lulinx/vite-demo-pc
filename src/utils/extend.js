import { ElMessage } from 'element-plus';
export function showToast(type="message", message) {
    return ElMessage[type](message);
}
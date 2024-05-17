// 导入组件
import elementTablePlus from './element-table-plus'
// 组件添加数组
const coms = [elementTablePlus]
// 循环批量注册
const install = function (Vue) {
    coms.forEach(com => {
        Vue.component(com.name, com)
    });
}
// 导出
export default install
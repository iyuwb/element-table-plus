import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
Vue.use(ElementUI);


import elementTablePlus from 'element-table-plus-demo';
import 'element-table-plus-demo/elementTablePlusDemo.css';
Vue.use(elementTablePlus)

Vue.config.productionTip = false
new Vue({
  el: '#app',
  render: h => h(App)
});
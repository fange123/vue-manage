import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import './assets/style/reset.css'
import echarts from "echarts";
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false

new Vue({
  router:Router,
  render: h => h(App)
}).$mount('#app')

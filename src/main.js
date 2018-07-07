import Vue from 'vue'
import App from './App.vue'

// 导入路由
import router from './routes/router.js'

// 导入 css 
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
new Vue({
  el: '#app',
  // 会替换页面的文件
  render: h => h(App),
  // 导入路由
  router
})

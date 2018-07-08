import Vue from 'vue'
import App from './App.vue'

import router from './routes/router.js'

// 导入 css
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

import VueAxios from './plugins/myaxios.js'

Vue.use(VueAxios)

new Vue({
  el :'#app',
  render : h=> h(App),
  router
})
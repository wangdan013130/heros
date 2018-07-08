<template>
  <div>
    <!-- 头部 -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
      <!-- 侧边栏 -->
       <app-silder></app-silder>
      </div>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <!-- 右侧列表项 -->
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
// 导入 header 组件
import AppHeader from './components/AppHeader.vue';

// 导入 silder 组件
import AppSilder from './components/AppSilder.vue';


// ES6 的模块导出方法
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components : {
    AppHeader,
    AppSilder
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

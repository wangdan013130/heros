<template>
   <div>
        <h2 class="sub-header">英雄列表</h2>
        <!-- <a class="btn btn-success" href="add.html">Add</a> -->
        <router-link  class="btn btn-success" to="/heroes/add">添加</router-link>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr  v-for="(item,index) in list" :key="item.id">
                <td>{{index+1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.gender}}</td>
                <td>in</td>
                <td>libero</td>
                <td>
                  <router-link to="{name : 'heroedit', parmas : {id:item.id}}">edit</router-link>
                  &nbsp;&nbsp;
                  <a href="#" @click.prevent="handleDelete(item.id)">delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
   </div>
</template>

<script>
   import axios from 'axios';
   export default {
     data() {
       return {
         list : []
       };
     },
     created() {
        this.loadData();
     },
     methods : {
       // 展示列表
       loadData() {
         axios
          .get('http://localhost:3000/heroes')
          .then((res)=> {
            const {status,data} = res;
            if (status == 200) {
              this.list = data;
            }
          })
          .catch((err)=>{
            console.log(err);
          })
       },
       // 添加列表
       // 删除列表
       handleDelete(id) {
         axios
          .delete('http://localhost:3000/heroes/id='+id)
          .then((res)=> {
            if (!confirm('你确定要删除吗?')) {
              return;
            }
            if (res.status == 200) {
              // 删除成功
              this.loadData();
              alert('删除成功');
            } else {
              alert('删除失败');
            }
          })
       }
     }
   } 
</script>

<style>

</style>

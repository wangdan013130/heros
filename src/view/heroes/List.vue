<template>
    <div>
        <h2 class="sub-header">英雄列表</h2>
        <!-- <a class="btn btn-success" href="add.html">Add</a> -->
       <router-link :to="{name:'heroadd'}">添加</router-link>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>名称</th>
                        <th>性别</th>
                        <th>操作</th>
                    </tr>
                </thead>
            <tbody>
            <tr :key="item.id" v-for="(item, index) in list">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.gender }}</td>
                <td>
                    <router-link :to="{ name: 'heroedit', params: { id: item.id } }">edit</router-link>
                    &nbsp;&nbsp;
                    <!-- <a href="javascript:window.confirm('Are you sure?')">delete</a> -->
                    <a href="#" @click.prevent="handleDelete(item.id)">delete</a>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
</div>
</template>

<script>
    export default {
        data () {
            return {
                list : []
            }
        },
        created () {
            this.loadData();
        },
        // 显示英雄列表
        methods : {
            // 加载英雄列表
            loadData() {
                this.$http
                    .get('heroes')
                    .then((res)=> {
                        const {status, data} = res;
                        if (status == 200) {
                            this.list = data;
                        }
                    })
            },
            // 删除英雄
            handleDelete(id) {
              if (!confirm('你确定要删除吗?')) {
                return;
              }
                this.$http
                    .delete(`heroes/${id}`)
                    .then((res)=> {
                        if (res.status == 200) {
                          this.loadData();
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

<template>
    <div>
         <h2 class="sub-header">Edit Hero</h2>
         <form>
            <div class="form-group">
            <label for="name">英雄名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="Name">
            </div>
            <div class="form-group">
                <label for="sex">英雄性别</label>
                <input v-model="formData.gender" type="text" class="form-control" id="sex" placeholder="Sex">
            </div>
            <button @click.prevent="handleEdit" type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formData : {
                    name : '',
                    gender : ''
                },
                heroId : -1
            }
        },
        created() {
           
            this.heroId = this.$route.params.id;
             this.loadData();
        },
        methods : {
            loadData() {
                this.$http  
                    .get(`heroes/${this.heroId}`)
                    .then((res)=> {
                        const {status,data} = res;
                        if (status == 200) {
                            this.formData = data;
                        }
                    })
            },
            handleEdit() {
                this.$http
                    .put(`heroes/${this.heroId}`,this.formData)
                    .then((res)=> {
                        const {status, data} = res;
                        if (status == 200) {
                            alert('修改成功');
                            this.$router.push('/heroes');
                        } else {
                            alert('修改失败');
                        }
                    })
            }
        }
    };

</script>

<style>

</style>

<template>
     <div>
        <h2 class="sub-header">修改英雄</h2>
        <form>
             <div class="form-group">
                <label for="name">英雄名称</label>
                <input type="text"  v-model="formData.name" class="form-control" id="name" placeholder="英雄名称">
            </div>
            <div class="form-group">
                <label for="sex">英雄性别</label>
                <input type="text"  v-model="formData.gender" class="form-control" id="sex" placeholder="英雄性别">
            </div>
            <button type="submit" @click.prevent="handleAdd" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data () {
            return {
                fromData : {
                    name : '',
                    gender : ''
                }
            }
        },
        created () {
                
        }
        methods : {
            // 
        }
    }
</script>

<style>

</style>


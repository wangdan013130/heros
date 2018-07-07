<template>
    <div class="col-sm-3 col-md-2 sidebar">
        <ul class="nav nav-sidebar">
            <router-link to="/heroes" tag="li" active-class="active">
                <a>英雄列表</a>
            </router-link>
            <router-link to="/weapons" tag="li" active-class="active">
                <a>武器列表</a>
            </router-link>
            <router-link to="/equips" tag="li" active-class="active">
                <a>装备列表</a>
            </router-link>
        </ul>
    </div>
</template>
<script>
    export default {
        data () {
            return {

            };
        }
    }
</script>

<style>

</style>

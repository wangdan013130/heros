import Vue from 'vue';

import VueRouter from 'vue-router';

// 1. 导入组件
import HeroesList from '../view/heroes/List.vue';
import EquipsList from '../view/equips/List.vue';
import WeaponsList from '../view/weapons/List.vue';
import HeroesAdd from '../view/heroes/add.vue';
import HeroEdit from '../view/heroes/edit.vue';
// 2 设置路由并配置

// 注册插件
Vue.use(VueRouter);

const router = new VueRouter({
    // 添加点击高亮效果
    linkActiveClass: 'active',
    routes: [
        {name : 'home', path : '/', redirect : '/heroes'},
        {name : 'heros', path :'/heroes', component : HeroesList},
        {name : 'equips', path : '/equips', component : EquipsList},
        {name : 'weapons', path : '/weapons', component : WeaponsList},
        {name : 'heroadd', path :'/heroes/add', component : HeroesAdd},
        {name : 'heroedit', path : '/heroes/edit/:id', component : HeroEdit}
    ]
})
// 3 导出路由
export default router;
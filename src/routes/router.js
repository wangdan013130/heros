// 1 导入vue-router
import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)

// 导入组件
import HeroesList from '../view/heroes/List.vue'
import EquipList  from '../view/equips/List.vue'
import WeaposList from '../view/weapons/List.vue'
import AddList from '../view/heroes/Add.vue'
import HeroEdit from '../view/heroes/Edit.vue'

// 2 创建路由对象,配置路由规则
const router = new VueRouter({
    linkActiveClass : 'active',
    routes : [
         
        // 配置根路径
        {path : 'home',path : '/', redirect : '/heroes' },

        // 路由规则
        {name : 'heroes', path : '/heroes', component : HeroesList},
        {name : 'equips',path : '/equips', component : EquipList},
        {name : 'weapons', path : '/weapons', component : WeaposList},
        {name : 'add', path : '/heroes/add', component : AddList},
        {name : 'heroedit',path : '/heros/edit/:id', component : HeroEdit}
    ]
})

// 3 导出路由
export default router;
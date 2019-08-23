import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '../components/views/Login.vue'
import Home from '../components/views/Home.vue'
import List from '../components/views/List.vue'
import NotFound from '../components/views/404.vue'
// import Table from '../components/views/nav1/Table.vue'
// import Form from '../components/views/nav1/Form.vue'
import Form2 from '../components/views/Form.vue'
// import user from '../components/views/nav1/user.vue'
let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/home',
        component: Home,
        name: '流程部署',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/list', component: List, name: '部署管理'},
            { path: '/form2', component: Form2, name: '流程管理' }
        ]
    },
    // {
    //     path: '/',
    //     component: Home,
    //     name: '导航二',
    //     iconCls: 'fa fa-id-card-o',
    //     children: [
    //         { path: '/list', component: List, name: '页面4' },
    //         { path: '/form2', component: Form2, name: '页面5' }
    //     ]
    // },
    // {
    //     path: '/',
    //     component: Home,
    //     name: '',
    //     iconCls: 'fa fa-address-card',
    //     leaf: true,//只有一个节点
    //     children: [
    //         { path: '/page6', component: Page6, name: '导航三' }
    //     ]
    // },
    // {
    //     path: '/',
    //     component: Home,
    //     name: 'Charts',
    //     iconCls: 'fa fa-bar-chart',
    //     children: [
    //         { path: '/echarts', component: echarts, name: 'echarts' }
    //     ]
    // },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default new Router({
    routes
})
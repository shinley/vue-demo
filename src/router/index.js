import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '../components/views/Login.vue'
import Home from '../components/views/Home.vue'
import Main from '../components/views/Main.vue'
import NotFound from '../components/views/404.vue'
import Table from '../components/views/nav1/Table.vue'
import Form from '../components/views/nav1/Form.vue'
import user from '../components/views/nav1/user.vue'
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
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: 'Table' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: user, name: '列表' },
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default new Router({
    routes
})
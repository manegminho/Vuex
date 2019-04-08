import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '../views/AppMain.vue';
import AppSpa from '../spa/AppSpa.vue';
import NotFound from '../views/NotFoundView.vue';
import AppChart from '../Chart/AppChart.vue';
import AppVuex from '../Vuex/AppVuex.vue';
import AppBus from '../Bus/AppBus.vue';
import AppSlot from '../Slot/AppSlot.vue';
import AppSetup from '../views/AppSetup.vue';
import AppTodo from '../TodoList/AppTodo.vue';
import AppLogin from '../login/AppLogin.vue';
import AppSignup from '../login/AppSignup.vue';
import AppAxios from '../axios/AppAxios.vue';
import AppNew from '../AppNew/AppNew.vue';



import ChartPlugin from '../Chart/plugin/ChartPlugin.js'

Vue.use(VueRouter);
export const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            redirect: '/main',
        },
        {
            path: '/chart',
            name: 'Chart',
            component: AppChart,
        },
        {
            path: '/main',
            name: 'Main',
            component: MainView,
        },
        {
            path: '/vuex',
            name: 'Vuex',
            component: AppVuex,
        },
        {
            path: '/spa',
            name: 'spa',
            component: AppSpa,
        },
        {
            path: '/bus',
            name: 'bus',
            component: AppBus,
        },
        {
            path: '/slot',
            name: 'slot',
            component: AppSlot,
        },
        {
            path: '/list',
            name: 'list',
            component: AppTodo,
        },
        {
            path: '/setup',
            name: 'setup',
            component: AppSetup,
        },
        {
            path: '/login',
            name: 'login',
            component: AppLogin,
        },
        {
            path: '/signup',
            name: 'signup',
            component: AppSignup,
        },
        {
            path: '/axios',
            name: 'axios',
            component: AppAxios,
        },
        {
            path: '/NewView',
            name: 'NewView',
            component: AppNew,
        },
        {
            path: '*',
            name: 'empty',
            component: NotFound,

        }
    ]
});
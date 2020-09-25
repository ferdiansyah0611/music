import Vue from 'vue'
import VueRouter from 'vue-router'
import Url from './listurl';
import Store from './store'
import App from './page/app.vue'

window.axios = require('axios');
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: Url
});

const app = new Vue(
    Vue.util.extend({
        router,
        store: Store
    }, App)
).$mount('#app');
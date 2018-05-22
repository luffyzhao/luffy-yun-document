import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './router'
import App from './Index'

Vue.use(VueRouter)
const router = new VueRouter({
    routes
})

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

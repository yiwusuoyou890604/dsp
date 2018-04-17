import Vue from 'vue'
import Router from 'vue-router'
import newAdvertisement from '../views/newAdvertisement/newAdvertisement.vue'
import home from '../views/home/home.vue'
import plan from '../views/plan/plan.vue'
import unit from '../views/unit/unit.vue'
import origin from '../views/origin/origin.vue'
import datac from '../views/datac/datac.vue'
import tool from '../views/tool/tool.vue'
import login from '../views/login/login.vue'

Vue.use(Router)
let rou = new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/advertising',
            component: Advertising,
            children: [{
                path: '/advertising',
                redirect: '/neworiginality'
            }]
        },
        {
            path: '/login',
            name: 'login',
            component: login,
        },
        {
            path: '/newAdvertisement',
            name: 'newAdvertisement',
            component: newAdvertisement
            
        },
        {
            path: '/home',
            name: 'home',
            component: home,
        },
        {
            path: '/plan',
            component: plan
        },
        {
            path: '/unit',
            component: unit
        },
        {
            path: '/origin',
            component: origin
        },
        {
            path: '/datac',
            component: datac
        },
        {
            path: '/tool',
            component: tool
        }
    ]
})

rou.beforeEach((to, from, next) => {
    if (to.name == 'login') {
        console.log(to.matched)

        next()
    } else {
        if (localStorage.getItem('token')) {
            next()
        } else {
            next({
                path: 'login'
            })
        }
    }
})
export default rou
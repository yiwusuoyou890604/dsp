// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/font/iconfont.css'
import $http from './untils/request.js'
import Vuex from 'vuex'


Vue.config.productionTip = false



Vue.use(ElementUI);
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        data:'请登录'
    },
    mutations: {
        LOGIN(state, payload) {
            state.data = payload
        }
    },
    actions: {
        login({commit},payload) {
            commit('LOGIN',payload)
        }
    }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
    router,
  store,
  components: { App },
  template: '<App/>'
})

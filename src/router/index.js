import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import App from '@/App'

Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    }
  ]
})

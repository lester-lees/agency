import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RouteLines from '@/components/RouteLines'
// import Login from '@/components/Login'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/report',
      name: 'report',
      component: HelloWorld
    },
    {
      path: '/routes',
      name: 'roues',
      component: RouteLines
    },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login
    // },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: 'Login - 登录',
        hideInMenu: true
      },
      // component: () => import('@/view/login/login.vue')
      component: Login
  },     
  ],
  mode: 'history'
})

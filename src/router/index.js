import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RouteLines from '@/components/RouteLines'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/routes',
      name: 'roues',
      component: RouteLines
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }    
  ],
  mode: 'history'
})

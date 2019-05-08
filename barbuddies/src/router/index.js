import Vue from 'vue'
import Router from 'vue-router'
import LoginSignup from '@/components/LoginSignup'
import homepage from '@/components/Homepage'
import Groups from '@/components/Groups'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginSignup',
      component: LoginSignup
    },
    {
      path: '/homepage/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/groups/',
      name: 'Groups',
      component: Groups
    }
  ]
})

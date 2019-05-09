import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/Homepage'
import LoginSignup from '@/components/LoginSignup'
import groups from '@/components/GroupMainPage'

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
      component: homepage
    },
    {
      path: '/groups/',
      name: 'groups',
      component: groups
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/Homepage'
import Profile from '@/components/Profile'
import Groups from '@/components/GroupMainPage'
import LoginSignup from '@/components/LoginSignup'

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
      path: '/profile/',
      name: 'profile',
      component: Profile
    },
    {
      path: '/groups/',
      name: 'Groups',
      component: Groups
    }

  ]
})

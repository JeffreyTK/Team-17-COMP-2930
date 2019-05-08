import Vue from 'vue'
import Router from 'vue-router'
import LoginSignup from '@/components/LoginSignup'
import homepage from '@/components/Homepage'
import Groups from '@/components/GroupMainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'Landing Page',
      component: Index
    },
    {
      
=======
      name: 'LoginSignup',
      component: LoginSignup,
    },
    {
      path: '/homepage/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/groups/',
      name: 'groups',
      component: Groups
>>>>>>> fb262123b2b79f1601e57e4df9f1a244e5aa1fc7
    }
  ]
})

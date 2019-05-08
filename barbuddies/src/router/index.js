import Vue from 'vue'
import Router from 'vue-router'
import LoginSignup from '@/components/LoginSignup'
import homepage from '@/components/Homepage'
<<<<<<< HEAD
=======
import Groups from '@/components/GroupMainPage'
>>>>>>> develop

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginSignup',
<<<<<<< HEAD
      component: LoginSignup
=======
      component: LoginSignup,
>>>>>>> develop
    },
    {
      path: '/homepage/',
      name: 'homepage',
      component: homepage
<<<<<<< HEAD
=======
    },
    {
      path: '/groups/',
      name: 'groups',
      component: Groups
>>>>>>> develop
    }
  ]
})

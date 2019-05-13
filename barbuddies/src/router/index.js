import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/Homepage'
import Profile from '@/components/Profile'
import Groups from '@/components/GroupMainPage'

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
      path: '/calendar/',
      name: 'Calendar',
      component: calendar
    },
    {
      path: '/fullCalendar/',
      name: 'FullCalendar',
      component: FullCalendar
    },
    {
      path: '/groups/',
      name: 'groups',
      component: groups
    },
    {
      path: '/profile/',
      name: 'profile',
      component: Profile
    },

  ]
})

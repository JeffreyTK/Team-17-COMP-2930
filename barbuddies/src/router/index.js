import Vue from 'vue'
import Router from 'vue-router'
import LoginSignup from '@/components/LoginSignup'
import homepage from '@/components/Homepage'
import calendar from '@/components/Calendar'
import FullCalendar from '@/components/FullCalendar'
import groups from '@/components/GroupMainPage'
import Profile from '@/components/Profile'

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
      name: 'Profile',
      component: Profile
    }
  ]
})

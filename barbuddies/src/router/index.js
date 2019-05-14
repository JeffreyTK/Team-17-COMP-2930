import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/Homepage'
import Profile from '@/components/Profile'
import Groups from '@/components/GroupMainPage'
import Calendar from '@/components/Calendar'
import FullCalendar from '@/components/FullCalendar'
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
      path: '/calendar/',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/fullCalendar/',
      name: 'FullCalendar',
      component: FullCalendar
    },
    {
      path: '/groups/',
      name: 'groups',
      component: Groups
    },
    {
      path: '/profile/',
      name: 'profile',
      component: Profile
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import LoginSignup from '@/components/LoginSignup'
import homepage from '@/components/Homepage'
import Calendar from '@/components/Calendar'
import Profile from '@/components/Profile'
import FullCalendar from '@/components/FullCalendar'
import Groups from '@/components/GroupMainPage'
import AboutUs from '@/components/AboutUs'

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
      name: 'Groups',
      component: Groups
    },
    {
      path: '/profile/',
      name: 'profile',
      component: Profile
    },
    {
      path: '/AboutUs/',
      name: 'AboutUs',
      component: AboutUs
    }
  ]
})

<template>
  <div id='Calendar'>
    <br/><br/><br/><br />
    <div class="container">
      <NavBar />
      <router-link to="Homepage"><img src="../assets/back.png" id="backIcon"></router-link>
      <h1>CALENDAR</h1>
      <br />
      <FullCalendar changeView="dayGridMonth"/>
    </div>
    <br />
  </div>
</template>

<script>
/* eslint-disable */
import FullCalendar from './FullCalendar'
import NavBar from './NavBar'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'Calendar',
  components: {
    NavBar,
    FullCalendar
  },
  data: function () {
    return {
      calendarPlugins: [ // plugins must be defined in the JS
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin // needed for dateClick
      ],
      changeView: ''
    }
  }
}
</script>

<style>
#Calendar {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 0px;
  margin-left: 0px;
  font-family: "Montserrat", sans-serif;
}
img {
  width: 200px;
}
#backIcon {
  width: 30px;
  height: 30px;
  float: left;
}
</style>

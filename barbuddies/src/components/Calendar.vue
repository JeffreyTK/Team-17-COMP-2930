<template>
  <div id='Calendar'>
    <NavBar />
    <br/><br/><br/><br/>
    <div>
      <router-link to="Homepage"><img src="../assets/back.png" id="backIcon"></router-link>
      <h1>CALENDAR</h1>
    </div>
<FullCalendar changeView="dayGridMonth"/>
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  margin-left: 0px;
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

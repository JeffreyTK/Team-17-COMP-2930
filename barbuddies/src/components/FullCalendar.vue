<template>
  <div>
    <div class='demo-app'>
      <div class='demo-app-top'>
        <!-- <button @click="toggleWeekends">toggle weekends</button>
        <button @click="gotoPast">go to a date in the past</button>
        (also, click a date/time to add an event) -->
      </div>
      <FullCalendar
        class='demo-app-calendar'
        ref="fullCalendar"
        :defaultView="changeView"
        :header="{
          left: 'prev,next',
          center: 'title',
          right: 'timeGridWeek,timeGridDay'
        }"
        :plugins="calendarPlugins"
        :weekends="calendarWeekends"
        :events="calendarEvents"
        @dateClick="handleDateClick"
        />
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar'
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
export default {
  components: {
    NavBar,
    FullCalendar // make the <FullCalendar> tag available
  },
  data: function () {
    return {
      calendarPlugins: [ // plugins must be defined in the JS
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin // needed for dateClick
      ],
      calendarWeekends: true,
      calendarEvents: [ // initial event data
        { title: 'Event Now', start: new Date() }
      ],
    }
  },
  methods: {
    handleDateClick (arg) {
      if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
        this.calendarEvents.push({ // add new event data
          title: 'New Workout',
          start: arg.date,
          allDay: arg.allDay
        })
      }
    }
  },
  props: ["changeView"]
} 
        
// homepage "timeGridWeek"
// calendar "dayGridMonth"
</script>

<style lang='scss'>
@import '@fullcalendar/core/main.css';
@import '@fullcalendar/daygrid/main.css';
@import '@fullcalendar/timegrid/main.css';
.demo-app {
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 12px;
}
.demo-app-calendar {
  margin: 0 auto;
  max-width: 900px;
  height: 200px;
}
</style>
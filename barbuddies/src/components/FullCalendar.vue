<template>
  <div>
    <NavBar />
    <div class='demo-app'>
      <div class='demo-app-top'>
        <!-- <button @click="toggleWeekends">toggle weekends</button>
        <button @click="gotoPast">go to a date in the past</button>
        (also, click a date/time to add an event) -->
      </div>
      <FullCalendar
        class='demo-app-calendar'
        ref="fullCalendar"
        defaultView="timeGridWeek"
        :header="{
          left: 'prev,next',
          center: 'title',
          right: 'timeGridWeek,timeGridDay'
        }"
        :plugins="calendarPlugins"
        :weekends="calendarWeekends"
        :events="calendarEvents"
        @dateClick="handleSelect"
        @select="handleSelect"
        :selectable="true"
        :selectHelper="true"
        :schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
        :editable="true"
        :eventLimit="true"
      />
    </div>
    <b-modal
      id="my-modal"
      ref="modal"
      title="Create a Workout"
      ok-title="Submit"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
        label="Workout Name"
        label-for="workout"
        >
        <b-form-input
        id="workout"
        v-model="workout"
        required
        >
          </b-form-input>
          <b-form-group
          label="Starts at"
          label-for="start"
          >
            <date-picker
              id="start"
              v-model="date"
              :config="options"
              required
            >
            </date-picker>
              </b-form-group>
              <b-form-group
              label="Ends at"
              label-for="end"
            >
            <date-picker
              id="end"
              v-model="date1"
              :config="options">
            </date-picker>
          </b-form-group>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'
import datePicker from 'vue-bootstrap-datetimepicker'
import NavBar from './NavBar'
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import $ from 'jquery'

/* eslint-disable */

$.extend(true, $.fn.datetimepicker.defaults, {
    icons: {
      time: 'far fa-clock',
      date: 'far fa-calendar',
      up: 'fas fa-arrow-up',
      down: 'fas fa-arrow-down',
      previous: 'fas fa-chevron-left',
      next: 'fas fa-chevron-right',
      today: 'fas fa-calendar-check',
      clear: 'far fa-trash-alt',
      close: 'far fa-times-circle'
    }
});

export default {
  components: {
    NavBar,
    FullCalendar, // make the <FullCalendar> tag available
    datePicker
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
      date: new Date(),
      options: {
        format: 'DD/MM/YYYY h:mm',
        useCurrent: true
      }
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
    },
    handleSelect (arg) {
      this.$bvModal.show('my-modal')
    }
  }
  /* mounted: {
    calendarView: function () {
      if (Calendar._inactive) {
        FullCalendar.defaultView = 'timeGridWeek'
      } else {
        FullCalendar.defaultView = 'dayGridMonth'
      }
    }
  } */
}
</script>

<style lang='scss'>
//@import '@fortawesome/fontawesomefree';
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

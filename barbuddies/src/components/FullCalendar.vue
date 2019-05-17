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
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }"
        :plugins="calendarPlugins"
        :weekends="calendarWeekends"
        :events="calendarEvents"
        @dateClick="handleSelect"
        @select="handleSelect"
        :selectable="true"
        :selectHelper="true"
        schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
        :editable="true"
        :eventLimit="true"
        :eventClick="handleEventClick"
      />
    </div>
    <b-modal
      id="my-modal"
      ref="modal"
      title="Create a Workout"
      hide-footer
    >
      <form ref="form">
        <b-form-group
        label="Workout Name"
        label-for="workout"
        >
          <b-form-input
          id="workout"
          v-model="workout"
          ></b-form-input>
        </b-form-group>

        <b-form-group
        label="Starts at"
        label-for="start"
        >
          <date-picker
            ref="start-date"
            :config="options"
            v-model="date2"
          ></date-picker>
        </b-form-group>

        <b-form-group
          label="Ends at"
          label-for="end"
        >
          <date-picker
            ref="end-date"
            :config="options"
            :minDate="date2"
            v-model="date1"
          ></date-picker>
        </b-form-group>
      </form>
       <div class="modal-footer">
                <b-button data-dismiss="modal" @click="hideModal" variant="secondary">Close</b-button>
                <b-button @click="saveDate" variant="primary">Save changes</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import momentPlugin from '@fullcalendar/moment'
import '@fortawesome/fontawesome-free/css/all.css'
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.min.css'
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
      workout: '',
      date2: new Date(),
      date1: new Date(),
      calendarPlugins: [ // plugins must be defined in the JS
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin, // needed for dateClick
        momentPlugin
      ],
      calendarWeekends: true,
      calendarEvents: [ // initial event data
        { title: '', start: Date(), end: Date() }
      ],
      options: {
        useCurrent: false,
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
    },
    saveDate (arg) {
      this.$bvModal.hide('my-modal'),
      this.calendarEvents.push({
        title: this.workout,
        start: this.date2,
        end: this.date1,
      })
    },
    hideModal() {
        this.$bvModal.hide('my-modal')	
    },
  },
  props: ['changeView']
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
  max-width: 90vw;
  height: 70vh;
}
</style>

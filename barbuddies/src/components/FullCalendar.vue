<template>
  <div id='calendar'>
    <div class='demo-app'>
      <div class='demo-app-top'>
        <!-- <button @click="toggleWeekends">toggle weekends</button>
        <button @click="gotoPast">go to a date in the past</button>
        (also, click a date/time to add an event) -->
      </div>
      <FullCalendar
        class='demo-app-calendar'
        ref="fullCalendar"
        id="fullCalendar"
        :defaultView="changeView"
        :header="{
          left: 'prev',
          center: '',
          right: 'next'
        }"
        :plugins="calendarPlugins"
        :weekends="calendarWeekends"
        :events="calendarEvents"
        @dateClick="handleSelect"
        @select="handleSelect"
        @eventClick="handleEventClick"
        @eventDrop="handleEventDrop"
        :selectable="true"
        :selectHelper="true"
        schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
        :editable="true"
        :eventLimit="true"
      />
    </div>
    <b-modal
      id="my-modal"
      ref="modal"
      title="New Workout"
      hide-footer
      hide-header-close
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
        label-for="start-date"
        >
          <date-picker
            id="startDate"
            :config="options"
            v-model="date1"
          ></date-picker>
        </b-form-group>

        <b-form-group
          label="Ends at"
          label-for="end-date"
        >
          <date-picker
            id="endDate"
            :config="options"
            :minDate="date1"
            v-model="date2"
          ></date-picker>
        </b-form-group>

        <b-form-group
          label="Workout Information"
          label-for="textarea"
        >
          <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Enter a workout..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
      </form>
       <div class="modal-footer">
          <b-button data-dismiss="modal" @click="hideModal" variant="secondary">Close</b-button>
          <b-button @click="saveDate" variant="primary">Create workout</b-button>
      </div>
    </b-modal>

    <b-modal
      id="my-modal2"
      ref="modal2"
      title="Workout Details"
      hide-footer
      hide-header-close
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
          label-for="start-date"
        >
          <date-picker
            id="startDate"
            :config="options"
            v-model="date1"
          ></date-picker>
        </b-form-group>

        <b-form-group
          label="Ends at"
          label-for="end-date"
        >
          <date-picker
            id="endDate"
            :config="options"
            :minDate="date1"
            v-model="date2"
          ></date-picker>
        </b-form-group>

        <b-form-group
          label="Workout Information"
          label-for="textarea"
        >
          <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Enter a workout..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
      </form>
      <div class="modal-footer">
        <b-button @click="deleteEvent" class='text-left' id="delete" variant="danger">Delete</b-button>
        <b-button data-dismiss="modal" @click="hideModal" variant="secondary">Close</b-button>
        <b-button @click="update" variant="primary">Save changes</b-button>
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
      close: 'far fa-times-circle',
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
      index: '',
      text: '',
      workout: '',
      date1: new Date(),
      date2: new Date(),
      calendarPlugins: [ // plugins must be defined in the JS
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin, // needed for dateClick
        momentPlugin
      ],
      calendarWeekends: true,
      calendarEvent: { title: '', start: Date(), end: Date(), id: '' },
      calendarEvents: [ // initial event data
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
    handleEventDrop (arg) {
      this.date1 = arg.event.start
      this.date2 = arg.event.end
    },
    handleSelect (arg) {
      this.$bvModal.show('my-modal'),
      this.date1 = arg.start,
      this.date2 = arg.end
    },
    handleEventClick (arg) {
      this.$bvModal.show('my-modal2'),
      this.workout = arg.event.title,
      this.date1 = arg.event.start,
      this.date2 = arg.event.end,
      this.text = arg.event.id
    }, 
    deleteEvent (arg) {
      this.$bvModal.hide('my-modal2');
      let calendarApi = this.$refs.fullCalendar.getApi();   
      let event = calendarApi.getEventById(this.text);
      event.remove();
      this.calendarEvents.splice(arg, 1)
    },
    saveDate (arg) {
      this.$bvModal.hide('my-modal'),
      this.calendarEvents.push({
        title: this.workout,
        start: this.date1,
        end: this.date2,
        id: this.text
      })
    },
    hideModal() {
      this.$bvModal.hide('my-modal');
      this.$bvModal.hide('my-modal2');
      this.workout = '';
      this.text = '';
      console.log(calendarEvents);
    },
    update (arg) {
      this.$bvModal.hide('my-modal2');
      let calendarApi = this.$refs.fullCalendar.getApi();  
      let event = calendarApi.getEventById(this.text);
      event.setProp('title', this.workout);
      event.setStart(this.date1);
      event.setEnd(this.date2);
    }
  },
  props: ['changeView'],
}

// homepage "timeGridWeek"
// calendar "dayGridMonth"
</script>

<style lang='scss'>
@import '@fullcalendar/core/main.css';
@import '@fullcalendar/daygrid/main.css';
@import '@fullcalendar/timegrid/main.css';

.fc-prev-button {
  background: none;
  color: #C23A3A;
  border: none;
  font-size: 15pt;
}

.fc-prev-button:focus {
  background: none;
  color:#C23A3A;
  border: none;
  font-size: 15pt;
}

.fc-prev-button:hover{
  background: none;
  color: grey;
}

.fc-next-button {
  background: none;
  color:#C23A3A;
  border: none;
  font-size: 15pt;
}
.fc-next-button:focus {
  background: none;
  color: #C23A3A;
  border: none;
  font-size: 15pt;
}

.fc-next-button:hover{
  background: none;
  color: grey;
}

.fc-next-button:active{
  background: none;
  border: none;
}

.demo-app {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
}
.demo-app-calendar {
  margin: 0 auto;
  max-width: 90vw;
  font-family: "Montserrat", sans-serif;
}

@media only screen and (min-width: 375px) {
  .demo-app-calendar {
    width: 90vw;
  }
}
</style>

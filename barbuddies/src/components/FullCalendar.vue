<template>
  <div id='calendar'>


    <!-- 
    Future dropdown feature to be implemented 
    <div>
      <b-dropdown variant="danger" id="groupDropdown" ref="groupDropdown" :text= ddTitle class="m-md-2">
        <b-dropdown-item @click="title" v-for="(groups, index) in groups" :key="groups.id">{{group.name}}</b-dropdown-item>
      </b-dropdown>
    </div> -->

    <!-- FullCalendar div -->
    <div class='demo-app'>
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
        @dateClick="handleDateClick"
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

    <!-- Bootstrap modal pop-up on click of FullCalendar -->
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
      <!-- Buttons that hide and create event  -->
       <div class="modal-footer">
          <b-button data-dismiss="modal" @click="hideModal" variant="secondary">Close</b-button>
          <b-button @click="saveDate" variant="primary">Create workout</b-button>
      </div>
    </b-modal>

    <!-- Bootstrap modal pop-up on click of FullCalendar event -->
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
        <!-- Buttons that hide a modal, and create or delete events -->
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
import { makeEvent } from '../repository'
import $ from 'jquery'
/* eslint-disable */

// sets Datetimepicker component icons with fontawesome css
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
    FullCalendar,
    datePicker
  },
  data: function () {
    return {
      // Future dropdown menu implementation
      // ddTitle: 'My Groups',
      // groups: [
      //   {id:'1', name: 'The Bros.' },
      //   {id:'2', name: 'Mean Girls'},
      //   {id:'3', name: 'Team 17'}
      // ],
      index: '',
      text: '',
      workout: '',
      Events: [],
      userEmail: this.$session.get('email'),
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
    // Future dropdown implementation 
    // title (arg) {
    //   this.ddTitle = this.groups.name;
    //   console.log(this.ddTitle);
    // },
    handleDateClick (arg) {
      this.$bvModal.show('my-modal'),
      this.date1 = arg.date,
      this.date2 = arg.date
    },
    // Future calendar implementation
    // handleEventDrop (arg) {
    //   this.date1 = arg.event.start
    //   this.date2 = arg.event.end
    // },

    //Calendar select function to pop-up and set up event modal
    handleSelect (arg) {
      this.$bvModal.show('my-modal'),
      this.date1 = arg.start,
      this.date2 = arg.end
    },

    // Handles calendar event on click and populates modal with information
    handleEventClick (arg) {
      this.$bvModal.show('my-modal2'),
      this.workout = arg.event.title,
      this.date1 = arg.event.start,
      this.date2 = arg.event.end,
      this.text = arg.event.id
    },

    // Deletes event from calendar and array on click 
    deleteEvent (arg) {
      this.$bvModal.hide('my-modal2');
      let calendarApi = this.$refs.fullCalendar.getApi();   
      let event = calendarApi.getEventById(this.text);
      event.remove();
      this.calendarEvents.splice(arg, 1)
    },
    
    // Pushes array to calendar event objects array
    saveDate (arg) {
      this.$bvModal.hide('my-modal'),
      this.Events.push({
        title: this.workout,
        start: this.date1,
        end: this.date2,
        id: this.text
      })
    let data = {
        Events: this.Events,
        userEmail: this.userEmail
      }      
      /*
        IMPORTANT - create session storage for group name.
      */
      
      /*console.log(this.userEmail)
      makeEvent(data).then(data =>{
        this.$emit('makeEvent', data)
      }).catch(err => alert(err.message))
      */
    },

    // Hides modal on click 
    hideModal() {
      this.$bvModal.hide('my-modal');
      this.$bvModal.hide('my-modal2');
      this.workout = '';
      this.text = '';

    },

    // Updates calendar events on click
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

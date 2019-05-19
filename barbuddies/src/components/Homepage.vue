<template>
  <div id="homepage">
    <NavBar/>
    <br/><br/><br/><br/>
    <div>
      <h2>THIS WEEK</h2>
    </div>
    <FullCalendar changeView="timeGridWeek"/>
  </div>
</template>
<script>
import NavBar from './NavBar'
import FullCalendar from './FullCalendar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'Groups',
  components: {
    NavBar,
    FullCalendar
  },
  data () {
    return {
      changeView: ''
    }
  }
}
</script>
<style scoped>
#homepage {
  font-family: "Lato", sans-serif;
}
</style>

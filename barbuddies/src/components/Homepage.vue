<template>
  <div id="homepage">
    <NavBar/>
    <br/><br/><br/><br/><br/>
    <div class="container">
      <FullCalendar changeView="timeGridWeek"/>
    </div>
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

</style>

<template>
  <div class="homepage">
      <br />
      <br />
      <br />
      <br />
      <br />
      <FullCalendar />
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
  }
}
</script>
<style scoped>

</style>

<template>
  <div id="homepage">
<<<<<<< HEAD
    <Calendar/>
=======
    <NavBar />
    <calendar/>
>>>>>>> develop
  </div>
</template>

<script>
<<<<<<< HEAD
import Calendar from './Calendar'
=======
import calendar from './Calendar'
import NavBar from './NavBar'
>>>>>>> develop
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'homepage',
  components: {
    NavBar,
    calendar
  }
}
</script>

<style>
#homepage {
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
</style>

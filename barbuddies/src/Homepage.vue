<template>
  <div id="homepage">
    <img src="./assets/bb_logo.png">
    <Calendar/>
  </div>
</template>

<script>
import Calendar from './components/Calendar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'Homepage',
  components: {
    Calendar
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

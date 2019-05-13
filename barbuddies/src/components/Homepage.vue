<template>
  <div id="homepage">
    <NavBar />
    <Calendar/>
    <EasterEgg video-id="BBJa32lCaaY"/>
  </div>
</template>

<script>

/* eslint-disable */
import Calendar from './Calendar'
import NavBar from './NavBar'
import EasterEgg from './EasterEgg'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'homepage',
  components: {
    NavBar,
    Calendar,
    EasterEgg
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

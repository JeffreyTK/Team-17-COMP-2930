<template>
  <div id="app">
    <img id ="logo" src="./assets/bb_logo.png">
    <ImageSlider/>
    <Calendar/>
    <LoginSignup/>
    <router-view></router-view>
  </div>
</template>

<script>
import ImageSlider from './components/ImageSlider'
import LoginSignup from './components/LoginSignup'
import Calendar from './components/Calendar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components: {
    ImageSlider,
    LoginSignup,
    Calendar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  margin-left: 0px;
}
#logo {
  width: 300px;
}
</style>

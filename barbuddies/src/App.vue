<template>
  <div id="app">
    <ImageSlider/>
    <Calendar/>
    <LoginSignup/>
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
  },
  methods: {
    createUser (user) {
      this.user = [user, ...this.user]
    }
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
img {
  width: 200px;
}
</style>

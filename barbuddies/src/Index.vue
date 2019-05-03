<template>
  <div id="app">
    <img src="./assets/bb_logo.png">
    <ImageSlider/>
    <LoginSignup/>
  </div>
</template>

<script>
import ImageSlider from './components/ImageSlider'
import LoginSignup from './components/LoginSignup'

export default {
  name: 'App',
  components: {
    ImageSlider,
    LoginSignup
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

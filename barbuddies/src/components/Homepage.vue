<template>
  <div id="homepage">
    <NavBar/>
    <br/>
    <FullCalendar/>
  </div>
</template>

<script>

/* eslint-disable */
import FullCalendar from './FullCalendar'
import NavBar from './NavBar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


export default {
  name: 'Homepage',
  components: {
    NavBar,
    FullCalendar
  }
}

</script>

<style scoped>
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
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
  font-family: "Montserrat", sans-serif;
  margin-bottom: 220px;
}

@media screen and (max-width: 1440px) {
  #homepage {
    margin-bottom: 40px;
  }
}

@media screen and (max-width: 768px) {
  #homepage {
    margin-bottom: -40px;
  }
}

@media screen and (max-width: 698px) {
  #homepage {
    margin-bottom: -30px;
  }
}

@media screen and (max-width: 620px) {
  #homepage {
    margin-bottom: 0px;
  }
}

@media (max-width: 425px) {
  #homepage {
    margin-bottom: 150px;
  }
}

@media (max-width: 425px) {
  #homepage {
    margin-bottom: 200px;
  }
}

@media screen and (max-width: 375px) {
  #Calendar {
    margin-bottom: 25%;
  }
}

@media screen and (max-width: 320px) {
  #Calendar {
    margin-bottom: 40%;
  }
}
</style>

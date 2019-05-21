<template>
  <div id="app">
    <router-view></router-view>
    <br />
    <footer>
      <b-button id="btn" v-b-modal.modal-100 size="sm" variant="custom">BarBuddies is unoffically owned by Team 17, Team Moto Moto</b-button>
      <b-modal id="modal-100" title="Bar Buddies" ok-title="Login" hide-footer>
        <iframe src="https://vlipsy.com/embed/NVUkq5IE" width="100%" height="100%" frameborder="0"></iframe>
      </b-modal>
    </footer>
  </div>
</template>

<script>
import LoginSignup from './components/LoginSignup'
import homepage from './components/Homepage'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components: {
    LoginSignup,
    homepage
  },
  methods: {
    // creates the method createUser that actually creates a brand new user
    createUser (user) {
      this.user = [user, ...this.user]
    },
    createGroup (group) {
      this.group = [group, ...this.group]
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
footer {
  font-size: 5px;
  float: bottom;
  margin-top: 5px;
}
#btn {
  font-size: 10px;
}
</style>

<template>
  <div id='logout'>
    <img src="../assets/bb_logo.png" id="logo">
    <div>
      <b-spinner label="Loading..." variant="warning"></b-spinner>
    </div>
    <br/>
    <img src="../assets/MotoMoto2.jpg">
    <br/><br/><br/>
    <h4>Moto Moto<br/>hopes you had a<br/>good workout</h4>
  </div>
</template>

<script>
import NavBar from './NavBar'
import { setTimeout } from 'timers'
export default {
  components: {
    NavBar
  },
  mounted () {
    this.$session.destroy()
    console.log('logged out')
    setTimeout(() => {
      this.flash('Logout Successful!', 'success', {
        timeout: 1500
      })
      this.$router.push({path: '/'})
    }, 2000)
  }
}
</script>

<style scoped>
</style>

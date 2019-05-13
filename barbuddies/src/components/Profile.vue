<template>
  <div>
    <NavBar />
    <div class="profile">
      <br/>
      <img id="avatar" src="../assets/coop.png">
      <h2>Testing</h2>
      <h3>testing@email.mctest</h3>
      <br/>
      <br/>
      <label>DOB</label><input style="text">
      <br/>
      <label>Gender</label><input style="text">
      <br/>
      <label>Weight</label><input style="number">
      <br/>
      <label>Height</label><input style="number">
      <br/>
      <label>Password</label><input type="password">
      <br/>
      <button v-on:click="save">Save</button>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar'
export default {
  name: 'Profile',
  components: {
    NavBar
  },
  methods: {
    save: function () {
    }
  }
}
</script>

<style scoped>
  #avatar {
    width: 90px;
    height: 90px;
  }
</style>

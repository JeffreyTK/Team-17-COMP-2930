<template>
  <div>
    <NavBar />
    <br/><br/><br/>
    <div class="profile">
      <br/>
      <img id="avatar" src="../assets/coop.png">
      <h2>Testing</h2>
      <h3>testing@email.mctest</h3>
      <br/>
      <br/>
      <div class="container">
        <label>DOB:</label><input style="text">
        <br/>
        <label>Gender:</label><input style="text">
        <br/>
        <label>Weight:</label><input style="number">
        <br/>
        <label>Height:</label><input style="number">
        <br/>
        <label>Password:</label><input type="password">
        <br/>
        <button v-on:click="save">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar'
export default {
  name: 'Profile',
  components: {
    NavBar
  }
}
</script>

<style scoped>
  #avatar {
    width: 90px;
    height: 90px;
  }
  input {
    border: 1px solid rgb(131, 131, 131);
  }
</style>

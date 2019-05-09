<template>
  <div>
    <NavBar />
    <div class="profile">
      <br/>
      <img id="avatar" src="../assets/coop.png">
      <h2>{{fullName}}</h2>
      <h3>{{user.email}}</h3>
      <br/>
      <br/>
      <label>DOB</label><input style="text" v-model="user.birthdate">
      <br/>
      <label>Gender</label><input style="text" v-model="user.gender">
      <br/>
      <label>Weight</label><input style="number" v-model="user.weight">
      <br/>
      <label>Height</label><input style="number" v-model="user.height">
      <br/>
      <label>Password</label><input type="password" v-model="user.password">
      <br/>
      <button v-on:click="save">Save</button>
    </div>
  </div>
</template>

<script>
import NavBar from './Navbar'
export default {
  name: 'Profile',
  components: {
    NavBar
  },
  data() {
    return {
      user: {
          firstName: 'Gina',
          lastName: 'Kim',
          email: 'gina.kim@bcit.ca',
          birthdate: '12/30/1994',
          gender: 'Female',
          weight: '45',
          height: '175',
          password: '0000'
      },
    }
  },
  methods: {
    save: function() {

    }
  },
  computed: {
    fullName: function() {
      return this.user.firstName+" "+this.user.lastName;
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
<template>
  <div>
    <NavBar />
    <br/><br/><br/>
    <div class="profile">
      <br /><br /><br /><br /><br />
      <img id="avatar" src="../assets/coop.png">
      <h2>{{firstName}}</h2>
      <h3>{{email}}</h3>
      <br/>
      <br/>
      <label>DOB: </label><input style="text"  :value= 'DOB'>
      <br/>
      <label>Gender: </label><input style="text" :value = 'Gender'>
      <br/>
      <label>Weight: </label><input style="number" :value = 'weight'>
      <br/>
      <label>Height: </label><input style="number" :value = 'height'>
      <br/>
      <label>Password: </label><input type="password" :value = 'password'>
      <br/>
      <button v-on:click="save">Save</button>
    </div>
  </div>
</template>

<script>
import { updateUser } from '../repository'
import NavBar from './NavBar'
export default {
  name: 'Profile',

  components: {
    NavBar
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      DOB: '',
      gender: '',
      weight: '',
      height: '',
      email: '',
      password: '',
      userID: '',
      groupID: ''
    }
  },
  methods: {
    save: function () {
      updateUserProfile(id).then((data) => {
        data.DOB = this.DOB,
        data.gender = this.Gender,
        data.weight = this.weight,
        data.height = this.height,
        data.password = this.password
      })
    }
  },
  mounted () {
    let id = '5cdb23cecb38bb9baed28ac2'
    updateUser(id).then((data) => {
      this.firstName = data.firstName,
      this.email = data.email,
      this.DOB = data.DOB
      this.Gender = data.gender,
      this.weight = data.weight,
      this.height = data.height,
      this.email = data.email,
      this.password = data.password
    })
  }
}
</script>

<template>
  <div>
    <NavBar/>
    <br/><br/><br/>
    <div class="profile">
      <div class="container">
        <br /><br /><br />
          <router-link to="Homepage"><img src="../assets/back.png" id="backIcon"></router-link>
          <h1>PROFILE</h1>
        </div>
      <br />
      <img id="avatar" src="../assets/profileImg.png" class="rounded-circle">
      <br /><br />
      <h2>{{firstName}}</h2>
      <h3>{{email}}</h3>
      <br/>
      <br/>
      <form>
        <div class="form-group row">
          <label for="dob" class="col-sm-2 col-md-6 col-form-label">Date of Birth</label>
          <div class="col-sm-2 col-md-3">
            <input type="date" class="form-control" v-model = "DOB" id="dob" placeholder="Date of Birth">
          </div>
        </div>
        <div class="form-group row">
          <label for="gender" class="col-sm-2 col-md-6 col-form-label">Gender</label>
          <div class="col-sm-2 col-md-3">
            <select class="custom-select mr-sm-2" v-model = 'gender' id="inlineFormCustomSelect">
              <option selected>Choose</option>
              <option value="1">Female</option>
              <option value="2">Male</option>
              <option value="3">Non-Binary</option>
              <option value="4">Prefer Not to Disclose</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="weight" class="col-sm-2 col-md-6 col-form-label">Weight (lbs)</label>
          <div class="col-sm-2 col-md-3">
            <input type="number" class="form-control" v-model = 'weight' id="weight" placeholder="Weight" min="0" max="1000">
          </div>
        </div>
        <div class="form-group row">
          <label for="height" class="col-sm-2 col-md-6 col-form-label">Height</label>
          <div class="col-sm-2 col-md-3">
            <input type="number" class="form-control" v-model = 'height' id="height" placeholder="Height" min="0" max="1000">
          </div>
        </div>
        <div class="form-group row">
          <label for="password" class="col-sm-2 col-md-6 col-form-label">Password</label>
          <div class="col-sm-2 col-md-3">
            <input type="password" class="form-control" v-model = 'password' id="password" placeholder="Change Password">
          </div>
        </div>
        <br />
        <b-button variant="outline-dark" v-on:click="save">Save</b-button>
      </form>
    </div>
  </div>

</template>
<script>
/* eslint-disable */
import { updateUser } from '../repository'
import { updateUser1 } from '../repository'
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
  props: ['user'],
  methods: {
    save(){
      let data = {
        DOB: this.DOB,
        gender: this.gender,
        weight: this.weight,
        height: this.height,
        email: this.email,
        password: this.password
      }
      console.log(data)
      let id = this.$session.get('id')
      console.log(id)
      updateUser1(data, id)
        .then(data => {
          this.$emit('updateUser1', data.user);
          console.log('updated user');
        })
        .catch(err => alert(err.message));
    },
  },
  mounted () {
      this.firstName = this.$session.get('firstName')
      this.email = this.$session.get('email')
      this.DOB = this.$session.get('DOB')
      this.Gender = this.$session.get('gender')
      this.weight = this.$session.get('weight')
      this.height = this.$session.get('height')
      this.password = this.$session.get('password')
  }
}
</script>
<style>
  #backIcon {
    width: 30px;
    height: 30px;
    float: left;
  }
  .profile {
    font-family: "Montserrat", sans-serif;
    margin: 10px;
  }
</style>

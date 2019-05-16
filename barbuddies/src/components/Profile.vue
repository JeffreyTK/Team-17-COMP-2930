<template>
  <div>
    <NavBar/>
    <br/><br/><br/>
    <div class="profile">
      <br />
      <img id="avatar" src="https://dummyimage.com/200x200/000/fff" class="rounded-circle">
      <h2>{{firstName}}</h2>
      <h3>{{email}}</h3>
      <br/>
      <br/>
      <form>
        <div class="form-group row">
          <label for="dob" class="col-sm-2 col-form-label">Date of Birth</label>
          <div class="col-sm-2">
            <input type="date" class="form-control" id="dob" placeholder="Date of Birth">
          </div>
        </div>
        <div class="form-group row">
          <label for="gender" class="col-sm-2 col-form-label">Gender</label>
          <div class="col-sm-2">
            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
              <option selected>Choose</option>
              <option value="1">Female</option>
              <option value="2">Male</option>
              <option value="3">Non-Binary</option>
              <option value="4">Prefer Not to Disclose</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="weight" class="col-sm-2 col-form-label">Weight (lbs)</label>
          <div class="col-sm-2">
            <input type="number" class="form-control" id="weight" placeholder="Weight" min="0" max="1000">
          </div>
        </div>
        <div class="form-group row">
          <label for="height" class="col-sm-2 col-form-label">Height</label>
          <div class="col-sm-2">
            <input type="number" class="form-control" id="height" placeholder="Height" min="0" max="1000">
          </div>
        </div>
        <div class="form-group row">
          <label for="password" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-2">
            <input type="password" class="form-control" id="dob" placeholder="Change Password">
          </div>
        </div>
        <br />
        <b-button variant="outline-dark" v-on:click="save">Save</b-button>
      </form>
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
    /* save: function () {
      updateUserProfile(id).then((data) => {
        data.DOB = this.DOB
        data.gender = this.Gender
        data.weight = this.weight
        data.height = this.height
        data.password = this.password
      })
    } */
  },
  mounted () {
    let id = '5cdb23cecb38bb9baed28ac2'
    updateUser(id).then((data) => {
      this.firstName = data.firstName
      this.email = data.email
      this.DOB = data.DOB
      this.Gender = data.gender
      this.weight = data.weight
      this.height = data.height
      this.email = data.email
      this.password = data.password
    })
  }
}

</script>

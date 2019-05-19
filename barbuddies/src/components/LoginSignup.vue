<template>
  <div>
    <flash-message class="customClass"></flash-message>
    <img src="../assets/bb_logo.png" id="logo">
    <ImageSlider />
    <br /><br />
    <div id="LoginSignup" class="container">
      <div id="login" class="row">
        <div class="col">
        <b-button v-b-modal.modal-1 size="lg" id="loginBtn">Login</b-button>
        <b-modal id="modal-1" title="Login" ok-title="Login" hide-footer>
            <form>
              <div class="form-group row">
                <label for="email" class="col-sm-5 col-xs-5 col-form-label">Email</label>
                <div class="col-sm-5 col-xs-5">
                  <input type="text" class="form-control" id="email" placeholder="Email">
                </div>
              </div>
              <div class="form-group row">
                <label for="password" class="col-sm-5 col-xs-5 col-form-label">Password</label>
                <div class="col-sm-5 col-xs-5">
                  <input type="text" class="form-control" id="passsword" placeholder="Password">
                </div>
              </div>
            </form>
            <br />
            <router-link to="homepage"><a href = ''>Login</a></router-link>
        </b-modal>
        </div>
      <div id="signup" class="col">
        <b-button v-b-modal.modal-2 size="lg" id="signupBtn">Signup</b-button>
          <b-modal id="modal-2" title="Sign Up" hide-footer>
            <form>
              <div class="form-group row">
                <label for="firstName" class="col-sm-5 col-xs-5 col-form-label">First Name</label>
                <div class="col-sm-5 col-xs-5">
                  <input type="text" class="form-control" v-model = "firstName" id="firstName" placeholder="First Name">
                </div>
              </div>
              <div class="form-group row">
                <label for="lastName" class="col-sm-5 col-xs-5 col-form-label">Last Name</label>
                <div class="col-sm-5 col-xs-5">
                  <input type="text" class="form-control" v-model = "lastName" id="lastName" placeholder="Last Name">
                </div>
              </div>
              <div class="form-group row">
                <label for="email" class="col-sm-5 col-xs-5 col-form-label">Email</label>
                <div class="col-sm-5 col-xs-5">
                  <input type="email" class="form-control" v-model = "email" id="email" placeholder="Email">
                </div>
              </div>
              <div class="form-group row">
                <label for="dob" class="col-sm-5 col-xs-5 col-form-label">Date of Birth</label>
                <div class="col-sm-5 col-xs-5">
                  <input type="date" class="form-control" v-model = "DOB" placeholder="Date Of Birth">
                </div>
              </div>
              <div class="form-group row">
                <label for="gender" class="col-sm-5 col-form-label" >Gender</label>
                <div class="col-sm-5">
                  <select class="custom-select mr-sm-2" v-model = "gender"  id="inlineFormCustomSelect">
                    <option selected>Choose</option>
                    <option value="1">Female</option>
                    <option value="2">Male</option>
                    <option value="3">Non-Binary</option>
                    <option value="4">Prefer Not to Disclose</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label for="weight" class="col-sm-5 col-form-label">Weight (lbs)</label>
                <div class="col-sm-5">
                  <input type="number" class="form-control" v-model = "weight" id="weight" placeholder="Weight" min="0" max="1000">
                </div>
              </div>
              <div class="form-group row">
                <label for="height" class="col-sm-5 col-form-label">Height</label>
                <div class="col-sm-5">
                  <input type="number" class="form-control" v-model = "height" id="height" placeholder="Height" min="0" max="1000">
                </div>
              </div>
              <div class="form-group row">
                <label for="password" class="col-sm-5 col-xs-5 col-form-label">Password</label>
                <div class="col-sm-5 col-xs-5">
                  <input type="password" class="form-control" id="firstName" placeholder="Password">
                </div>
              </div>
              <div class="form-group row">
                <label for="password" class="col-sm-5 col-form-label">Confirm Password</label>
                <div class="col-sm-5">
                <input type="password" class="form-control" v-model = "password" id="dob" placeholder="Password">
                </div>
              </div>
              <br />
              <router-link to = "homepage"><a @click = "onClick" href = ''>Signup</a></router-link>
            </form>
        </b-modal>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// importing the createuser function from repository into this file
// import router from "../router"
// import axios from "axios"
import { createUser } from '../repository'
import ImageSlider from './ImageSlider'
console.log('starting script')
export default {
  name: 'LoginSignup',
  components: {
    ImageSlider
  },
  // data function to instantiate the data schema without any informtion
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
      showAlert: false
    }
  },
  methods: {
    onClick: function () {
      console.log('function started')
      // setting the data so that it pulls the information from the sign up sheet
      let data = {
        // this.firstName the this means that the firstname on THIS page
        firstName: this.firstName,
        lastName: this.lastName,
        DOB: this.DOB,
        gender: this.gender,
        weight: this.weight,
        height: this.height,
        email: this.email,
        password: this.password,
        userID: 0,
        groupID: 0
      }
      // pasting the data created user into the create user function which create an object
      createUser(data)
        .then(data => {
          console.log('data is sent')
          // pushes the change up to the parent from child
          this.$emit('createUser', data.user)
          console.log('created user')
        })
        .catch(err => alert(err.message))
    }
  }
}
</script>
<style scoped>
  input {
    border: solid grey 1px;
  }
  #loginBtn {
    width: 100%;
  }
  #signupBtn {
    width: 100%;
  }
  #logo {
    padding: 0;
    height: 150px;
  }
  .inputs {
    margin: 2%;
  }

</style>

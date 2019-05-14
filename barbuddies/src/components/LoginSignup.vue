<template>
  <div>
    <img src="../assets/bb_logo.png" id="logo">
    <ImageSlider />
    <br /><br /><br />
    <div id="LoginSignup" class="container">
      <div id="login" class="row">
        <div class="col">
        <b-button v-b-modal.modal-1 size="lg" id="loginBtn">Login</b-button>
        <b-modal id="modal-1" title="Bar Buddies" ok-title="Login" hide-footer>
          <p class="my-4">Login</p>
            <input  placeholder="Email">
            <input type="password" placeholder="Password">
            <router-link to="homepage">Login</router-link>
        </b-modal>
        </div>

      <div id="signup" class="col">
        <b-button v-b-modal.modal-2 size="lg" id="signupBtn">Signup</b-button>
          <b-modal id="modal-2" title="Bar Buddies" hide-footer>
          <p class="my-4">Sign-up</p>
            <input v-model = "firstName" placeholder="First Name">
            <input v-model = "lastName" placeholder="Last Name">
            <input v-model = "email"  placeholder="Email">
            <input v-model = "password"  placeholder="Password">
            <input v-model = "DOB"  placeholder="Date Of Birth">
            <input v-model = "gender"  placeholder="Gender">
            <input v-model = "height"  placeholder="Height">
            <input v-model = "weight"  placeholder="Weight">
            <input type="password" placeholder="Confirm Password">
            <router-link to = "homepage"><a @click = "onClick" href = ''>Signup</a></router-link>
        </b-modal>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// importing the createuser function from repository into this file
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
      password: ''
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
      console.log('created user')
      // pasting the data created user into the create user function which create an object
      createUser(data)
        .then(data => {
          console.log('data is sent')
          // pushes the change up to the parent from child
          this.$emit('createUser', data.user)
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
</style>

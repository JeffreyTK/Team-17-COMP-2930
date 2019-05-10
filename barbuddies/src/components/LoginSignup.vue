<template>
  <div>
    <img src="../assets/bb_logo.png">
    <ImageSlider />
    <div id="LoginSignup" class="container">
      <div id="login" class="d-flex justify-content-center">
        <b-button v-b-modal.modal-1>Login</b-button>

        <b-modal id="modal-1" title="Bar Buddies" ok-title="Login" hide-footer="true">
          <p class="my-4">Login</p>
            <input  placeholder="Email">
            <input type="password" placeholder="Password">
            <router-link to="homepage">Login</router-link>
        </b-modal>

      <div id="signup">
      <b-button v-b-modal.modal-2>Signup</b-button>
          <b-modal id="modal-2" title="Bar Buddies" hide-footer="true">
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
            <br />
            <router-link to="homepage"><a @click = "onClick">Signup</a></router-link>>
        </b-modal>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import { createUser } from '../repository'
import ImageSlider from './ImageSlider'
console.log('starting script')
export default {
  name: 'LoginSignup',
  components: {
    ImageSlider
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
      userID: 0,
      groupID: 0
    }
  },
  methods: {
    onClick: function () {
      console.log('function started')
      let data = {
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
      createUser(data)
        .then(data => {
          console.log('data is sent')
          this.$emit('createUser', data.user)
        })
        .catch(err => alert(err.message))
    }
  }
}
</script>
<style scoped>
  #LoginSignup {
    position: absolute;
    bottom: 0px;
    text-align: center;
    margin-bottom: 20%;
  }
  /*#signup {
    position:
  }*/
  input {
    border: solid grey 1px;
  }
</style>

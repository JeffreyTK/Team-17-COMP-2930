<template>
  <div>
    <ImageSlider />
    <div id="LoginSignup">
      <div id="login">
        <b-button v-b-modal.modal-1>Login</b-button>
<<<<<<< HEAD

        <b-modal id="modal-1" title="Bar Buddies" ok-title="Login">
          <p class="my-4">Login</p>
            <input  placeholder="Email">
            <input type="password" placeholder="Password">
=======
        

        <b-modal id="modal-1" title="Bar Buddies" ok-title="Login" hide-footer="true">
          <p class="my-4">Login</p>
            <input type="text" placeholder="Email">
            <input type="password" placeholder="Password">
            <router-link to="homepage">Login</router-link>
>>>>>>> develop
        </b-modal>

      <div id="signup">
      <b-button v-b-modal.modal-2 @click = "onClick" >Signup</b-button>
          <b-modal id="modal-2" title="Bar Buddies" ok-title="Signup">
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
        </b-modal>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import { createUser } from '../repository'
import ImageSlider from './ImageSlider'
<<<<<<< HEAD
console.log('starting script')
=======
>>>>>>> develop
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
      password: ''
    }
  },
  methods: {
    onClick: function () {
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
  }
  /*#signup {
    position:
  }*/
  input {
    border: solid grey 1px;
  }
</style>

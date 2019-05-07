<template>
  <div id="LoginSignup">
    <div id="login">
      <b-button v-b-modal.modal-1>Login</b-button>

      <b-modal id="modal-1" title="Bar Buddies" ok-title="Login">
        <p class="my-4">Login</p>
          <input  placeholder="Email">
          <input type="password" placeholder="Password">
      </b-modal>

    <div id="signup">
    <b-button v-b-modal.modal-2>Signup</b-button>
        <b-modal @click = "onClick" id="modal-2" title="Bar Buddies" ok-title="Signup">
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
</template>
<script>
import { createUser } from '../repository'
console.log('starting script')
export default {
  name: 'LoginSignup',
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

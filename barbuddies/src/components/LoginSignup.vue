<template>
  <div>
    <ImageSlider />
    <div id="LoginSignup">
      <div id="login">
        <b-button v-b-modal.modal-1>Login</b-button>
        <b-modal id="modal-1" title="Bar Buddies" ok-title="Login" hide-footer="true">
          <p class="my-4">Login</p>
            <input type="text" placeholder="Email">
            <input type="password" placeholder="Password">
            <router-link to="homepage">Login</router-link>
        </b-modal>

    <div id="signup">
    <b-button @click="onClick">Signup</b-button>

        <b-modal id="modal-2" title="Bar Buddies" ok-title="Signup">
        <p class="my-4">Sign-up</p>
          <input v-model = "firstName" type="text" placeholder="First Name">
          <input v-model = "lastName" type="text" placeholder="Last Name">
          <input v-model = "email" type="text" placeholder="Email">
          <input v-model = "DOB" type="text" placeholder="Date Of Birth">
          <input v-model = "gender" type="text" placeholder="Gender">
          <input v-model = "height" type="text" placeholder="Height">
          <input v-model = "weight" type="text" placeholder="Weight">
          <input v-model = "password" type="password" placeholder="Password">
          <input type="password" placeholder="Confirm Password">
      </b-modal>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import { createUser } from '../repository'
import ImageSlider from './ImageSlider'
export default {
  name: 'LoginSignup',
  components: {
    ImageSlider
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

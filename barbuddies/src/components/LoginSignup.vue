<template>
  <div id="LoginSignup">
    <div id="login">
      <b-button v-b-modal.modal-1>Login</b-button>

      <b-modal id="modal-1" title="Bar Buddies" ok-title="Login">
        <p class="my-4">Login</p>
          <input type="text" placeholder="Email">
          <input type="password" placeholder="Password">
      </b-modal>

    <div id="signup">
    <b-button v-b-modal.modal-2>Signup</b-button>

        <b-modal id="modal-2" title="Bar Buddies" ok-title="Signup">
        <p class="my-4">Sign-up</p>
          <input type="text" placeholder="First Name"> 
          <input type="text" placeholder="Last Name">
          <input type="text" placeholder="Email">
          <input type="password" placeholder="Password">
          <input type="password" placeholder="Confirm Password">
      </b-modal>
      
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginSignup'
}
</script>
<style scoped>
  #LoginSignup {
    position: absolute;
    bottom: 0px;
    text-align: center;
  }
  #signup {
    position: 
  }
  input {
    border: solid grey 1px;
  }
</style>

<template>
  <div id="LoginSignup">
    <div id="login">
      <p>fucc</p>
      <p>fucc ME</p>
      <b-button v-b-modal.modal-1>Login</b-button>

      <b-modal id="modal-1" title="BootstrapVue" ok-variant="submit">
        <p class="my-4">Hello from modal!</p>
        <form>
          <label>Type something</label><input type="text">
        </form>
      </b-modal>

    <div id="signup">
    <b-button v-b-modal.modal-1>Signup</b-button>

        <b-modal id="modal-1" title="BootstrapVue" ok-variant="submit">
          <p class="my-4">Hello from modal!</p>
          <form>
            <label>Type something</label><input type="text">
          </form>
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

</style>

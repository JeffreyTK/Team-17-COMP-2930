<template>
  <div>
    <div>
    <b-button v-b-modal.modal-1>Launch demo modal</b-button>

    <b-modal id="modal-1" title="BootstrapVue" ok-variant="submit">
      <p class="my-4">Hello from modal!</p>
      <form>
        <label>Type something</label><input type="text">
      </form>
    </b-modal>

</div>
    <a href="">Signup</a>
  </div>
</template>
<script>
export default {
  name: 'LoginSignup'
}
</script>
<style scoped>
  div {
    position: absolute;
    bottom: 0px;
  }
</style>

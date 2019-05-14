
<template>
  <div class="GroupMainPage">
      <NavBar/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="container">
        <div>
          <router-link to="Homepage"><img src="../assets/back.png" id="backIcon"></router-link>
          <h1>GROUPS</h1>
        </div>
        <br />
        <br />
        <div class="jumbotron" id="group1">
          <a href="#"><h1>Group 1</h1></a>
            <div>
              <a href="#" class="float-right">
                <h3 id="numOfPpl">3
                  <img src="../assets/groupicon.png" class="groupicon" alt="group icon">
                </h3>
              </a>
            </div>
          </div>
          <div class="jumbotron" id="group2">
            <a href="#"><h1>Group 2</h1></a>
            <div>
            <a href="#" class="float-right">
              <h3 id="numOfPpl">3
                <img src="../assets/groupicon.png" class="groupicon" alt="group icon">
              </h3>
            </a>
            </div>
          </div>
          <div>
            <b-button v-b-modal.modal-1 class="addBtn">+</b-button>
            <b-modal id="modal-1" title="New Group">
              <form>
                <input v-model = "name" placeholder="Group Name">
                <br />
                <input v-model = "email" placeholder="Email">
                <br />
                <div id="form"></div>
                <b-button v-b-modal.modal-1 v-on:click="addEmail()">Add New Email</b-button>
              </form>
            </b-modal>
          </div>
      </div>
  </div>
</template>
<script>
import NavBar from './NavBar'
export default {
  name: 'Groups',
  components: {
    NavBar
  },
  methods: {
    addEmail: function add () {
      var newInput = document.createElement('input')
      newInput.setAttribute('v-model', 'email')
      newInput.setAttribute('placeholder', 'Email')
      document.getElementById('form').appendChild(newInput)
      var break1 = document.createElement('br')
      document.getElementById('form').appendChild(break1)
    }
  }
}
</script>
<style scoped>

    a h1 {
        color: black;
    }
    a h1:hover {
        color: gray;
    }
    a:hover {
        text-decoration: none;
    }

    .groupicon {
        height: 30px;
        width: 40px;
        margin-left: 10px;
    }

    .addBtn {
      border-radius: 50%;
      background: #e8e8e8;
      border-color: #e8e8e8;
      color: black;
    }

    .addBtn:hover {
      background: grey;
    }

    #backIcon {
      width: 30px;
      height: 30px;
      float: left;
    }

</style>

<template>
  <div class="GroupMainPage">
      <NavBar/>
      <br /><br /><br /><br /><br /><br />
      <div class="container">
        <div>
          <router-link to="Homepage"><img src="../assets/back.png" id="backIcon"></router-link>
          <h1>GROUPS</h1>
        </div>
        <br />
        <br />
        <div class="jumbotron" id="group1">
          <b-button v-b-modal.modal-1 class="selectGroup" variant="outline-secondary"><h1>Mean Girls</h1></b-button>
          <b-modal id="modal-1" title="Group Name" hide-footer>
            <p class="member1">Luke Hansen</p>
            <p class="member2">Jethro Del Rosario</p>
            <p class="you">Gina Kim</p>
            <div id="addMember" class="col">
            <b-button v-b-modal.modal-5 class="addBtn">+</b-button>
            <b-modal id="modal-5" title="New Group" hide-footer>
                <input type="email" placeholder = "Email" class="inputs">
                <br /><br /><br />
                <router-link to="groups">Add</router-link>
            </b-modal>
            </div>
          </b-modal>
            <div>
              <a href="#" class="float-right">
                <h3 id="numOfPpl">3
                  <img src="../assets/groupicon.png" class="groupicon" alt="group icon">
                </h3>
              </a>
            </div>
          </div>
          <div class="jumbotron" id="group2">
              <b-button v-b-modal.modal-2 class="selectGroup" variant="outline-secondary"><h1>Moto Moto</h1></b-button>
              <b-modal id="modal-2" title="Group Name" hide-footer>
                <p class="member1">Jeffrey Kuo</p>
                <p class="member2">Irene Hsieh</p>
                <p class="you">Gina Kim</p>
                <div id="addMember" class="col">
                <b-button v-b-modal.modal-6 class="addBtn">+</b-button>
                <b-modal id="modal-6" title="New Group" hide-footer>
                  <input type="email" placeholder = "Email" class="inputs">
                  <br /><br /><br />
                  <router-link to="groups">Add</router-link>
                </b-modal>
                </div>
             </b-modal>
            <div>
            <a href="#" class="float-right">
              <h3 id="numOfPpl">3
                <img src="../assets/groupicon.png" class="groupicon" alt="group icon">
              </h3>
            </a>
            </div>
          </div>
          <div id="add" class="col">
            <b-button v-b-modal.modal-3 class="addBtn">+</b-button>
            <b-modal id="modal-3" title="New Group" hide-footer>
                <input type="text" placeholder = "GroupName" class="inputs">
                <br />
                <input type="email" placeholder = "Email" class="inputs">
                <br />
                <div id="form">
                </div>
                <br />
                <b-button v-b-modal.modal-4 v-on:click="addEmail()">Add New Email</b-button>
                <br /><br /><br />
                <router-link to="groups">Submit</router-link>
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
      newInput.setAttribute('type', 'email')
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

    .inputs {
      margin: 2%;
    }

    #modal-2 {
      background-image: none;
    }

</style>

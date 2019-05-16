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
          <div id="add" class="col">
            <b-button v-b-modal.modal-1 class="addBtn">+</b-button>
            <b-modal id="modal-1" title="New Group" hide-footer>
                <input type="text" v-model = "groupName" class="inputs">
                <br />
                <input type="email" v-model = "GroupID" class="inputs">
                <br />
                <div id="form">
                </div>
                <br />
                <b-button v-b-modal.modal-1 v-on:click="addEmail()">Add New Email</b-button>
                <br /><br /><br />
                <router-link to="groups"><a @click = "onClick" href = ''>Submit</a></router-link>
            </b-modal>
          </div>
      </div>
  </div>
</template>
<script>
import NavBar from './NavBar'
import { createGroup } from '../repository'
export default {
  name: 'Groups',
  components: {
    NavBar
  },
  data () {
    return {
      groupName: '',
      GroupID: '',
      UserID: ''
    }
  },
  methods: {
    addEmail: function add () {
      var newInput = document.createElement('input')
      newInput.setAttribute('type', 'email')
      newInput.setAttribute('v-model', 'Email')
      document.getElementById('form').appendChild(newInput)
      var break1 = document.createElement('br')
      document.getElementById('form').appendChild(break1)
    },
    onClick: function () {
      console.log('function started')
      // setting the data so that it pulls the information from the sign up sheet
      let data = {
        groupName : this.groupName,
        GroupID: this.GroupID
      }
      console.log(data)
      // pasting the data created user into the create user function which create an object
      createGroup(data)
        .then(data => {
          console.log('data is sent')
          // pushes the change up to the parent from child
          this.$emit('createGroup', data.group)
          console.log('created group')
        })
        .catch(err => alert(err.message))
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

</style>

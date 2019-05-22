<template>
  <div class="GroupMainPage">
      <NavBar/>
      <br /><br /><br /><br />
      <div class="container">
        <div>
          <router-link to="Homepage"><img src="../assets/back.png" id="backIcon"></router-link>
          <h1>GROUPS</h1>
        </div>
        <br />
        <br />
        <div v-if="groups.Group[0] != null" class="jumbotron" id="group1">
          <b-button v-b-modal.modal-1 class="selectGroup" variant="outline-secondary"><h1>{{groups.Group[0].groupName}}</h1></b-button>
          <b-modal id="modal-1" title="Group Name" hide-footer>
              <ul>
                <li v-for="member in members0">
                  {{member}}
                </li>
              </ul>
            <div id="addMember" class="col">
            <b-modal id="modal-6" title="New Group" hide-footer>
              <input type="email" placeholder = "Email" class="inputs">
              <br /><br /><br />
            </b-modal>
            </div>
          </b-modal>
          </div>

        <div v-if="groups.Group[1] != null" class="jumbotron" id="group1">
          <b-button v-b-modal.modal-2 class="selectGroup" variant="outline-secondary"><h1>{{groups.Group[1].groupName}}</h1></b-button>
          <b-modal id="modal-2" title="Group Name" hide-footer>
            <ul>
                <li v-for="member in members1">
                  {{member}}
                </li>
              </ul>
            <div id="addMember" class="col">
            <b-modal id="modal-7" title="New Group" hide-footer>
              <input type="email" placeholder = "Email" class="inputs">
              <br /><br /><br />
            </b-modal>
            </div>
          </b-modal>
          </div>
           <div v-if="groups.Group[2] != null" class="jumbotron" id="group1">
          <b-button v-b-modal.modal-3 class="selectGroup" variant="outline-secondary"><h1>{{groups.Group[2].groupName}}</h1></b-button>
          <b-modal id="modal-3" title="Group Name" hide-footer>
            <ul>
                <li v-for="member in members2">
                  {{member}}
                </li>
              </ul>
            <div id="addMember" class="col">
            <b-modal id="modal-8" title="New Group" hide-footer>
              <input type="email" placeholder = "Email" class="inputs">
              <br /><br /><br />
            </b-modal>
            </div>
          </b-modal>
          </div>
           <div v-if="groups.Group[3] != null" class="jumbotron" id="group1">
          <b-button v-b-modal.modal-4 class="selectGroup" variant="outline-secondary"><h1>{{groups.Group[3].groupName}}</h1></b-button>
          <b-modal id="modal-4" title="Group Name" hide-footer>
            <ul>
                <li v-for="member in members3">
                  {{member}}
                </li>
              </ul>
            <div id="addMember" class="col">
            <b-modal id="modal-9" title="New Group" hide-footer>
              <input type="email" placeholder = "Email" class="inputs">
              <br /><br /><br />
            </b-modal>
            </div>
          </b-modal>
          </div>
           <div v-if="groups.Group[4] != null" class="jumbotron" id="group1">
          <b-button v-b-modal.modal-5 class="selectGroup" variant="outline-secondary"><h1>{{groups.Group[4].groupName}}</h1></b-button>
          <b-modal id="modal-5" title="Group Name" hide-footer>
            <ul>
                <li v-for="member in members4">
                  {{member}}
                </li>
              </ul>
            <div id="addMember" class="col">
            <b-modal id="modal-10" title="New Group" hide-footer>
              <input type="email" placeholder = "Email" class="inputs">
              <br /><br /><br />
            </b-modal>
            </div>
          </b-modal>
          </div>
          <div id="add" class="col">
            <b-button v-b-modal.modal-7 class="addBtn">+</b-button>
            <b-modal id="modal-7" title="New Group" hide-footer>
                <input type="text" v-model="groupName" class="inputs" placeholder="Group Name">
                <br />
                <input type="email" v-model = 'Email1' class="inputs" placeholder="Email">
                <br />
                <input type="email" v-model = 'Email2' class="inputs" placeholder="Email">
                <br />
                <input type="email" v-model = 'Email3' class="inputs" placeholder="Email">
                <br />
                <input type="email" v-model = 'Email4' class="inputs" placeholder="Email">
                <br />
                <input type="email" v-model = 'Email5' class="inputs" placeholder="Email">
                <br />
                <div id="form">
                </div>
                <br /><br /><br />
                <router-link to="Groups"> <a @click = "onClick" href = ''>Submit</a></router-link>
            </b-modal>
          </div> -->
      </div>
  </div>
</template>
<script>
import NavBar from './NavBar'
//importing functions from repository
import { createGroup, groupFind } from '../repository'
export default {
  name: 'Groups',
  components: {
    NavBar
  },
  //data schema that's used for the groups page, instantiates variables
  data () {
    return {
      groupName: '',
      Events: '',
      userId: '',
      UserID: '',
      Email1: this.$session.get('email'),
      Email2: '',
      Email3: '',
      Email4: '',
      Email5: '',
      members0: [],
      members1: [],
      members2: [],
      members3: [],
      members4: [],
      counts: '',
      groups: [],
      Events: [],
      userlist: []
      }
  },
  methods: {
    //onclick function that pushes group emails into an array and then into the server axios calls
    onClick: function () {
      console.log('function started')

      // setting the data
      let userlist = []
      userlist.push(this.Email1);
      userlist.push(this.Email2);
      userlist.push(this.Email3);
      userlist.push(this.Email4);
      userlist.push(this.Email5);
      console.log(userlist)
      console.log(data)
      let data = {
        groupName: this.groupName,
        UserID: userlist,
        Events: []
      }

      // pasting the data created user into the create user function which create an object
      createGroup(data)
        .then(data => {
          console.log('data is sent')

          // pushes the change up to the parent from child
          this.$emit('createGroup', data.group)
          console.log('created group')
          window.location.reload(true); 

        })
        .catch(err => alert(err.message))
    }
  },
  //on creation of the page, session data gets instantiated and pulls from the session start
  created () {
    console.log(this.$session.get('email'))
    let data = {
      email: this.$session.get('email')
    }
    //group find finds the groups that are attached to the user and posts them up on the group page
    groupFind(data).then(data => {
      //pushes the groupfind with data to parent from child
      this.$emit('groupFind', data)
      //sets the data to group to variable groupnames
      let groupNames = {
          Group : data.Group
        }
        console.log(groupNames)
        //sets groups to the data being received
        this.groups = groupNames
        //checks if the array exists and if it does it will set the 
        //local variables to the data pulled from the database
        if(groupNames.Group[0] != null) {
          let members0 = groupNames.Group[0].UserID
          this.members0 = members0
          }
        if(groupNames.Group[1] != null) {
        let members1 = groupNames.Group[1].UserID
        this.members1 = members1
        }
        if(groupNames.Group[2] != null) {
        let members2 = groupNames.Group[2].UserID
        this.members2 = members2
        }
        if(groupNames.Group[3] != null) {
        let members3 = groupNames.Group[3].UserID
        this.members3 = members3
        }
        if(groupNames.Group[4] != null) {
        let members4 = groupNames.Group[4].UserID
        this.members4 = members4
        }
    })
  }
}
</script>
<style scoped>
  .container {
    font-family: "Montserrat", sans-serif;
  }
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

  .jumbotron {
    background-color: white;
    border: 3px solid #C23A3A;
    padding: 0px;
    width: 100%;
  }

  .addBtn {
    border-radius: 50%;
    background: #C23A3A;
    border-color: white;
    color: white;
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

  .selectGroup {
    border: none;
    width: 100%;
  }
  
  .selectGroup:focus {
    background-color: red;
    color: white;
  }

  .selectedGroup {
    background-color: red;
    color: white;
  }
  
  .GroupMainPage{
    margin-bottom: 30%;
  }
</style>

<template>
 <div class="NavBar">
      <nav class="navbar navbar-expand-lg navbar-custom justify-content-sm-start fixed-top">
        <div class="col" id="main">
          <button class="openbtn float-left rounded-circle" v-on:click="openNav()">☰</button>
        </div>
        <div class="col-6 text-center">
            <router-link to="homepage">
              <img src="../assets/logoUnfilled.png" alt="Logo" id="logo">
            </router-link>
          <div id="mySidebar" class="sidebar">
            <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">×</a>
            <br />
            <router-link to="Profile"><img src="../assets/profileImg.png" id="profileImg" class="rounded-circle" alt="profile image"></router-link>
            <br />
            <router-link to="Profile"><h1 id="userFirst">{{firstName}}</h1><h1 id="userLast">{{lastName}}</h1></router-link>
            <br />
            <router-link to="calendar">CALENDAR</router-link>
            <router-link to="groups">GROUPS</router-link>
            <router-link to="aboutUs">ABOUT US</router-link>
            <router-link to="logout">LOGOUT</router-link>
          </div>
        </div>
        <div class="col text-center"></div>
      </nav>
  </div>
</template>
<script>
import { updateUser } from '../repository'
import axios from 'axios'
/* eslint-disable */
    export default {
        name: "NavBar",
        data () {
       return {
        firstName : '',
        lastName : '',
        user: {
          name: "Jeff"
        }
    }
  },
        methods: {
          getUserData: function () {
            let self = this
            axios.get("/api/User").then((response) => {
              console.log(response)
              self.$set(this, "user", response.data.user )
            })
            .catch((error) => {
              console.log(errors)
              router.push("/")
            })
          },
          openNav: function() {
            console.log(this.$session.get('firstName'))
            console.log(this.$session.get('lastName'))
            this.firstName = this.$session.get('firstName')
            this.lastName = this.$session.get('lastName')
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
          },
          closeNav: function() {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginLeft= "0";
          }
        }/*,
          // IMPORTANT does not load yet on mount
          mounted(){
            //let id = this.$session.get('user')
            //updateUser(id).then((data)=>{
              console.log(this.$session.get('firstName'))
              console.log(this.$session.get('lastName'))
              this.firstName = this.$session.get('firstName')
              this.lastName = this.$session.get('lastName')
            //});
            //this.getUserData()
          } */
        }
</script>

<style scoped>
#profileImg{
  width: 150px;
  height: auto;
}
.navbar {
  font-family: "Montserrat", sans-serif;
  background-color: white;
}

#main {
  padding: 0;
}

#logo {
  width: 112.4px;
  height: 40px;

}

.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #C23A3A;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
  transition: 0.3s;
}

.sidebar a:hover {
  color: #f1f1f1;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.openbtn {
  font-size: 12pt;
  cursor: pointer;
  background-color: #C23A3A;
  color: white;
  padding: 7px 11px;
  border: none;
}

.navbar-default {
  background-color: none;
}

.openbtn:hover {
  background-color: #C23A3A;
}

#main {
  transition: margin-left .5s;
  padding: 16px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
}

</style>

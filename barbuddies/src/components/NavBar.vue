<template>
 <div class="NavBar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-sm-start fixed-top">
        <div class="col" id="main">
          <button class="openbtn float-left" v-on:click="openNav()">☰</button>
        </div>
        <div class="col-6 text-center">
          <a class="navbar-brand" href="#">
            <img src="../assets/logoBlack.png" alt="Logo" id="logo">
          </a>
          <div id="mySidebar" class="sidebar">
            <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">×</a>
              <br />
              <router-link to="Profile"><img src="https://dummyimage.com/150x150/fff/000" id="profileImg" class="rounded-circle" alt="profile image"></router-link>
              <br />
              <router-link to="Profile"><h1 id="userFirst">LUKE</h1><h1 id="userLast">HANSEN</h1></router-link>
            <br />
            <router-link to="calendar">CALENDAR</router-link>
            <router-link to="groups">GROUPS</router-link>
          </div>
        </div>
        <div class="col text-center"></div>
      </nav>
  </div>
</template>
<script>
/* eslint-disable */
    export default {
        name: "NavBar",
        methods: {
            openNav: function() {
                document.getElementById("mySidebar").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";
            },
            closeNav: function() {
                document.getElementById("mySidebar").style.width = "0";
                document.getElementById("main").style.marginLeft= "0";
            }
        }
    }         

</script>
<style scoped>
body {
  font-family: "Lato", sans-serif;
}

.navbar-brand{
  height: 10vh;
}

.navbar {
  padding: 0;
}



#main {
  padding: 0;
}

#logo {
  margin: 0;
  height: 120px;
  width: 120px;
  padding-bottom: 40px;
}

.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
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
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: #444;
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

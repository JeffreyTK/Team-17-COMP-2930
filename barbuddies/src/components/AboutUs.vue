<template>
  <div class="AboutUs">
    <NavBar/>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="container">
      <div>
        <router-link to="Homepage"><img src="../assets/back.png" id="backIcon"></router-link>
        <h1>ABOUT US</h1>
        <h3>Team Moto Moto</h3>
      </div>
      <br/>
      <br/>
      <div id="groupPics" class="container">
        <div class="row">
          <div class="col">
            <b-button variant="light" v-b-modal.modal-1><img src="../assets/selfie1.png" class="group"></b-button>
            <b-modal scrollable id="modal-1" title="Luke Hansen">
              <img src="../assets/luke.jpg" class="headshot">
              <p class="my-4">Luke comes from the coast, or as we affectionately like to call it - "The Peninsula"</p>
            </b-modal>
          </div>
          <div class="col">
            <b-button variant="light" v-b-modal.modal-2><img src="../assets/selfie2.jpg" class="group"></b-button>
            <b-modal id="modal-2" title="Irene Hsieh">
              <img src="../assets/irene.jpg" class="headshot">
              <p class="my-4">Irene enjoys short walks to the fridge</p>
            </b-modal>
          </div>
        </div>

        <br/>

        <div class="row">
          <div class="col">
            <b-button variant="light" v-b-modal.modal-3><img src="../assets/selfie3.jpg" class="group"></b-button>
            <b-modal id="modal-3" title="Gina Kim">
              <img src="../assets/gina.jpg" class="headshot">
              <p class="my-4">Gina is a major foodie</p>
            </b-modal>
          </div>
          <div class="col">
            <b-button variant="light" v-b-modal.modal-4><img src="../assets/selfie4.png" class="group"></b-button>
            <b-modal id="modal-4" title="Jeffrey Kuo">
                <p class="my-4"></p>
            </b-modal>
          </div>
        </div>

        <br/>

        <div class="row">
          <div class="col">
            <b-button variant="light" v-b-modal.modal-5><img src="../assets/selfie5.jpg" class="group"></b-button>
            <b-modal id="modal-5" title="Jethro Del Rosario">
                <img src="../assets/jethro.jpg" class="headshot">
                <p class="my-4">Jethro is addicted to coffee and steam buns</p>
            </b-modal>
          </div>
          <div class="col">
            <b-button variant="light" v-b-modal.modal-6><img src="../assets/motomoto.jpg" class="group"></b-button>
            <b-modal id="modal-6" title="Group App Story">
              <p class="my-4">"Awe man, Jeff bailed again!"</p>
            </b-modal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar'
export default {
  name: 'AboutUs',
  components: {
    NavBar
  }
}
</script>

<style scoped>
    #backIcon {
      width: 30px;
      height: 30px;
      float: left;
    }
    .group {
        width: 116px;
        height: 80px;
    }
    /*
    .headshot {
        height: 250px;
        width: 150px;
    } */
</style>

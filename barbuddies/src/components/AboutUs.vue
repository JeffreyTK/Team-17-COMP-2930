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
            <b-modal scrollable id="modal-1" title="Luke Hansen" hide-footer>
              <img src="../assets/luke.jpg" class="headshot">
              <p class="my-4">Luke comes from the coast, or as we affectionately like to call it - "The Peninsula."</p>
            </b-modal>
          </div>
          <div class="col">
            <b-button variant="light" v-b-modal.modal-2><img src="../assets/selfie2.jpg" class="group"></b-button>
            <b-modal id="modal-2" title="Irene Hsieh" hide-footer>
              <img src="../assets/irene.jpg" class="headshot">
              <p class="my-4">Irene enjoys short walks to the fridge and long strolls through IKEA.</p>
            </b-modal>
          </div>
        </div>

        <br/>

        <div class="row">
          <div class="col">
            <b-button variant="light" v-b-modal.modal-3><img src="../assets/selfie3.jpg" class="group"></b-button>
            <b-modal id="modal-3" title="Gina Kim" hide-footer>
              <img src="../assets/gina.jpg" class="headshot">
              <p class="my-4">Gina is a major foodie; if you can name the restaurant, she's eaten there before.</p>
            </b-modal>
          </div>
          <div class="col">
            <b-button variant="light" v-b-modal.modal-4><img src="../assets/selfie4.png" class="group"></b-button>
            <b-modal id="modal-4" title="Jeffrey Kuo" hide-footer>
              <img src="../assets/jeff.jpg" class="headshot">
              <p class="my-4">Jeff is our resident business man. When he's not solving our database issues, he's busy hustling people to upgrade their phone plans.</p>
            </b-modal>
          </div>
        </div>

        <br/>

        <div class="row">
          <div class="col">
            <b-button variant="light" v-b-modal.modal-5><img src="../assets/selfie5.jpg" class="group"></b-button>
            <b-modal id="modal-5" title="Jethro Del Rosario" hide-footer>
              <img src="../assets/jethro.jpg" class="headshot">
              <p class="my-4">Jethro is addicted to coffee and steam buns; one fuels his body while the other fuels his soul.</p>
            </b-modal>
          </div>
          <div class="col">
            <b-button variant="light" v-b-modal.modal-6><img src="../assets/motomoto.jpg" class="group"></b-button>
            <b-modal id="modal-6" title="Group App Story" hide-footer>
              <p class="my-4"><b>"Awe man, Jeff bailed again!"</b><br/><br/>Has this ever happened to you?<br/>
              You want to workout with a friend, but it's too difficult trying to find a schedule that works for everyone.
              When you do schedule a workout session, your partner cancels last minute and leaves you partner-less -
              making you less motivated to go to the gym.<br/><br/>
              With Bar Buddies, you can share your workout calendar with your friend groups.
              See exactly who is working out when, and what they plan on doing!
              Have different circle of friends? Not to worry, you can join multiple groups on Bar Buddies
              and toggle between group calendars.<br/><br/>
              Our team here at Bar Buddies want to help you create your fitness community and increase your motivation to get active!</p>
              <b-button v-b-modal.modal-multi-2>BarBuddies Pitch</b-button>
            </b-modal>
            <b-modal id="modal-multi-2" title="Pitch Video" hide-footer>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/bF2PBv5gAxw" frameborder="0"></iframe>
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
  .container {
    font-family: "Montserrat", sans-serif
  }
  #backIcon {
    width: 30px;
    height: 30px;
    float: left;
  }
  .group {
      width: 116px;
      height: 80px;
  }
</style>

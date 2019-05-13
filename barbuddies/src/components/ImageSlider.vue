<template>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> afed780dc4a74678e696cdef8070981df6c79aaa
  <div class="container">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Workout With Friends"
        text="Join a group and share each others' calendars"
        img-src="https://images.pexels.com/photos/1855269/pexels-photo-1855269.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500%22%3E"
      >
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide
        caption="Keep Track of Your Workouts"
        text="Record your workout and view your progress"
        img-src="https://images.unsplash.com/photo-1520334363269-c1b342d17261?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80%22%3E"
      >
      </b-carousel-slide>
    </b-carousel>
    </div>
<<<<<<< HEAD
=======
  <div id="slider">
    <p>
      <a @click="prev" href='#'></a> || <a @click="next" href='#'>></a>
    </p>

    <transition-group name='fade' tag='div'>
      <div
       v-for="number in [currentNumber]"
       :key='number'
       >
         <img
             :src="currentImage"
             v-on:mouseover="stopRotation"
             v-on:mouseout="startRotation"
             />
      </div>
    </transition-group>

  </div>

>>>>>>> fdd9d08edf241488cab35a9fcf1689e030efb538
=======
>>>>>>> afed780dc4a74678e696cdef8070981df6c79aaa
</template>

<script>
export default {
  data () {
    return {
<<<<<<< HEAD
<<<<<<< HEAD
      slide: 0,
      sliding: null
=======
      images: [
        image1,
        image2,
        image3,
        image4
      ],
      currentNumber: 0,
      timer: null
>>>>>>> fdd9d08edf241488cab35a9fcf1689e030efb538
    }
  },
  methods: {
<<<<<<< HEAD
=======
      slide: 0,
      sliding: null
    }
  },
  methods: {
>>>>>>> afed780dc4a74678e696cdef8070981df6c79aaa
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
<<<<<<< HEAD
=======
    startRotation: function () {
      this.timer = setInterval(this.next, 3000)
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
>>>>>>> fdd9d08edf241488cab35a9fcf1689e030efb538
=======
>>>>>>> afed780dc4a74678e696cdef8070981df6c79aaa
    }
  }
}
</script>
<style scoped>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> afed780dc4a74678e696cdef8070981df6c79aaa
#carousel-1{
  height: 62vh;
}

</style>
<<<<<<< HEAD
=======
.jumbotron{
  color: #efefef;
}
</style>
>>>>>>> fdd9d08edf241488cab35a9fcf1689e030efb538
=======

>>>>>>> afed780dc4a74678e696cdef8070981df6c79aaa

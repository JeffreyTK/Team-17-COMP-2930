<template>
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
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<style scoped>
#carousel-1{
  height: 62vh;
}
<<<<<<< develop

=======
>>>>>>> jethro
</style>

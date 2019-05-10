<template>
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

</template>

<script>
import image1 from '../assets/imageSlider1.jpeg'
import image2 from '../assets/imageSlider2.jpeg'
import image3 from '../assets/imageSlider3.jpeg'
import image4 from '../assets/imageSlider4.jpeg'

export default {
  name: 'ImageSlider',
  data () {
    return {
      images: [
        image1,
        image2,
        image3,
        image4
      ],
      currentNumber: 0,
      timer: null
    }
  },
  mounted: function () {
    this.startRotation()
  },
  methods: {
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
    }
  }
</script>
<style scoped>
.jumbotron{
  color: #efefef;
}
</style>
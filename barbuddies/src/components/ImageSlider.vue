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
    stopRotation: function () {
      clearTimeout(this.timer)
      this.timer = null
    },
    next: function () {
      this.currentNumber += 1
    },
    prev: function () {
      this.currentNumber -= 1
    }
  },
  computed: {
    currentImage: function () {
      return this.images[Math.abs(this.currentNumber) % this.images.length]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: all 4.0s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  visibility: hidden;
}
#slider img {
  width: 100%;
}
</style>

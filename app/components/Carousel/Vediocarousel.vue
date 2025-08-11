<template>
  <div class="carousel-container">
    <div
      class="carousel"
      :style="{ transform: `translateZ(-${translateZ}px) rotateY(${currentAngle}deg)` }"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="carousel-slide"
        :style="{
          transform: `rotateY(${index * angleStep}deg) translateZ(${translateZ}px)`
        }"
      >
        <iframe
          :src="slide.url"
          frameborder="0"
          allowfullscreen
          @mouseenter="pauseSlide"
          @mouseleave="startSlide"
        ></iframe>
      </div>
    </div>
    <button class="nav prev" @click="prevSlide">‹</button>
    <button class="nav next" @click="nextSlide">›</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const slides = [
  { url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { url: 'https://www.youtube.com/embed/FTQbiNvZqaY' },
  { url: 'https://www.youtube.com/embed/9bZkp7q19f0' },
  { url: 'https://www.youtube.com/embed/2vjPBrBU-TM' }
]

const currentIndex = ref(0)
const currentAngle = ref(0)
const angleStep = 360 / slides.length
const translateZ = 400 // controls depth
let autoSlideInterval = null

const rotateCarousel = () => {
  currentAngle.value = -currentIndex.value * angleStep
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
  rotateCarousel()
}
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
  rotateCarousel()
}

const startSlide = () => {
  stopSlide()
  autoSlideInterval = setInterval(nextSlide, 3000)
}
const stopSlide = () => {
  if (autoSlideInterval) clearInterval(autoSlideInterval)
}
const pauseSlide = () => stopSlide()

onMounted(() => {
  startSlide()
})
onBeforeUnmount(() => {
  stopSlide()
})
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 800px;
  height: 400px;
  margin: auto;
  perspective: 1500px;
}

.carousel {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 1s;
}

.carousel-slide {
  position: absolute;
  width: 80%;
  height: 80%;
  left: 10%;
  top: 10%;
}

iframe {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  background: rgba(0,0,0,0.4);
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 50%;
}
.nav.prev {
  left: 10px;
}
.nav.next {
  right: 10px;
}
</style>

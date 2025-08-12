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
        :style="{ transform: `rotateY(${index * angleStep}deg) translateZ(${translateZ}px)` }"
      >
        <div class="video-wrapper">
          <!-- If not clicked, show thumbnail -->
          <div
            v-if="!slide.playing"
            class="thumbnail"
            :style="{ backgroundImage: `url(${slide.thumbnail})` }"
            @click="playVideo(index)"
          >
            <div class="play-button">▶</div>
          </div>

          <!-- If clicked, show iframe -->
          <iframe
            v-else
            :src="slide.embedUrl"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

    <button class="nav prev" @click="prevSlide">‹</button>
    <button class="nav next" @click="nextSlide">›</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const slides = ref([
  {
    id: "Q_NTSeOpp0M",
    playing: false,
    get thumbnail() {
      return `https://img.youtube.com/vi/${this.id}/hqdefault.jpg`;
    },
    get embedUrl() {
      return `https://www.youtube.com/embed/${this.id}?autoplay=1`;
    },
  },
  {
    id: "hmtAfJ5GqvI",
    playing: false,
    get thumbnail() {
      return `https://img.youtube.com/vi/${this.id}/hqdefault.jpg`;
    },
    get embedUrl() {
      return `https://www.youtube.com/embed/${this.id}?autoplay=1`;
    },
  },
  {
    id: "2S2LaJXdG3k",
    playing: false,
    get thumbnail() {
      return `https://img.youtube.com/vi/${this.id}/hqdefault.jpg`;
    },
    get embedUrl() {
      return `https://www.youtube.com/embed/${this.id}?autoplay=1`;
    },
  },
  {
    id: "cvo7CkSUrR8",
    playing: false,
    get thumbnail() {
      return `https://img.youtube.com/vi/${this.id}/hqdefault.jpg`;
    },
    get embedUrl() {
      return `https://www.youtube.com/embed/${this.id}?autoplay=1`;
    },
  },
]);

const currentIndex = ref(0);
const currentAngle = ref(0);
const angleStep = 360 / slides.value.length;
const translateZ = 400;
let autoSlideInterval = null;

const rotateCarousel = () => {
  currentAngle.value = -currentIndex.value * angleStep;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
  rotateCarousel();
};
const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.value.length) % slides.value.length;
  rotateCarousel();
};

const startSlide = () => {
  stopSlide();
  autoSlideInterval = setInterval(nextSlide, 3000);
};
const stopSlide = () => {
  if (autoSlideInterval) clearInterval(autoSlideInterval);
};

const playVideo = (index) => {
  slides.value[index].playing = true;
  stopSlide(); // stop auto rotation when playing
};

onMounted(() => {
  startSlide();
});
onBeforeUnmount(() => {
  stopSlide();
});
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

.video-wrapper {
  width: 100%;
  height: 100%;
}

.thumbnail {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  position: relative;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: white;
  background: rgba(0,0,0,0.6);
  border-radius: 50%;
  padding: 10px 20px;
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

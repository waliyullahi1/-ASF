<template>
  <div>
    <!-- Transparent bar for spacing -->
    <div class=" w-full md:h-20 h-14"></div>

    <!-- Fixed top nav -->
    <div
      :class="[
        'fixed top-0 z-50 w-full flex justify-center    transition-transform duration-300',
        top ? '-translate-y-36 shadow-xl ' : 'translate-y-0 border-b-2   bg-white'
      ]"
    >
      <div class="container lg:w-[85%]  mx-auto w-full bg-white md:h-20 h-14 flex items-center justify-between px-4">
        <!-- Logo -->
        <div class="flex items-center h-full">
          <NuxtLink to="/" class="flex gap-3 items-center font-semibold text-2xl">
            <img src="@/assets/images/logo.jpg" class="w-10" alt="logo" />
          ASF
          </NuxtLink>
        </div>

        <!-- Hamburger menu for mobile -->
        <button class="md:hidden z-20" @click="toggleMenu">
          <div class="flex flex-col gap-1">
            <div
              :class="[
                'h-[3px] bg-preprimary transition-transform duration-200',
                mobileNav ? 'rotate-45 w-8' : 'w-8'
              ]"
            ></div>
            <div
              :class="[
                'h-[3px] bg-preprimary transition-transform duration-200',
                mobileNav ? '-rotate-45 w-8 -mt-1' : 'w-8 mt-1.5'
              ]"
            ></div>
          </div>
        </button>

        <!-- Nav links -->
        <ul
          :class="[
            'md:flex md:flex-row  md:static absolute top-14 left-0 w-full md:w-auto bg-white md:h-auto md:translate-x-0  transition-all gap-5 duration-300',
            mobileNav ? 'translate-x-0 flex flex-col gap-3 px-4 py-6' : '-translate-x-[200%]'
          ]"
        >
          <li>
            <ButtonsSecondary>
              <NuxtLink to="/" exact-active-class="active-link">Home</NuxtLink>
            </ButtonsSecondary>
          </li>
          <li>
            <ButtonsSecondary>
              <NuxtLink to="/aboutus" exact-active-class="active-link">About</NuxtLink>
            </ButtonsSecondary>
          </li>
          <li>
            <ButtonsSecondary>
              <NuxtLink to="/contactus" exact-active-class="active-link">Contact</NuxtLink>
            </ButtonsSecondary>
          </li>
          
         
          
        </ul>

        <!-- Sign in and out button-->
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const mobileNav = ref(false)
const scrollPosition = ref(0)
const top = ref(false)
let lastScrollPosition = 0

const toggleMenu = () => {
  mobileNav.value = !mobileNav.value
}

const handleScroll = () => {
  const currentScrollPosition = window.pageYOffset
  top.value = currentScrollPosition > lastScrollPosition && currentScrollPosition > 100
  scrollPosition.value = currentScrollPosition
  lastScrollPosition = currentScrollPosition
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.active-link {
  color: #3D4492 !important;
  border-bottom: 2px solid #3D4492;
}

.nuxt-link-active:not([href*='#']) {
  color: inherit !important;
}
</style>

<template>
  <button
    :type="type"
    :class="[
      'py-2 px-6 group flex justify-center items-center text-white duration-500 ease-in-out rounded-lg active:bg-preprimary outline-none hover:bg-primary/100 bg-primary',
      { 'zoom-animation': isClicked },
      loading ? 'bg-preprimary text-white' : '',
      width === 'full' ? 'w-full' : 'w-fit'
    ]"
    :disabled="loading || disabled"
    :aria-busy="loading"
    :aria-disabled="loading || disabled"
    @click="handleClick"
  >
    <div class="flex items-center justify-center capitalize">
      <transition name="fade" mode="out-in">
        <div v-if="loading" key="loading" class="flex items-center text-white">
          <div class="mr-2">
            <!-- Loading Spinner -->
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                fill="none"
                stroke="#ffffff"
                stroke-width="5"
                r="38"
                stroke-dasharray="179.07 61.69"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  dur="1s"
                  values="0 50 50;360 50 50"
                  keyTimes="0;1"
                />
              </circle>
            </svg>
          </div>
          {{ loadingText }}
        </div>

        <div v-else key="default">
          <TypographyP>
            <slot />
          </TypographyP>
        </div>
      </transition>
    </div>

    <div v-if="arrow && !loading" class="w-8 h-full flex justify-center items-center rotate-180 text-white">
      <svg
        fill="currentColor"
        class="w-3 group-hover:-translate-x-1 duration-700"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 29.771 29.771"
      >
        <path
          d="M29.771,14.886c0,1.657-1.344,3-3,3H11.486l4.506,4.505c1.172,1.172,1.172,3.071,0,4.243
          c-0.586,0.586-1.354,0.879-2.122,0.879s-1.534-0.293-2.12-0.878L0,14.885L11.745,3.138c1.173-1.172,3.071-1.171,4.243,0
          c1.172,1.172,1.172,3.071,0,4.243l-4.505,4.506h15.289C28.427,11.886,29.771,13.229,29.771,14.886z"
        />
      </svg>
    </div>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  loading?: boolean
  disabled?: boolean
  loadingText?: string
  type?: 'button' | 'submit' | 'reset'
  width?: 'fit' | 'full'
  arrow?: boolean
}>(), {
  loading: false,
  disabled: false,
  loadingText: 'Loading...',
  type: 'button',
  width: 'fit',
  arrow: false,
})

const emit = defineEmits<{
  (e: 'clicked'): void
}>()

const isClicked = ref(false)

const handleClick = () => {
  if (props.loading || props.disabled) return
  isClicked.value = true
  setTimeout(() => {
    isClicked.value = false
    emit('clicked')
  }, 200)
}
</script>

<style scoped>
@keyframes zoomEffect {
  0% {
    transform: scale(0.97);
  }
  100% {
    transform: scale(1);
  }
}

.zoom-animation {
  animation: zoomEffect 0.2s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

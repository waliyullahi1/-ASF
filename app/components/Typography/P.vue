
<template>
    <p class="  text-sm font-inter   md:text-base ">
      <slot/>
    </p>
  </template>
  <script>
    export default {
      props: {
        color: String,
        small_text: Boolean
      }
    }
  </script>

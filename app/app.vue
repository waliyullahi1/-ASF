<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
  <script setup>
useHead({
  title: 'My Website', // change tab title
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo.png' } // your logo path
  ]
})
</script>
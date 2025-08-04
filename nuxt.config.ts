// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  modules: [
    '@nuxtjs/tailwindcss',
    // '@nuxt/ui',
  ],

  // alias: {
  //   '#tailwind-config': resolve('./tailwind.config'),
  // },

  devtools: { enabled: true },
})

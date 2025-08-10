import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'media', // or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3D4492",
        secondary: "#FFFCF7",
        tertiary: "#1A1D3D",
        // tertiary: "#353448" // optional
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

export default config

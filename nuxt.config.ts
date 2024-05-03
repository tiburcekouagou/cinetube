// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  tailwindcss: {
    configPath: 'tailwind.config',
  },
  runtimeConfig: {
    YOUTUBE_API_KEY: 'AIzaSyBrqwxMxK4BxTUM1Ygf_-VS3KMFNqMvCzI',
    TMDB_API_KEY: 'ab545cc899abb425a99387150301aad2',
    VITE_TMDB_LANG: 'FR',
  }
})
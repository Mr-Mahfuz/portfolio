// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/image',
  ],
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'bn', iso: 'bn-BD', file: 'bn.json', name: 'Bengali' }
    ],
    lazy: false,
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'no_prefix',
  },
  nitro: {
    routeRules: {
      '/**': { prerender: true }
    }
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Mahfuz Ahmad — Software Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Software Engineer specializing in scalable web applications, enterprise systems, and AI-driven platforms. Vue.js, Nuxt 3, React, TypeScript.' },
        { name: 'author', content: 'Mahfuz Ahmad' },
        { property: 'og:title', content: 'Mahfuz Ahmad — Software Engineer' },
        { property: 'og:description', content: 'Software Engineer specializing in scalable web applications, enterprise systems, and AI-driven platforms.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://mahfuz-ahmad.vercel.app/' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Mahfuz Ahmad — Software Engineer' },
        { name: 'twitter:description', content: 'Software Engineer specializing in scalable web applications, enterprise systems, and AI-driven platforms.' },
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/Mahfuz.jpg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&family=Noto+Sans+Bengali:wght@400;500;600;700&display=swap' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    }
  }
})

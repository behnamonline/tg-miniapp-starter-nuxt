// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'fa' },
      title: 'My Mini App',
      script: [{ src: 'https://telegram.org/js/telegram-web-app.js?64' }],
    },
  },


  runtimeConfig: {
    telegramBotToken: '',
  },

  nitro: {
    experimental: {
      database: true,
    },
    database: {
      // Production: Cloudflare D1 (binding name must match wrangler.jsonc)
      mainDB_cf: {
        connector: 'cloudflare-d1',
        options: { bindingName: 'db_link' },
      },
      // Development: local SQLite file (.data/db_file.sqlite)
      mainDB_local: {
        connector: 'sqlite',
        options: { name: 'db_file' },
      },
    },
  },
})

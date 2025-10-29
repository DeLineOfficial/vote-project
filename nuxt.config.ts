// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  icon: {
    customCollections: [
      {
        prefix: "icon",
        dir: "./app/assets/icons"
      }
    ]
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    head: {
      title: 'VoteApp',
      titleTemplate: '%s | VoteApp',
    }
  },
  runtimeConfig: {
    public: {
      APIURL: ''
    },
  },
  imports: {
    dirs: [
      'shared/types/**/*.ts'
    ]
  },
  postcss: {
    plugins: {
      'postcss-nested': {}
    },
  },
  sitemap: {
    sources: [
      '/api/sitemap/urls'
    ],
    defaults: {
      lastmod: new Date().toISOString(),
      priority: 0.5,
      changefreq: 'weekly'
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/icon',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/sitemap',
  ]
})
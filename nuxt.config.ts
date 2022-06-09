// eslint-disable-next-line import/no-extraneous-dependencies
import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/styles/reset.scss', '~/styles/globals.scss'],
  modules: ['@nuxt/content'],
  runtimeConfig: {
    public: {
      spotifyClientId: '',
      spotifyClientSecret: '',
      spotifyRefreshToken: '',
    },
  },
  ssr: false,
  target: 'static',
  typescript: {
    strict: true,
  },
});

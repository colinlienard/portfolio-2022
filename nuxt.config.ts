// eslint-disable-next-line import/no-extraneous-dependencies
import { defineNuxtConfig } from 'nuxt';
import { resolve } from 'path';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {
    styles: resolve(__dirname, './styles'),
  },
  css: [
    'locomotive-scroll/dist/locomotive-scroll.css',
    '~/styles/reset.scss',
    '~/styles/globals.scss',
  ],
  modules: ['@nuxt/content'],
  runtimeConfig: {
    public: {
      spotifyClientId: '',
      spotifyClientSecret: '',
      spotifyRefreshToken: '',
    },
  },
  ssr: true,
  target: 'static',
  typescript: {
    strict: true,
  },
});

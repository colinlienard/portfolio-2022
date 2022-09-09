// eslint-disable-next-line import/no-extraneous-dependencies
import { defineNuxtConfig } from 'nuxt';
import { resolve } from 'path';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {
    styles: resolve(__dirname, './styles'),
  },
  css: [
    '~/styles/reset.scss',
    'locomotive-scroll/dist/locomotive-scroll.css',
    '~/styles/globals.scss',
  ],
  image: {
    screens: {
      mobile: 480,
      tablet: 1024,
      laptop: 1600,
      desktop: 2560,
    },
  },
  modules: ['@nuxt/content', '@nuxt/image-edge'],
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

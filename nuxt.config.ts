import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/styles/mixins";
            @use "~/styles/screens";
            @use "~/styles/typography";
            @use "~/styles/variables";
          `,
        },
      },
    },
  },
});

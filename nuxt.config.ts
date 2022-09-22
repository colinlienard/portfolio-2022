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
      githubLink: 'https://github.com/ColinLienard',
      linkedinLink: 'https://www.linkedin.com/in/colin-lienard-83490a1a4/',
      maltLink: 'https://www.malt.fr/profile/colinlienard1',
      redditLink: 'https://www.reddit.com/user/colinlienard',
      email: 'contact@colin-lienard.fr',
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
            @use 'sass:color';
            @use "~/styles/animations";
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

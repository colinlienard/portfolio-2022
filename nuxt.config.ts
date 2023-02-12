import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: [
    '~/styles/reset.scss',
    'locomotive-scroll/dist/locomotive-scroll.css',
    '~/styles/globals.scss',
  ],
  modules: ['@nuxt/content'],
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

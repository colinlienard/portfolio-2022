<script setup lang="ts">
useHead({
  title: 'Colin Lienard | Frontend Developer',
  meta: [
    {
      name: 'description',
      content:
        "Hi ! I'm Colin Lienard, a frontend developer passionate about frontend dev. I use React and Nextjs, Vue and Nuxtjs,",
    },
  ],
  script: [
    {
      src: 'https://cursor-party.colinlienard.partykit.dev/cursors.js',
      tagPosition: 'bodyClose',
    },
  ],
});
</script>

<template>
  <NuxtLayout name="page">
    <HomeHeroSection />
    <HomePortfolio />
    <HomeAbout />
    <HomeContact />
    <BaseFooter />
  </NuxtLayout>
</template>

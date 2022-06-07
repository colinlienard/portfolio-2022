<script setup lang="ts">
useHead({
  title: 'Colin Lienard 👋',
  meta: [
    {
      name: 'description',
      content:
        "Bonjour ! Je suis Colin Lienard, un webdesigner et développeur front-end passioné par la création d'interface web. J'utilise React et Nextjs, Vue et Nuxtjs...",
    },
  ],
});
</script>

<template>
  <NuxtLayout name="page">
    <BaseNavbar />
    <HomeHeader />
    <HomePortfolio />
    <HomeAbout />
    <HomeContact />
    <BaseFooter />
  </NuxtLayout>
</template>

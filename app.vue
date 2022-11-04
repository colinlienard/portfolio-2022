<script setup lang="ts">
// Global meta data
useHead({
  link: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
});
</script>

<template>
  <Html lang="fr">
    <TransitionOverlay />
    <NuxtPage />
  </Html>
</template>

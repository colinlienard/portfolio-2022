<script setup lang="ts">
// Global meta data
definePageMeta({
  link: [
    {
      rel: 'favicon',
      src: '/favicon.ico',
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

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
    <div>
      <TransitionOverlay />
      <NuxtPage />
    </div>
  </Html>
</template>

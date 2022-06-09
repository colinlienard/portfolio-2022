<script setup lang="ts">
defineProps<{
  source: string;
}>();
</script>

<template>
  <div
    class="section-container"
    data-scroll
    data-scroll-class="visible"
    data-scroll-repeat
    data-scroll-offset="25%,0%"
  >
    <video
      class="video"
      :src="`/images/projects/${source}`"
      autoplay
      muted
      loop
    />
  </div>
</template>

<style scoped lang="scss">
@use '../../styles/mixins';
@use '../../styles/screens';
@use '../../styles/variables';

.section-container {
  @include mixins.section-width;

  padding: 0 1.5rem;
  opacity: 0;
  transition: opacity 0.3s variables.$ease-in-out;

  &.visible {
    opacity: 1;
  }

  @include screens.laptop {
    padding: 0;
  }

  .video {
    width: 100%;
    border-radius: 2rem;
  }
}
</style>

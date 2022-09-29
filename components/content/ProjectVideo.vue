<script setup lang="ts">
defineProps<{
  source: string;
}>();
</script>

<template>
  <div class="section-container">
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
.section-container {
  @include mixins.section-width;
  @include mixins.mobile-padding;

  .video {
    width: 100%;
  }
}
</style>

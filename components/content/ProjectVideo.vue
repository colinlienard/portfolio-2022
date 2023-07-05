<script setup lang="ts">
defineProps<{
  source: string;
}>();

const { path } = useRoute();

const { data } = await useAsyncData(path, () =>
  queryContent('/projects/').where({ _path: path }).find(),
);
</script>

<template>
  <div class="section-container">
    <div class="video-container">
      <video :src="`/images/projects/${source}`" autoplay muted loop />
      <span :style="`background-color: #${data ? data[0].color : '000'}`" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-container {
  @include mixins.section-width;
  @include mixins.mobile-padding;

  .video-container {
    @include mixins.image-with-shadow;
  }
}
</style>

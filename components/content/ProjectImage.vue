<script setup lang="ts">
defineProps<{
  source: string;
}>();
</script>

<template>
  <figure
    class="image-container"
    data-scroll
    data-scroll-class="visible"
    data-scroll-repeat
    data-scroll-offset="25%,0%"
  >
    <img
      class="image"
      :src="`/images/projects/${source}`"
      alt=""
      width="1200"
    />
    <figcaption class="figcaption">
      <slot />
    </figcaption>
  </figure>
</template>

<style scoped lang="scss">
@use 'styles/mixins';
@use 'styles/screens';
@use 'styles/variables';

.image-container {
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

  .image {
    width: 100%;
    border-radius: 2rem;
  }

  .figcaption {
    text-align: center;
    margin-top: 1rem;
    color: variables.$grey;

    @include screens.laptop {
      margin-top: 2rem;
    }
  }
}
</style>

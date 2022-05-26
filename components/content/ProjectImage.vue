<script setup lang="ts">
defineProps<{
  image: string;
}>();
</script>

<template>
  <figure class="image-content">
    <div class="image-container">
      <img
        class="image"
        :src="image"
        alt=""
        data-scroll
        data-scroll-speed="-2"
      />
    </div>
    <figcaption class="figcaption">
      <slot />
    </figcaption>
  </figure>
</template>

<style scoped lang="scss">
@use '../../styles/mixins';
@use '../../styles/screens';
@use '../../styles/variables';

.image-content {
  @include mixins.section-width;

  padding: 0 1.5rem;

  @include screens.laptop {
    padding: 0;
  }

  .image-container {
    border-radius: 2rem;
    overflow: hidden;

    .image {
      width: 100%;
    }
  }

  .figcaption {
    text-align: center;
    margin-top: 1rem;
    color: variables.$grey;
    font-size: 0.9em;

    @include screens.laptop {
      margin-top: 2rem;
    }
  }
}
</style>

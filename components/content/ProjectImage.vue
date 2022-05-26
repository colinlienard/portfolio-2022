<script setup lang="ts">
defineProps<{
  image: string;
}>();
</script>

<template>
  <figure class="figure">
    <img class="image" :src="image" alt="" />
    <figcaption class="figcaption">
      <slot />
    </figcaption>
  </figure>
</template>

<style scoped lang="scss">
@use '../../styles/variables';

.figure {
  padding: 0 1.5rem;

  .image {
    width: 100%;
    border-radius: 2rem;
  }

  .figcaption {
    text-align: center;
    margin-top: 1rem;
    color: variables.$grey;
    font-size: 0.8em;
  }
}
</style>

<script setup lang="ts">
defineProps<{
  source: string;
}>();
</script>

<template>
  <figure class="image-container">
    <NuxtImg
      class="image"
      :src="`/images/projects/${source}`"
      alt=""
      sizes="mobile:480px tablet:1024px"
      quality="100"
    />
    <figcaption class="figcaption">
      <slot />
    </figcaption>
  </figure>
</template>

<style scoped lang="scss">
.image-container {
  @include mixins.section-width;
  @include mixins.mobile-padding;

  .image {
    width: 100%;
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

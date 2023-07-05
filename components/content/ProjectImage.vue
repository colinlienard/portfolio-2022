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
  <figure class="figure">
    <div class="image-container">
      <img
        class="image"
        :src="`/images/projects/${source}`"
        alt=""
        width="1024"
        height="576"
        loading="lazy"
      />
      <span :style="`background-color: #${data ? data[0].color : '000'}`" />
    </div>
    <figcaption class="figcaption">
      <slot />
    </figcaption>
  </figure>
</template>

<style scoped lang="scss">
.figure {
  @include mixins.section-width;
  @include mixins.mobile-padding;

  .image-container {
    @include mixins.image-with-shadow;

    .image {
      height: 100%;
    }
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

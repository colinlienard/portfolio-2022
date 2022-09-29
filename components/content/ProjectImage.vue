<script setup lang="ts">
defineProps<{
  source: string;
}>();

const { path } = useRoute();

const { data } = await useAsyncData(path, () =>
  queryContent('/projects/').where({ _path: path }).find()
);
</script>

<template>
  <figure class="figure">
    <div class="image-container">
      <NuxtImg
        class="image"
        :src="`/images/projects/${source}`"
        alt=""
        sizes="mobile:480px tablet:1024px"
        quality="100"
      />
      <span
        class="shadow"
        :style="`background-color: #${data ? data[0].color : '000'}`"
      />
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
    position: relative;
    transition: translate 0.3s variables.$ease-in-out;

    .image {
      width: 100%;
    }

    .shadow {
      position: absolute;
      inset: 0 calc(-1rem + 1px) -1rem 0;
      clip-path: polygon(
        0 0,
        calc(100% - 1rem) 0,
        calc(100% - 1rem) 0,
        calc(100% - 1rem) calc(100% - 1rem),
        0 calc(100% - 1rem),
        0 calc(100% - 1rem)
      );
      z-index: -1;
      transition: clip-path 0.3s variables.$ease-in-out;
    }

    &:hover {
      translate: -0.5rem -0.5rem;

      .shadow {
        clip-path: polygon(
          0 0,
          calc(100% - 1rem) 0,
          100% 1rem,
          100% 100%,
          1rem 100%,
          0 calc(100% - 1rem)
        );
      }
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

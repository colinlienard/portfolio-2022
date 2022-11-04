<script setup lang="ts">
import { inject, Ref } from 'vue';

const props = defineProps<{
  index: number;
  title: string;
  description: string;
  image: string;
  link: string;
}>();

const cursorContent = inject<Ref<string | null>>('cursor');
</script>

<template>
  <li
    class="item"
    data-scroll
    :data-scroll-speed="index % 2 === 0 ? 1 : -1"
    data-scroll-direction="horizontal"
    @mouseenter="cursorContent = 'Voir'"
    @mouseleave="cursorContent = null"
  >
    <PageLink :to="props.link" class="item-link">
      <NuxtImg
        class="image"
        :src="`/images/projects/${props.image}`"
        alt=""
        sizes="mobile:350px tablet:488px"
        quality="100"
      />
      <h3 class="title">{{ props.title }}</h3>
      <p class="description">{{ props.description }}</p>
    </PageLink>
  </li>
</template>

<style scoped lang="scss">
.item {
  background-color: variables.$dark;

  @include screens.laptop {
    &:nth-of-type(2n) {
      translate: 0 16rem;
    }
  }

  :global(.item-link) {
    cursor: none;

    @include screens.laptop {
      transition: opacity 0.3s variables.$ease-in-out;
    }
  }

  :global(.item-link:not(:hover)) {
    @include screens.laptop {
      opacity: 0.5;
    }
  }

  .image {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  .title {
    @include typography.heading-3;

    margin: 1em 0 0.5em;
  }

  .description {
    @include typography.paragraph;

    color: variables.$grey;
  }
}
</style>

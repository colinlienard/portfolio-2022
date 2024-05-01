<script setup lang="ts">
import { inject, type Ref } from 'vue';

const props = defineProps<{
  index: number;
  title: string;
  description: string;
  image: string;
  link: string;
  transparent: boolean;
}>();

const cursorContent = inject<Ref<string | null>>('cursor');
</script>

<template>
  <li
    :class="['item', { transparent }]"
    data-scroll
    :data-scroll-speed="index % 2 === 0 ? 1 : -1"
    data-scroll-direction="horizontal"
    @mouseenter="cursorContent = 'See'"
    @mouseleave="cursorContent = null"
  >
    <PageLink :to="props.link" class="portfolio-item-link">
      <img
        class="image"
        :src="`/images/projects/${props.image}`"
        alt=""
        width="488"
        height="488"
        loading="lazy"
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

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: variables.$dark;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s variables.$ease-in-out;
    }

    &.transparent::before {
      opacity: 0.5;
    }
  }

  :global(.portfolio-item-link) {
    cursor: none;
  }

  .image {
    height: 100%;

    @include screens.laptop {
      height: unset;
    }
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

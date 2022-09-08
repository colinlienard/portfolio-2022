<script setup lang="ts">
// eslint-disable-next-line import/no-extraneous-dependencies
import { inject, Ref } from 'vue';

const cursorContent = inject<Ref<string | null>>('cursor');

const { data } = await useAsyncData('projects', () =>
  queryContent('/projects/').sort({ order: 1 }).find()
);
</script>

<template>
  <article id="portfolio" class="container">
    <h2 class="hero"><strong>Portfolio</strong> 2022</h2>
    <ul class="list">
      <li v-for="(project, index) in data" :key="index">
        <NuxtLink :to="`/projects/${project.slug}`">
          <div class="image-wrapper">
            <img
              class="image"
              :src="`/images/projects/${project.image}`"
              alt=""
              data-scroll
              data-scroll-speed="-1"
              @mouseenter="cursorContent = project.title"
              @mouseleave="cursorContent = null"
            />
          </div>
          <h3 class="title">{{ project.title }}</h3>
          <p class="description">{{ project.description }}</p>
        </NuxtLink>
      </li>
    </ul>
  </article>
</template>

<style scoped lang="scss">
@use 'styles/mixins';
@use 'styles/screens';
@use 'styles/typography';
@use 'styles/variables';

.container {
  @include mixins.section;
}

.hero {
  @include typography.heading-2;
}

.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @include screens.laptop {
    gap: 4rem;
    padding: 0 2rem;
  }

  .image-wrapper {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 2rem;
    overflow: hidden;
    display: block;

    @include screens.laptop {
      aspect-ratio: 16 / 9;
    }
  }

  .image {
    width: 100%;
    height: 100%;
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

  .title,
  .description {
    @include screens.laptop {
      display: none;
    }
  }
}
</style>

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
        <NuxtLink :to="`/projects/${project.slug}`" class="list-item">
          <img
            class="image"
            :src="project.image"
            alt=""
            data-scroll
            data-scroll-speed="-3"
            @mouseenter="cursorContent = project.title"
            @mouseleave="cursorContent = null"
          />
          <p class="link-text">{{ project.title }}</p>
        </NuxtLink>
      </li>
    </ul>
  </article>
</template>

<style scoped lang="scss">
@use '../styles/mixins';
@use '../styles/typography';
@use '../styles/variables';

.container {
  @include mixins.section;

  padding: 0;
}

.hero {
  @include typography.heading-2;
}

.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  overflow: hidden;

  .list-item {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: block;

    .image {
      width: 100vw;
      height: 100vh;
      object-fit: cover;
    }

    .link-test {
      display: none;
    }
  }
}
</style>

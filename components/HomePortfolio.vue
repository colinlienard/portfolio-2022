<script setup lang="ts">
import { inject, Ref } from 'vue';

const cursorContent = inject<Ref<string | null>>('cursor');

const { data } = await useAsyncData('projects', () =>
  queryContent('/projects/').sort({ order: 1 }).find()
);
</script>

<template>
  <article id="portfolio" class="container">
    <h2 class="hero">
      <strong>Portfolio</strong> <span class="empty">2022</span>
    </h2>
    <ul class="list">
      <li v-for="(project, index) in data" :key="index">
        <NuxtLink :to="`/projects/${project.slug}`">
          <nuxt-img
            class="image"
            :src="`/images/projects/${project.image}`"
            alt=""
            sizes="mobile:800px tablet:2500px"
            quality="100"
            @mouseenter="cursorContent = project.title"
            @mouseleave="cursorContent = null"
          />
          <h3 class="title">{{ project.title }}</h3>
          <p class="description">{{ project.description }}</p>
        </NuxtLink>
      </li>
    </ul>
  </article>
</template>

<style scoped lang="scss">
.container {
  @include mixins.section;
}

.hero {
  @include typography.heading-2;

  .empty {
    @include mixins.text-stroke;
  }
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
}
</style>

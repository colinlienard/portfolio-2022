<script setup lang="ts">
const { data } = await useAsyncData('projects', () =>
  queryContent('/projects').findOne()
);
</script>

<template>
  <article id="portfolio" class="container">
    <h2 class="hero">Portfolio 2022</h2>
    <ul class="list">
      <li v-for="(project, index) in data.projects" :key="index">
        <NuxtLink :to="project.slug" class="list-item">
          <img
            class="image"
            :src="project.image"
            alt=""
            data-scroll
            data-scroll-speed="-3"
          />
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
  }
}
</style>

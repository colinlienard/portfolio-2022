<script setup lang="ts">
import { inject, Ref } from 'vue';

const cursorContent = inject<Ref<string | null>>('cursor');

const { data } = await useAsyncData('projects', () =>
  queryContent('/projects/').sort({ order: 1 }).find()
);
</script>

<template>
  <NuxtLayout id="portfolio" name="section">
    <h2 class="hero">
      <strong>Portfolio</strong> <span class="empty">2022</span>
    </h2>
    <ul class="list">
      <li
        v-for="(project, index) in data"
        :key="index"
        class="item"
        data-scroll
        :data-scroll-speed="index % 2 === 0 ? 1 : -1"
        data-scroll-direction="horizontal"
        @mouseenter="cursorContent = 'Voir'"
        @mouseleave="cursorContent = null"
      >
        <PageLink :to="`/projects/${project.slug}`" class="link">
          <nuxt-img
            class="image"
            :src="`/images/projects/${project.image}`"
            alt=""
            sizes="mobile:350px tablet:488px"
            quality="100"
          />
          <h3 class="title">{{ project.title }}</h3>
          <p class="description">{{ project.description }}</p>
        </PageLink>
      </li>
    </ul>
  </NuxtLayout>
</template>

<style scoped lang="scss">
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem 3rem;
    padding-bottom: 16rem;
  }

  .item {
    background-color: variables.$dark;

    @include screens.laptop {
      &:nth-of-type(2n) {
        translate: 0 16rem;
      }
    }

    .link {
      cursor: none;

      @include screens.laptop {
        transition: opacity 0.3s variables.$ease-in-out;

        &:not(&:hover) {
          opacity: 0.5;
        }
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
}
</style>

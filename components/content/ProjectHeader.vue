<script setup lang="ts">
defineProps<{
  image: string;
}>();
</script>

<template>
  <header class="header-container">
    <div
      class="image-container"
      data-scroll
      data-scroll-class="visible"
      data-scroll-repeat
      data-scroll-offset="0%,25%"
    >
      <img class="image" :src="image" alt="" />
    </div>
    <div class="content">
      <NuxtLink class="back" to="/">
        <span class="line"></span>
        Retour
      </NuxtLink>
      <slot name="hero" />
      <slot name="links" />
    </div>
  </header>
</template>

<style lang="scss">
@use '../../styles/screens';
@use '../../styles/mixins';
@use '../../styles/typography';
@use '../../styles/variables';

.header-container {
  .image-container {
    width: 100vw;
    height: 50vh;
    border-radius: 0 0 2rem 2rem;
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.3s ease-in-out, height 0.5s ease-in-out;

    &.visible {
      opacity: 1;
    }

    &:hover {
      height: 80vh;
      transition: height 1.5s 0.25s ease-in-out;
    }

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    padding: 2rem 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @include screens.laptop {
      align-items: center;
      gap: 3rem;
      padding: 3rem 0 0;
    }

    .back {
      @include mixins.section-width;

      display: flex;
      align-items: center;
      gap: 1em;

      .line {
        width: 3rem;
        height: 1px;
        background-color: variables.$white;

        @include screens.laptop {
          width: 4rem;
        }
      }
    }

    h1 {
      @include typography.heading-1;

      text-align: center;
      width: 100%;
    }

    ul {
      display: flex;
      justify-content: center;
      gap: 2rem;

      @include screens.laptop {
        gap: 4rem;
      }
    }
  }
}
</style>

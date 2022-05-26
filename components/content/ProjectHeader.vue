<script setup lang="ts">
defineProps<{
  image: string;
}>();
</script>

<template>
  <header class="header">
    <div class="image-container">
      <img
        class="image"
        :src="image"
        alt=""
        data-scroll
        data-scroll-speed="-3"
      />
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
@use '../../styles/typography';
@use '../../styles/variables';

.header {
  .image-container {
    width: 100vw;
    height: 50vh;
    border-radius: 0 0 2rem 2rem;
    overflow: hidden;

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .back {
    display: flex;
    align-items: center;
    gap: 1em;

    .line {
      width: 3rem;
      height: 1px;
      background-color: variables.$white;
    }
  }

  .content {
    padding: 2rem 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1 {
      @include typography.heading-1;

      text-align: center;
      width: 100%;
    }

    ul {
      display: flex;
      justify-content: center;
      gap: 2rem;
    }
  }
}
</style>

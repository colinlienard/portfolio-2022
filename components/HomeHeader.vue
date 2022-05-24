<script setup lang="ts">
const starFieldVisible = ref(false);
const isMobile = useIsMobile();
const scrollTo = useScrollTo();
</script>

<template>
  <header class="header">
    <p class="pre-hero"><span class="emoji">👋</span> Bonjour !</p>
    <h1
      class="hero"
      @mouseenter="starFieldVisible = true"
      @mouseleave="starFieldVisible = false"
    >
      Je suis <br v-if="isMobile" />Colin Lienard, webdesigner
      <br v-if="isMobile" />& développeur front-end
    </h1>
    <button class="discover" @click="scrollTo('#portfolio')">
      <p>Explorez</p>
      <span class="line"></span>
    </button>
    <StarField :visible="starFieldVisible" />
  </header>
</template>

<style scroped lang="scss">
@use '../styles/screens';
@use '../styles/typography';
@use '../styles/variables';

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;

  .pre-hero {
    z-index: 1;

    .emoji {
      font-size: 1.3em;
    }
  }

  .hero-container {
    position: relative;
    background-color: black;
  }

  .hero {
    @include typography.heading-1;

    text-align: center;
    max-width: 24rem;
    margin-top: 1.5rem;
    position: relative;
    transition: transform 4s ease-in-out;

    &:hover {
      transform: scale(0.9);
    }

    @include screens.laptop {
      max-width: 64rem;
    }

    &::before {
      content: '';
      position: absolute;
      top: 40%;
      left: 0;
      width: 100%;
      height: 8rem;
      background-image: linear-gradient(
        variables.$blue,
        variables.$green,
        transparent
      );
      mix-blend-mode: darken;
      transform: rotate(-30deg);
      z-index: 0;

      @include screens.laptop {
        height: 12rem;
      }
    }

    &::after {
      content: '';
      position: absolute;
      inset: -20rem;
      background-color: variables.$dark;
      pointer-events: none;
      z-index: -1;
    }
  }

  .discover {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .line {
      width: 1px;
      height: 8rem;
      background-color: variables.$white;
    }
  }
}
</style>

<script setup lang="ts">
const isMobile = useIsMobile();
</script>

<template>
  <header class="header">
    <p class="pre-hero"><span class="emoji">👋</span> Bonjour !</p>
    <h1 class="hero">
      Je suis <br v-if="isMobile" />Colin Lienard, webdesigner
      <br v-if="isMobile" />& développeur front-end
    </h1>
    <div class="discover">
      <p>Découvrez</p>
      <span class="line"></span>
    </div>
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

  .pre-hero .emoji {
    font-size: 1.3em;
  }

  .hero {
    @include typography.heading-1;

    text-align: center;
    max-width: 24rem;
    margin-top: 1.5rem;
    position: relative;

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

      @include screens.laptop {
        height: 12rem;
      }
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

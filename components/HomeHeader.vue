<script setup lang="ts">
const isMobile = useIsMobile();
</script>

<template>
  <header class="header">
    <h1 class="hero">
      <span>Je suis</span> <br v-if="isMobile" /><strong class="filled"
        >Colin Lienard</strong
      ><span>,</span> <strong>webdesigner</strong> <br v-if="isMobile" /><span
        >&</span
      ><br />
      <strong>développeur front-end</strong>
    </h1>
    <div class="scroll-guide">
      <img class="arrow" src="/icons/arrow-down.svg" alt="" />
      <span>Scroll</span>
    </div>
    <div class="button-container">
      <IconButton
        class="button"
        icon-src="/icons/malt-logo.svg"
        href="https://www.malt.com/"
      >
        Hire me on Malt
      </IconButton>
    </div>
    <CubeBackground />
  </header>
</template>

<style scoped lang="scss">
@use 'styles/mixins';
@use 'styles/screens';
@use 'styles/typography';
@use 'styles/variables';

@keyframes arrow {
  0% {
    transform: translateY(-0.2rem);
  }

  50% {
    transform: translateY(0.2rem);
  }

  100% {
    transform: translateY(-0.2rem);
  }
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 100vh;

  @supports (height: 100svh) {
    height: 100svh;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: variables.$dark;
  }

  .hero {
    @include typography.heading-1;

    text-align: center;
    max-width: 24rem;
    z-index: 1;
    pointer-events: none;
    mix-blend-mode: difference;

    @include screens.laptop {
      max-width: 64rem;
    }

    @include screens.desktop {
      max-width: 80rem;
    }

    :not(.filled) {
      @include mixins.text-stroke(variables.$white);
    }
  }

  .scroll-guide {
    position: absolute;
    bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .arrow {
      animation: arrow 2s infinite variables.$ease-in-out;
    }
  }

  .button-container {
    @include mixins.section-width;

    position: absolute;
    bottom: 2rem;
    display: flex;
    justify-content: flex-end;
    z-index: 1;
  }
}
</style>

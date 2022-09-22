<script setup lang="ts">
const config = useRuntimeConfig();
const isMobile = useIsMobile();
</script>

<template>
  <header id="hero" class="header">
    <h1 class="hero">
      <span>Je suis</span> <br v-if="isMobile" /><strong class="filled"
        >Colin Lienard</strong
      ><span>,</span> <strong>webdesigner</strong> <br v-if="isMobile" /><span
        >&</span
      ><br v-if="!isMobile" />
      <strong> développeur front-end</strong>
    </h1>
    <div class="scroll-guide">
      <img class="arrow" src="/icons/arrow.svg" alt="" />
      <span>Scroll</span>
    </div>
    <div class="button-container">
      <IconButton
        class="button"
        icon-src="/icons/malt-logo.svg"
        :href="config.public.maltLink"
      >
        M'embaucher sur Malt
      </IconButton>
    </div>
    <CubeBackground />
  </header>
</template>

<style scoped lang="scss">
@keyframes arrow {
  0% {
    translate: 0 -0.3rem;
  }

  50% {
    translate: 0 0.3rem;
  }

  100% {
    translate: 0 -0.3rem;
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
    translate: 0 6rem;

    @include screens.laptop {
      max-width: 64rem;
      translate: 0;
    }

    @include screens.desktop {
      max-width: 80rem;
    }

    .filled {
      @include animations.appear;
    }

    :not(.filled) {
      @include mixins.text-stroke;
      @include animations.appear-with-delay;
    }
  }

  .scroll-guide {
    @include animations.appear-with-delay;

    position: absolute;
    bottom: 2rem;
    left: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    z-index: 1;

    @include screens.laptop {
      left: auto;
    }

    .arrow {
      animation: arrow 2s infinite variables.$ease-in-out;
    }
  }

  .button-container {
    @include mixins.mobile-padding;
    @include mixins.section-width;
    @include animations.appear-with-delay;

    position: absolute;
    bottom: 2rem;
    display: flex;
    justify-content: flex-end;
    z-index: 1;
  }
}
</style>

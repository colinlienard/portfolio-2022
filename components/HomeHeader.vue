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
      Je suis <br v-if="isMobile" /><strong>Colin Lienard</strong>,
      <strong>webdesigner</strong> <br v-if="isMobile" />&
      <strong>développeur front-end</strong>
      <span class="gradient" />
    </h1>
    <button class="discover" @click="scrollTo('#portfolio')">
      <span>Explorez</span>
      <span class="line"></span>
    </button>
    <StarField :visible="starFieldVisible" />
  </header>
</template>

<style scoped lang="scss">
@use '../styles/screens';
@use '../styles/typography';
@use '../styles/variables';

@keyframes hello {
  0% {
    transform: translateY(8rem);
    opacity: 0;
  }

  50% {
    transform: translateY(8rem);
    opacity: 1;
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes hero {
  0% {
    opacity: 0;
    pointer-events: none;
  }

  60% {
    transform: translateX(-10%);
    opacity: 0;
  }

  100% {
    transform: none;
    pointer-events: none;
  }
}

@keyframes hero-mask {
  60% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  100% {
    clip-path: polygon(-25% 0, -25% 0, 0 100%, 0 100%);
  }
}

@keyframes hero-gradient {
  25% {
    transform: translateX(-50%) rotate(-30deg);
    opacity: 0;
  }

  100% {
    transform: rotate(-30deg);
    opacity: 1;
  }
}

@keyframes discover {
  0% {
    opacity: 0;
  }

  80% {
    opacity: 0;
    transform: translateY(4rem);
  }

  100% {
    opacity: 1;
    transform: none;
  }
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;

  .pre-hero {
    z-index: 1;
    animation: hello 2s variables.$ease-in-out;

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
    overflow: hidden;
    transition: transform 4s ease-in-out;
    animation: hero 2.5s variables.$ease-in-out;

    &:hover {
      transform: scale(0.9);
    }

    @include screens.laptop {
      max-width: 64rem;
    }

    @include screens.desktop {
      max-width: 80rem;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-color: variables.$dark;
      pointer-events: none;
      z-index: -1;
    }

    &::before {
      content: '';
      position: absolute;
      inset: -1rem;
      background-color: variables.$dark;
      clip-path: inset(0 100% 0 0);
      animation: hero-mask 2.5s variables.$ease-in-out;
    }

    .gradient {
      position: absolute;
      top: 30%;
      left: 10%;
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
      animation: hero-gradient 2.5s 0.5s variables.$ease-in-out;

      @include screens.laptop {
        top: 40%;
        left: 0;
        width: 100%;
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
    overflow: hidden;
    animation: discover 3.5s variables.$ease-in-out;

    .line {
      width: 1px;
      height: 8rem;
      background-color: variables.$white;
    }

    * {
      transition: transform 0.5s variables.$ease-in-out;
    }

    &:hover * {
      transform: translateY(2rem);
      transition: transform 1s variables.$ease-in-out;
    }
  }
}
</style>

<script setup>
const scrollTo = useScrollTo();
</script>

<template>
  <nav class="nav" data-scroll data-scroll-sticky data-scroll-target="main">
    <ul class="list">
      <li class="link">
        <button @click="scrollTo('#portfolio')">Portfolio</button>
      </li>
      <li class="link">
        <button @click="scrollTo('#about')">À propos</button>
      </li>
      <li class="link">
        <button @click="scrollTo('#contact')">Contact</button>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@use '../styles/mixins';
@use '../styles/screens';
@use '../styles/variables';

@keyframes container {
  1% {
    opacity: 0;
  }

  99% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes appear {
  from {
    transform: translateY(-4rem);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.nav {
  position: fixed;
  top: 2rem;
  mix-blend-mode: difference;
  z-index: 999;
  animation: container 2.5s;

  .list {
    display: flex;
    gap: 2rem;
    white-space: nowrap;

    @include screens.laptop {
      gap: 4rem;
    }

    .link {
      @include mixins.link;

      animation: appear 1s 2s variables.$ease-in-out;

      &:nth-of-type(2) {
        animation-delay: 2.2s;
      }

      &:nth-of-type(3) {
        animation-delay: 2.4s;
      }
    }
  }
}
</style>

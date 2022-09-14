<script setup>
const scrollTo = useScrollTo();
</script>

<template>
  <nav class="nav" data-scroll data-scroll-sticky data-scroll-target="main">
    <button class="home-link" @click="scrollTo(0)">Colin Lienard</button>
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
@use 'styles/mixins';
@use 'styles/screens';
@use 'styles/variables';

@keyframes appear {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.nav {
  @include mixins.section-width;

  position: fixed;
  top: 2rem;
  display: flex;
  justify-content: space-between;
  mix-blend-mode: difference;
  z-index: 999;
  animation: appear 2s variables.$ease-in-out;

  .home-link {
    font-weight: 700;
  }

  .list {
    display: flex;
    gap: 2rem;
    white-space: nowrap;

    @include screens.laptop {
      gap: 4rem;
    }
  }
}
</style>

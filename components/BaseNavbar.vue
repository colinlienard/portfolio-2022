<script setup>
const scrollTo = useScrollTo();
</script>

<template>
  <nav class="nav" data-scroll data-scroll-sticky data-scroll-target="main">
    <ul class="list">
      <li>
        <button class="link" @click="scrollTo('#portfolio')">Portfolio</button>
      </li>
      <li>
        <button class="link" @click="scrollTo('#about')">À propos</button>
      </li>
      <li>
        <button class="link" @click="scrollTo('#contact')">Contact</button>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@use '../styles/mixins';
@use '../styles/screens';

.nav {
  position: fixed;
  top: 2rem;
  mix-blend-mode: difference;
  z-index: 999;

  .list {
    display: flex;
    gap: 2rem;
    white-space: nowrap;

    @include screens.laptop {
      gap: 4rem;
    }

    .link {
      @include mixins.link;
    }
  }
}
</style>

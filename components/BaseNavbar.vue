<script setup lang="ts">
const scrollTo = useScrollTo();
const route = useRoute();

const handleScrollTo = (target: string) => {
  if (route.path === '/') {
    scrollTo(target);
    return;
  }

  navigateTo(`/${target}`);
};
</script>

<template>
  <nav class="nav" data-scroll data-scroll-sticky data-scroll-target="main">
    <button class="home-link" @click="handleScrollTo('#hero')">
      Colin Lienard
    </button>
    <ul class="list">
      <li class="link">
        <button @click="handleScrollTo('#portfolio')">Portfolio</button>
      </li>
      <li class="link">
        <button @click="handleScrollTo('#about')">À propos</button>
      </li>
      <li class="link">
        <button @click="handleScrollTo('#contact')">Contact</button>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
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
  @include mixins.mobile-padding;
  @include mixins.section-width;

  position: fixed;
  top: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  mix-blend-mode: difference;
  z-index: 999;
  animation: appear 2s variables.$ease-in-out;

  .home-link {
    font-weight: 700;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
    white-space: nowrap;

    @include screens.laptop {
      flex-direction: row;
      gap: 4rem;
    }
  }
}
</style>

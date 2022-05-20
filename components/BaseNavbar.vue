<template>
  <nav class="nav" data-scroll data-scroll-sticky data-scroll-target="main">
    <ul class="list">
      <li>
        <button class="link">Portfolio</button>
      </li>
      <li>
        <button class="link">À propos</button>
      </li>
      <li>
        <button class="link">Contact</button>
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
  transform: translateX(-50%);
  mix-blend-mode: difference;
  z-index: 999;

  @include screens.mobile {
    // Only when locomotive-scroll is disabled
    left: 50%;
  }

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

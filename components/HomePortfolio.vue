<template>
  <article id="portfolio" class="container">
    <h2 class="hero">Portfolio 2022</h2>
    <ul class="list">
      <li class="list-item">
        <div class="image" data-scroll data-scroll-speed="-3"></div>
      </li>
      <li class="list-item">
        <div class="image" data-scroll data-scroll-speed="-3"></div>
      </li>
      <li class="list-item">
        <div class="image" data-scroll data-scroll-speed="-3"></div>
      </li>
    </ul>
  </article>
</template>

<style scoped lang="scss">
@use '../styles/mixins';
@use '../styles/typography';
@use '../styles/variables';

.container {
  @include mixins.section;
}

.hero {
  @include typography.heading-2;
}

.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  overflow: hidden;

  .list-item {
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    .image {
      width: 100vw;
      height: 100vh;
      background-image: url('/images/colin.webp');
      background-size: contain;
    }
  }
}
</style>

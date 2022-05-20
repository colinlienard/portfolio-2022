<template>
  <NuxtLayout name="section">
    <h2 class="hero">Portfolio 2022</h2>
    <ul class="list">
      <li class="list-item"></li>
      <li class="list-item"></li>
      <li class="list-item"></li>
    </ul>
  </NuxtLayout>
</template>

<style scoped lang="scss">
@use '../styles/typography';
@use '../styles/variables';

.hero {
  @include typography.heading-2;
}

.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .list-item {
    aspect-ratio: 16 / 9;
    border-radius: variables.$radius;
    border: 1px solid variables.$grey;
  }
}
</style>

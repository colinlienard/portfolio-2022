<template>
  <section class="section">
    <slot />
  </section>
</template>

<style scoped lang="scss">
@use '../styles/screens';

.section {
  width: min(100%, 75rem);
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @include screens.laptop {
    gap: 6rem;
  }
}
</style>

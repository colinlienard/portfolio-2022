<template>
  <main class="main">
    <slot />
  </main>
</template>

<style scoped lang="scss">
@use '../styles/screens';

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;

  @include screens.laptop {
    gap: 14rem;
  }
}
</style>

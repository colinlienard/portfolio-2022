<template>
  <section class="section">
    <slot />
  </section>
</template>

<style scoped lang="scss">
@use '../styles/mixins';
@use '../styles/screens';

.section {
  @include mixins.section;

  width: min(100%, 75rem);
}
</style>

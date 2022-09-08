<template>
  <section class="section">
    <slot />
  </section>
</template>

<style scoped lang="scss">
@use 'styles/mixins';
@use 'styles/screens';

.section {
  @include mixins.section;
  @include mixins.section-width;
}
</style>

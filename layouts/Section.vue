<template>
  <section class="section">
    <slot />
  </section>
</template>

<style scoped lang="scss">
.section {
  @include mixins.section;
  @include mixins.section-width;
}
</style>

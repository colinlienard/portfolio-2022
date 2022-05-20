<template>
  <h2 class="hero">
    <a href="mailto:colin.lienard87@orange.fr">Discutons par mail</a>
  </h2>
</template>

<style scoped lang="scss">
@use '../styles/typography';

.hero {
  @include typography.heading-2;

  text-decoration: underline;
}
</style>

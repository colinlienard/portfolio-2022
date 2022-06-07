<template>
  <NuxtLayout id="contact" name="section">
    <h2 class="hero">
      <a href="mailto:colin.lienard87@orange.fr">Discutons par mail</a>
    </h2>
  </NuxtLayout>
</template>

<style scoped lang="scss">
@use '../styles/typography';
@use '../styles/variables';

.hero {
  @include typography.heading-2;

  position: relative;
  text-shadow: variables.$dark -0.1em 0.1em 0, variables.$dark 0.1em 0.1em 0;

  &::before {
    content: '';
    position: absolute;
    inset: auto 0 0 0;
    background-color: currentcolor;
    height: 0.08em;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s variables.$ease-in-out;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
}
</style>

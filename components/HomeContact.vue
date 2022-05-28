<template>
  <NuxtLayout id="contact" name="section">
    <h2 class="hero">
      <a href="mailto:colin.lienard87@orange.fr">Discutons par mail</a>
      <!-- <a class="sentence" href="mailto:colin.lienard87@orange.fr">
        <div class="letter">D</div>
        <div class="letter">i</div>
        <div class="letter">s</div>
        <div class="letter">c</div>
        <div class="letter">u</div>
        <div class="letter">t</div>
        <div class="letter">o</div>
        <div class="letter">n</div>
        <div class="letter">s</div>
        <div class="space" />
        <div class="letter">p</div>
        <div class="letter">a</div>
        <div class="letter">r</div>
        <div class="space" />
        <div class="letter">m</div>
        <div class="letter">a</div>
        <div class="letter">i</div>
        <div class="letter">l</div>
      </a> -->
    </h2>
  </NuxtLayout>
</template>

<style scoped lang="scss">
@use '../styles/typography';
@use '../styles/variables';

@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  20% {
    transform: translateY(-0.5em);
  }

  70% {
    transform: translateY(0.2em);
  }

  100% {
    transform: translateY(0);
  }
}

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
    transform: scaleX(0);
    z-index: -1;
    transform-origin: right;
    transition: transform 0.5s variables.$ease-in-out;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }

  .sentence {
    display: flex;
  }

  .space {
    width: 0.2em;
  }

  &:hover {
    .letter {
      animation: bounce 1s ease-in-out;

      &:nth-of-type(2) {
        animation-delay: 0.1s;
      }

      &:nth-of-type(3) {
        animation-delay: 0.2s;
      }

      &:nth-of-type(4) {
        animation-delay: 0.3s;
      }

      &:nth-of-type(5) {
        animation-delay: 0.4s;
      }

      &:nth-of-type(6) {
        animation-delay: 0.5s;
      }

      &:nth-of-type(7) {
        animation-delay: 0.6s;
      }

      &:nth-of-type(8) {
        animation-delay: 0.7s;
      }

      &:nth-of-type(9) {
        animation-delay: 0.8s;
      }

      &:nth-of-type(10) {
        animation-delay: 0.9s;
      }

      &:nth-of-type(11) {
        animation-delay: 1s;
      }

      &:nth-of-type(12) {
        animation-delay: 1.1s;
      }

      &:nth-of-type(13) {
        animation-delay: 1.2s;
      }

      &:nth-of-type(14) {
        animation-delay: 1.3s;
      }

      &:nth-of-type(15) {
        animation-delay: 1.4s;
      }

      &:nth-of-type(16) {
        animation-delay: 1.5s;
      }

      &:nth-of-type(17) {
        animation-delay: 1.6s;
      }

      &:nth-of-type(18) {
        animation-delay: 1.7s;
      }
    }
  }
}
</style>

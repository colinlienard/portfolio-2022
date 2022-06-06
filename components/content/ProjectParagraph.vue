<template>
  <div class="paragraph-container">
    <slot />
  </div>
</template>

<style lang="scss">
@use '../../styles/mixins';
@use '../../styles/screens';
@use '../../styles/typography';
@use '../../styles/variables';

.paragraph-container {
  width: min(100%, 40rem);
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1em;

  @include screens.laptop {
    padding: 0;
  }

  p {
    @include typography.paragraph;

    color: variables.$grey;
  }
}
</style>

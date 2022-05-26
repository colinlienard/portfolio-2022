<template>
  <article class="content">
    <slot />
  </article>
</template>

<style lang="scss">
@use '../../styles/typography';
@use '../../styles/variables';

.content {
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1em;

  p {
    @include typography.paragraph;

    color: variables.$grey;
  }
}
</style>

<template>
  <div class="paragraph-container">
    <slot />
  </div>
</template>

<style lang="scss">
.paragraph-container {
  width: min(100%, 40rem);
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1em;

  @include screens.laptop {
    padding: 0;
  }

  h2 {
    @include typography.heading-3;

    margin-bottom: 1em;
  }

  p {
    @include typography.paragraph;

    color: variables.$grey;
  }

  :not(h1, h2, h3, h4, h5, h6) > a {
    @include mixins.blink;
  }

  strong {
    color: variables.$white;
  }

  ul {
    padding-left: 1em;
    color: variables.$grey;
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    li {
      list-style: disc;
    }
  }

  blockquote {
    padding: 1.5em;
    border-radius: 1rem;
    background-color: rgba(variables.$blue, 10%);

    p {
      color: variables.$blue;
      text-align: center;
    }
  }
}
</style>

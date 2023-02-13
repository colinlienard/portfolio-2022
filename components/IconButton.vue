<script setup lang="ts">
defineProps<{
  iconSrc: string;
  href?: string;
}>();
</script>

<template>
  <a v-if="href" class="button" :href="href" target="_blank" rel="noreferrer">
    <img :src="iconSrc" alt="" width="16" height="16" loading="lazy" />
    <slot />
  </a>
  <button v-else class="button">
    <img :src="iconSrc" alt="" width="16" height="16" loading="lazy" />
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  padding: 0.5em 0.75em;
  display: flex;
  align-items: center;
  gap: 0.5em;
  position: relative;
  transition: scale 0.1s;

  * {
    pointer-events: none;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
      to right,
      variables.$blue,
      variables.$green
    );
    border-radius: 99rem;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 1px;
    background-color: variables.$dark;
    opacity: 0.9;
    border-radius: 99rem;
    z-index: -1;
    transition: opacity 0.3s variables.$ease-in-out;
  }

  &:hover::after {
    opacity: 0.8;
  }

  &:active {
    scale: 0.98;
  }
}
</style>

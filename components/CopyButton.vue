<script setup lang="ts">
const props = defineProps<{
  toCopy: string;
}>();

const visible = ref(false);

const copyToClipboard = () => {
  navigator.clipboard.writeText(props.toCopy);

  visible.value = true;
  setTimeout(() => {
    visible.value = false;
  }, 2000);
};
</script>

<template>
  <button class="button" @click="copyToClipboard">
    <slot />
    <span :class="['tooltip', { visible }]">Copied!</span>
  </button>
</template>

<style scoped lang="scss">
.button {
  position: relative;
}

.tooltip {
  position: absolute;
  bottom: calc(100% + 1rem);
  left: 50%;
  translate: -50%;
  padding: 0.5em 0.75em;
  color: variables.$white;
  border: 1px solid variables.$green;
  background-color: variables.$dark;
  border-radius: 99rem;
  white-space: nowrap;
  transition: 0.3s variables.$bounce;

  &::before {
    content: '';
    position: absolute;
    width: 0.75rem;
    height: 0.75rem;
    bottom: 0;
    left: 50%;
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
    background-color: inherit;
    border: inherit;
    box-sizing: border-box;
    translate: -50% 50%;
    rotate: 45deg;
  }

  &:not(&.visible) {
    scale: 0;
    translate: -50% 50%;
    transition: 0.2s variables.$ease-in-out;
  }
}
</style>

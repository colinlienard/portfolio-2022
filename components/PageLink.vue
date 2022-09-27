<script setup lang="ts">
import Emitter from '~~/utils/emitter';

const props = defineProps<{
  to: string;
}>();

const handleClick = () => {
  Emitter.emit('route-change', props.to);
};
</script>

<template>
  <button class="button" @click="handleClick">
    <NuxtLink :to="to" class="disabled">
      <slot />
    </NuxtLink>
  </button>
</template>

<style scoped lang="scss">
.button {
  text-align: left;

  .disabled {
    pointer-events: none;
  }
}
</style>

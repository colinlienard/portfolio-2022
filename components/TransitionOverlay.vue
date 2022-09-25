<script setup lang="ts">
import Emitter from '~~/utils/emitter';

const change = ref(false);

Emitter.on('route-change', (to) => {
  change.value = true;

  setTimeout(() => {
    navigateTo(to);
    change.value = false;
  }, 1000);
});
</script>

<template>
  <div class="container">
    <Transition mode="out-in">
      <div v-if="change" class="overlay overlay-1" />
    </Transition>
    <Transition mode="out-in">
      <div v-if="change" class="overlay overlay-2" />
    </Transition>
    <Transition mode="out-in">
      <div v-if="change" class="overlay overlay-3" />
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  pointer-events: none;
}

.overlay {
  position: absolute;
  inset: 0;
  transition: translate 1s variables.$smooth;

  &.overlay-1 {
    background-color: variables.$white;
  }

  &.overlay-2 {
    background-color: variables.$white;
    transition-delay: 0.4s;
  }

  &.overlay-3 {
    background-color: variables.$dark;
    transition-delay: 0.2s;
  }
}

.v-enter-from {
  translate: -100% 0;
}

.v-leave-to {
  translate: 100% 0;
}
</style>

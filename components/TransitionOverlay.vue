<script setup lang="ts">
import Emitter from '~~/utils/emitter';

const change = ref(false);

Emitter.on('route-change', (to) => {
  change.value = true;

  setTimeout(async () => {
    await navigateTo(to);
    change.value = false;
  }, 800);
});
</script>

<template>
  <Transition mode="out-in">
    <div v-if="change" class="overlay">
      <p class="text">Colin Lienard</p>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.overlay {
  position: fixed;
  inset: 0;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 999;
  cursor: none;

  &,
  .text {
    transition: 0.8s variables.$smooth;
  }

  .text {
    font-weight: bold;
  }
}

.v-enter-from {
  translate: 0 100%;

  .text {
    translate: 0 -60vh;
    opacity: 0;
  }
}

.v-leave-to {
  translate: 0 -100%;

  .text {
    translate: 0 60vh;
    opacity: 0;
  }
}
</style>

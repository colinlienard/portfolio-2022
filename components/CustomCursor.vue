<script setup lang="ts">
const x = ref(0);
const y = ref(0);
const hovering = ref(false);

const handleMouseMove = (event: MouseEvent) => {
  x.value = event.clientX;
  y.value = event.clientY;

  switch ((event.target as Element).tagName) {
    case 'BUTTON':
    case 'A':
      hovering.value = true;
      break;
    default:
      hovering.value = false;
      break;
  }
};

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
  <div
    class="container"
    data-scroll
    data-scroll-sticky
    data-scroll-target="main"
  >
    <span :class="['cursor', hovering && 'small']" />
  </div>
</template>

<style scoped lang="scss">
@use '../styles/variables';

@keyframes appear {
  0%,
  75% {
    width: 0;
  }

  100% {
    width: 2rem;
  }
}

.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 999;
}

.cursor {
  width: 3rem;
  aspect-ratio: 1 / 1;
  background-color: variables.$green;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(
    calc(v-bind(x) * 1px - 50%),
    calc(v-bind(y) * 1px - 50%)
  );
  animation: appear 2s variables.$ease-in-out;
  transition: transform 300ms cubic-bezier(0.2, 0.5, 0.5, 1),
    width 0.5s variables.$ease-in-out,
    background-color 0.5s variables.$ease-in-out;

  &.small {
    width: 0.75rem;
    background-color: white;
  }
}
</style>

<script setup lang="ts">
// eslint-disable-next-line import/no-extraneous-dependencies
import { inject, Ref } from 'vue';

const x = ref('0px');
const y = ref('0px');
const hovering = ref(false);
const cursorContent = inject<Ref<string | null>>('cursor');

const handleMouseMove = useThrottle((event: MouseEvent) => {
  x.value = `${event.clientX}px`;
  y.value = `${event.clientY}px`;

  switch ((event.target as Element).tagName) {
    case 'BUTTON':
    case 'A':
      hovering.value = true;
      break;
    default:
      hovering.value = false;
      break;
  }
}, 20);

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
    <span :class="['cursor', { small: hovering }, { big: cursorContent }]">
      <Transition mode="out-in">
        <p v-if="cursorContent" class="text">{{ cursorContent }}</p>
      </Transition>
    </span>
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -1.5rem;
  left: -1.5rem;
  transform: translate(v-bind(x), v-bind(y));
  animation: appear 2s variables.$ease-in-out;
  transition: transform 300ms cubic-bezier(0.2, 0.5, 0.5, 1),
    width 0.5s variables.$ease-in-out, top 0.5s variables.$ease-in-out,
    left 0.5s variables.$ease-in-out,
    background-color 0.5s variables.$ease-in-out;

  &.small {
    width: 0.8rem;
    top: -0.4rem;
    left: -0.4rem;
    background-color: variables.$white;
  }

  &.big {
    width: 16rem;
    top: -9rem;
    left: -8rem;
    background-color: variables.$white;
  }

  .text {
    position: absolute;
    color: variables.$dark;
    width: 12rem;
    text-align: center;
  }
}

.v-enter-active,
.v-leave-active {
  clip-path: inset(0 0 0 0);
  transition: clip-path 1s variables.$ease-in-out;
}

.v-enter-from,
.v-leave-to {
  clip-path: inset(0 0 0 100%);
  transition: clip-path 0.3s variables.$ease-in-out;
}
</style>

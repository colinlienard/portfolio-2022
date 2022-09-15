<script setup lang="ts">
import { inject, Ref } from 'vue';

const lerpAmount = 0.1;

const mouse = ref({ x: 0, y: 0 });
const x = ref(0);
const y = ref(0);
const hovering = ref(false);
const cursorContent = inject<Ref<string | null>>('cursor');

const lerp = (start: number, end: number) =>
  (1 - lerpAmount) * start + lerpAmount * end;

const handleMouseMove = (event: MouseEvent) => {
  mouse.value = {
    x: event.clientX,
    y: event.clientY,
  };

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

const loop = () => {
  x.value = lerp(x.value, mouse.value.x);
  y.value = lerp(y.value, mouse.value.y);

  requestAnimationFrame(() => loop());
};

onMounted(() => {
  x.value = window.innerWidth / 2;
  y.value = window.innerHeight / 2;
  mouse.value = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };

  window.addEventListener('mousemove', handleMouseMove);

  loop();
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
    <span :class="['cursor', { hovering }, { big: cursorContent }]">
      <Transition mode="out-in">
        <p v-if="cursorContent" class="text">{{ cursorContent }}</p>
      </Transition>
    </span>
  </div>
</template>

<style scoped lang="scss">
@keyframes appear {
  0%,
  75% {
    width: 0;
  }

  100% {
    width: 1rem;
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
  mix-blend-mode: difference;
}

.cursor {
  width: 1rem;
  aspect-ratio: 1 / 1;
  background-color: variables.$white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -0.5rem;
  left: -0.5rem;
  transform: translate(calc(v-bind(x) * 1px), calc(v-bind(y) * 1px));
  animation: appear 1s variables.$ease-in-out;
  transition: width 0.5s variables.$ease-in-out, top 0.5s variables.$ease-in-out,
    left 0.5s variables.$ease-in-out,
    background-color 0.5s variables.$ease-in-out;

  &.hovering {
    width: 3rem;
    top: -1.5rem;
    left: -1.5rem;
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

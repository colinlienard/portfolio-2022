<script setup lang="ts">
import { inject, type Ref } from 'vue';

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
  <span
    :class="['follower', { hovering }, { big: cursorContent }]"
    data-scroll
    data-scroll-sticky
    data-scroll-target="main"
  />
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <span
    :class="['text-container', { visible: cursorContent }]"
    data-scroll
    data-scroll-sticky
    data-scroll-target="main"
  >
    <Transition mode="out-in">
      <p v-if="cursorContent" class="text">
        {{ cursorContent }}
      </p>
    </Transition>
  </span>
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

.follower,
.text-container {
  position: fixed;
  pointer-events: none;
  background-color: variables.$white;
  border-radius: 50%;
  translate: calc(v-bind(x) * 1px) calc(v-bind(y) * 1px);
  z-index: 999;
}

.follower {
  width: 1rem;
  aspect-ratio: 1 / 1;
  top: -0.5rem;
  left: -0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  mix-blend-mode: difference;
  animation: appear 1s variables.$ease-in-out;
  transition:
    width 0.5s variables.$ease-in-out,
    top 0.5s variables.$ease-in-out,
    left 0.5s variables.$ease-in-out,
    background-color 0.5s variables.$ease-in-out;

  &.hovering {
    width: 3rem;
    top: -1.5rem;
    left: -1.5rem;
  }
}

.text-container {
  width: 0;
  top: 0;
  left: 0;
  aspect-ratio: 1 / 1;
  color: variables.$dark;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    width 0.5s variables.$ease-in-out,
    top 0.5s variables.$ease-in-out,
    left 0.5s variables.$ease-in-out;

  &.visible {
    width: 16rem;
    top: -8rem;
    left: -8rem;
  }
}

.v-enter-active,
.v-leave-active {
  scale: 1;
  transition: scale 0.5s variables.$ease-in-out;
}

.v-enter-from,
.v-leave-to {
  scale: 0;
  transition: scale 0.3s variables.$ease-in-out;
}
</style>

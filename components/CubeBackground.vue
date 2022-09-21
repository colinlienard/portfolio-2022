<script setup lang="ts">
import { Application } from '@splinetool/runtime';

const canvas = ref<HTMLCanvasElement>();
const visible = ref(false);
const spline = ref<Application>();

onMounted(() => {
  if (canvas.value) {
    spline.value = new Application(canvas.value);

    setTimeout(async () => {
      await spline.value?.load('/spline/cube.splinecode');

      visible.value = true;
    }, 1000);
  }
});

onUnmounted(() => {
  spline.value?.dispose();
});
</script>

<template>
  <canvas ref="canvas" :class="['canvas', { visible }]" />
</template>

<style scoped lang="scss">
.canvas {
  position: absolute;
  inset: -50%;
  width: 200% !important;
  height: 200% !important;
  scale: 0.5;
  translate: 0 -6rem;
  pointer-events: none;
  transition: opacity 3s variables.$ease-in-out;

  &:not(&.visible) {
    opacity: 0;
  }

  @include screens.laptop {
    inset: 0;
    width: 100% !important;
    height: 100% !important;
    scale: 1;
    translate: 0;
    pointer-events: all;
  }
}
</style>

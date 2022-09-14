<!-- eslint-disable no-param-reassign -->
<script setup lang="ts">
import { Application, SPEObject } from '@splinetool/runtime';

const canvas = ref<HTMLCanvasElement>();
const visible = ref(false);

const loop = (cube: SPEObject) => {
  cube.rotation.z -= 0.003;
  cube.rotation.x -= 0.003;

  requestAnimationFrame(() => loop(cube));
};

onMounted(async () => {
  if (canvas.value) {
    const spline = new Application(canvas.value);
    await spline.load('/spline/cube.splinecode');

    visible.value = true;

    const cube = spline.findObjectByName('Cube');
    if (cube) {
      loop(cube);
    }
  }
});
</script>

<template>
  <canvas ref="canvas" :class="['canvas', { visible }]" />
</template>

<style scoped lang="scss">
@use 'styles/variables';

.canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transition: opacity 2s variables.$ease-in-out;

  &:not(&.visible) {
    opacity: 0;
  }
}
</style>

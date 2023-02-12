<script setup lang="ts">
import type Spline from '@splinetool/runtime';

const canvas = ref<HTMLCanvasElement>();
const visible = ref(false);
const spline = ref<Spline.Application>();
const isMobile = useIsMobile();

onMounted(async () => {
  if (window.innerWidth > 480 && canvas.value) {
    const { Application } = await import('@splinetool/runtime');
    spline.value = new Application(canvas.value);
    await spline.value?.load('/spline/cube.splinecode');

    visible.value = true;

    return;
  }

  setTimeout(() => {
    visible.value = true;
  }, 1000);
});

onUnmounted(() => {
  spline.value?.dispose();
});
</script>

<template>
  <img
    v-if="isMobile"
    :class="['image', { visible }]"
    src="/images/cube.webp"
    alt=""
    width="384"
    height="384"
  />
  <canvas v-else ref="canvas" :class="['canvas', { visible }]" />
</template>

<style scoped lang="scss">
.image {
  translate: 0 -4rem;
}

.image,
.canvas {
  position: absolute;
  transition: opacity 3s variables.$ease-in-out;
}

.image:not(.visible),
.canvas:not(.visible) {
  opacity: 0;
}
</style>

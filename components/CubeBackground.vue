<script setup lang="ts">
import { Application } from '@splinetool/runtime';

const canvas = ref<HTMLCanvasElement>();
const visible = ref(false);
const spline = ref<Application>();
const isMobile = useIsMobile();

onMounted(() => {
  if (window.innerWidth > 480 && canvas.value) {
    spline.value = new Application(canvas.value);

    setTimeout(async () => {
      await spline.value?.load('/spline/cube.splinecode');

      visible.value = true;
    }, 1000);

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
  <nuxt-img
    v-if="isMobile"
    :class="['image', { visible }]"
    src="/images/cube.webp"
    alt=""
    width="384"
    height="384"
    quality="100"
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

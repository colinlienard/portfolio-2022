<script setup lang="ts">
type Star = {
  x: number;
  px: number;
  y: number;
  py: number;
  z: number;
  brightness: number;
};

const props = defineProps<{ visible: boolean }>();

const canvas = ref<HTMLCanvasElement>();
const context = ref<CanvasRenderingContext2D>();
let width = 0;
let height = 0;
let stars: Star[] = [];

// Options
const speed = 0.0001;
const starsNumber = 200;

const createStar = () => {
  const x = Math.random() * width - width / 2;
  const y = Math.random() * height - height / 2;
  const z = Math.random() * 0.001;
  return {
    x,
    px: x,
    y,
    py: y,
    z,
    brightness: 0,
  };
};

const createStarField = (number: number) => {
  for (let i = 0; i < number; i += 1) {
    stars.push(createStar());
  }
};

const updateStars = () => {
  stars = stars.map((star) => {
    // If the star goes beyond the screen, create a new one
    if (
      star.x < -width / 2 ||
      star.x > width / 2 ||
      star.y < -height / 2 ||
      star.y > height / 2
    ) {
      return createStar();
    }

    // Else, update position and increase brightness
    const newStar = star;
    newStar.px = star.x;
    newStar.py = star.y;
    newStar.z += speed;
    newStar.x += star.x * star.z;
    newStar.y += star.y * star.z;
    newStar.brightness += 2;
    return newStar;
  });
};

const renderStars = () => {
  stars.forEach((star) => {
    (context.value as CanvasRenderingContext2D).strokeStyle =
      star.brightness > 255
        ? 'white'
        : `rgb(${star.brightness},${star.brightness},${star.brightness})`;

    context.value?.beginPath();
    context.value?.moveTo(star.px + width / 2, star.py + height / 2);
    context.value?.lineTo(star.x + width / 2, star.y + height / 2);
    context.value?.stroke();
  });
};

const clear = () => {
  context.value?.clearRect(0, 0, width, height);
};

const loop = () => {
  clear();

  updateStars();

  renderStars();

  window.requestAnimationFrame(loop);
};

onMounted(() => {
  if (canvas.value) {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.value.width = width;
    canvas.value.height = height;

    context.value = canvas.value?.getContext('2d') as CanvasRenderingContext2D;

    createStarField(starsNumber);

    loop();
  }
});
</script>

<template>
  <canvas ref="canvas" :class="['canvas', { visible: props.visible }]"></canvas>
</template>

<style scoped lang="scss">
.canvas {
  position: absolute;
  z-index: 1;
  pointer-events: none;
  opacity: 0;
  transition: opacity 4s ease-in-out;

  &.visible {
    opacity: 1;
  }
}
</style>

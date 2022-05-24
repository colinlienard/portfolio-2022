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
const animate = ref(false);
let width = 0;
let height = 0;
let stars: Star[] = [];
let speed = 0;
let timeout: NodeJS.Timeout;

// Options
const maxSpeed = 0.0005;
const starsNumber = 300;

const createStar = () => {
  const x = Math.random() * width - width / 2;
  const y = Math.random() * height - height / 2;
  const z = Math.random() * 0.01;
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
  // Handle speed
  if (props.visible && speed < maxSpeed) {
    speed += 0.000001;
  } else if (!props.visible && speed > 0) {
    speed = 0;
  }

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

  if (animate.value) {
    window.requestAnimationFrame(loop);
  }
};

const updateSize = () => {
  if (canvas.value) {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.value.width = width;
    canvas.value.height = height;
  }
};

onMounted(() => {
  if (canvas.value) {
    updateSize();

    window.addEventListener('resize', updateSize);

    context.value = canvas.value?.getContext('2d') as CanvasRenderingContext2D;

    createStarField(starsNumber);
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', updateSize);
});

onUpdated(() => {
  if (props.visible) {
    clearTimeout(timeout);
    if (!animate.value) {
      animate.value = true;
      speed = 0;
      loop();
    }
  } else {
    timeout = setTimeout(() => {
      animate.value = false;
    }, 4000);
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
  transition: opacity 2s 2s ease-in-out;

  &.visible {
    opacity: 1;
    transition: opacity 2s ease-in-out;
  }
}
</style>

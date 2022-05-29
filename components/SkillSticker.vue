<script setup lang="ts">
defineProps<{
  source: string;
  x: number;
  y: number;
}>();

const maxTilt = 40;
const tilt = Math.round(Math.random() * maxTilt - maxTilt / 2);
</script>

<template>
  <img class="skill" :src="`/icons/${source}.svg`" alt="" />
</template>

<style scoped lang="scss">
@use '../styles/screens';
@use '../styles/variables';

@keyframes appear {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(calc(v-bind(tilt) * 1deg))
      scale(1.2);
  }

  to {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(calc(v-bind(tilt) * 1deg)) scale(1);
  }
}

.skill {
  position: absolute;
  top: calc(v-bind(y) * 1px);
  left: calc(v-bind(x) * 1px);
  transform: translate(-50%, -50%) rotate(calc(v-bind(tilt) * 1deg));
  height: 4rem;
  pointer-events: none;
  animation: appear 0.2s variables.$ease-in-out;

  @include screens.laptop {
    height: 6rem;
  }
}
</style>

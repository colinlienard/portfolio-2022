<script setup lang="ts">
defineProps<{
  source: string;
  x: number;
  y: number;
}>();

const maxTilt = 40;
const tilt = Math.round(Math.random() * maxTilt - maxTilt / 2);
const isMobile = useIsMobile();
</script>

<template>
  <img
    class="skill"
    :src="`/images/skills/${source}`"
    alt=""
    :width="isMobile ? 64 : 100"
    :height="isMobile ? 64 : 100"
  />
</template>

<style scoped lang="scss">
@keyframes appear {
  from {
    opacity: 0;
    scale: 1.2;
  }

  to {
    opacity: 1;
    scale: 1;
  }
}

.skill {
  position: absolute;
  top: calc(v-bind(y) * 1px);
  left: calc(v-bind(x) * 1px);
  translate: -50% -50%;
  rotate: calc(v-bind(tilt) * 1deg);
  width: auto;
  pointer-events: none;
  animation: appear 0.2s variables.$ease-in-out;
}
</style>

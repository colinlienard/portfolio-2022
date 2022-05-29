<script setup lang="ts">
defineProps<{
  source: string;
  x: number;
  y: number;
}>();
</script>

<template>
  <img class="skill" :src="`/icons/${source}.svg`" alt="" />
</template>

<style scoped lang="scss">
.skill {
  position: absolute;
  top: calc(v-bind(y) * 1px);
  left: calc(v-bind(x) * 1px);
  transform: translate(-50%, -50%);
}
</style>

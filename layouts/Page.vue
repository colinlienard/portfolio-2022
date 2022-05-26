<script setup lang="ts">
// @ts-ignore
import LocomotiveScroll from 'locomotive-scroll';

const container = ref();
const scroll = ref();

provide('scroll', scroll);

watch(container, () => {
  if (container.value) {
    setTimeout(() => {
      scroll.value = new LocomotiveScroll({
        el: container.value,
        smooth: true,
        multiplier: 0.8,
      });
    }, 100);
  }
});

onUnmounted(() => {
  scroll.value.destroy();
});
</script>

<template>
  <main ref="container" class="main">
    <slot />
  </main>
</template>

<style scoped lang="scss">
@use '../styles/screens';

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;

  @include screens.laptop {
    gap: 14rem;
  }
}
</style>

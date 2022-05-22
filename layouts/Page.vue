<script setup lang="ts">
// @ts-ignore
import LocomotiveScroll from 'locomotive-scroll';

const scroll = ref();

provide('scroll', scroll);

onMounted(() => {
  scroll.value = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 0.8,
  });
});
</script>

<template>
  <main class="main" data-scroll-container>
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

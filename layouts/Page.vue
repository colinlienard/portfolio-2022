<script setup lang="ts">
const scroll = ref();
const cursorContent = ref<string | null>();
const isMobile = useIsMobile();

provide('scroll', scroll);
provide('cursor', cursorContent);

onMounted(() => {
  setTimeout(async () => {
    // @ts-ignore
    const locomotiveScroll = await import('locomotive-scroll');
    // eslint-disable-next-line new-cap
    scroll.value = new locomotiveScroll.default({
      el: document.querySelector('#main'),
      smooth: true,
      multiplier: 0.8,
    });
  }, 300);
});

onUnmounted(() => {
  scroll.value.destroy();
});
</script>

<template>
  <main id="main" class="main">
    <CustomCursor v-if="!isMobile" />
    <slot />
  </main>
</template>

<style scoped lang="scss">
@use '../styles/screens';

.main {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;

  @include screens.laptop {
    gap: 14rem;
  }
}
</style>

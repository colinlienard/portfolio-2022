<script setup lang="ts">
const scroll = ref();
const cursorContent = ref<string | null>();
const isMobile = useIsMobile();

provide('scroll', scroll);
provide('cursor', cursorContent);

onMounted(async () => {
  const { default: LocomotiveScroll } = await import('locomotive-scroll');
  scroll.value = new LocomotiveScroll({
    el: document.querySelector('#main') as HTMLElement,
    smooth: true,
    multiplier: 0.8,
    reloadOnContextChange: true,
  });
});

onUnmounted(() => {
  scroll.value.destroy();
});
</script>

<template>
  <main id="main" class="main">
    <BaseNavbar />
    <CustomCursor v-if="!isMobile" />
    <slot />
  </main>
</template>

<style scoped lang="scss">
.main {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
  overflow: hidden;

  @include screens.laptop {
    gap: 16rem;
  }
}
</style>

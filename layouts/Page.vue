<script setup lang="ts">
const scroll = ref();
const cursorContent = ref<string | null>();
const isMobile = useIsMobile();
// const route = useRoute();

provide('scroll', scroll);
provide('cursor', cursorContent);

onMounted(() => {
  setTimeout(async () => {
    const LocomotiveScroll = await import('locomotive-scroll');
    // eslint-disable-next-line new-cap
    scroll.value = new LocomotiveScroll.default({
      el: document.querySelector('#main') as HTMLElement,
      smooth: true,
      multiplier: 0.8,
      reloadOnContextChange: true,
      // initPosition: {
      //   x: 0,
      //   y:
      //     route.path === '/' && route.hash === ''
      //       ? parseInt(sessionStorage.getItem('scroll-position'),10) || 0
      //       : 0,
      // },
    });

    // scroll.value.on('scroll', (event: any) => {
    //   sessionStorage.setItem('scroll-position', event.scroll.y);
    // });
  }, 1000);
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

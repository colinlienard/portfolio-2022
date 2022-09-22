<script setup lang="ts">
const scroll = ref();
const cursorContent = ref<string | null>();
const isMobile = useIsMobile();
const route = useRoute();

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
      reloadOnContextChange: true,
      initPosition: {
        x: 0,
        y:
          route.path === '/' && route.hash === ''
            ? sessionStorage.getItem('scroll-position') || 0
            : 0,
      },
    });

    scroll.value.on('scroll', (event: any) => {
      sessionStorage.setItem('scroll-position', event.scroll.y);
    });
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
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s variables.$ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

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

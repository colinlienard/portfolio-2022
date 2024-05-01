<script setup lang="ts">
const { data: music, refresh } = await useFetch('/api/spotify-listening', {
  server: false,
});
let interval: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  interval = setInterval(refresh, 60000);
});

onUnmounted(() => {
  if (interval) {
    clearInterval(interval);
  }
});
</script>

<template>
  <aside :class="['spotify', { disabled: music === null }]">
    <img
      src="/icons/spotify.svg"
      alt=""
      class="icon"
      width="24"
      height="24"
      loading="lazy"
    />
    <a
      v-if="music"
      class="text"
      :href="music.link"
      target="_blank"
      rel="noreferrer"
      >{{ music.track }} • {{ music.artist }}</a
    >
    <p v-else class="text">Not playing • Spotify</p>
    <div v-if="music" class="music">
      <span />
      <span />
      <span />
      <span />
    </div>
  </aside>
</template>

<style scoped lang="scss">
@keyframes music {
  0% {
    clip-path: inset(70% 0 0 0);
  }

  60% {
    clip-path: inset(0 0 0 0);
  }

  100% {
    clip-path: inset(70% 0 0 0);
  }
}

.spotify {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;

  &.disabled {
    opacity: 0.6;
  }

  .text {
    text-align: center;
  }

  .music {
    width: 1em;
    height: 0.8em;
    display: flex;
    justify-content: space-between;

    span {
      width: 1px;
      height: 100%;
      background-color: variables.$grey;
      animation: music ease-in-out infinite;

      &:nth-of-type(1) {
        animation-duration: 1s;
        animation-delay: 0.3s;
      }

      &:nth-of-type(2) {
        animation-duration: 1.1s;
        animation-delay: 0s;
      }

      &:nth-of-type(3) {
        animation-duration: 0.9s;
        animation-delay: 0.2s;
      }

      &:nth-of-type(4) {
        animation-duration: 1s;
        animation-delay: 0.1s;
      }
    }
  }
}
</style>

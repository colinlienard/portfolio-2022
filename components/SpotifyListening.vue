<template>
  <aside class="spotify">
    <img src="/icons/spotify.svg" alt="" class="icon" width="24" height="24" />
    <p class="text">Like You Do • Joji</p>
    <div class="music">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </aside>
</template>

<style scoped lang="scss">
@use '../styles/variables';

@keyframes music {
  0% {
    clip-path: inset(75% 0 0 0);
  }

  50% {
    clip-path: inset(0 0 0 0);
  }

  100% {
    clip-path: inset(75% 0 0 0);
  }
}

.spotify {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;

  .music {
    width: 1em;
    height: 1em;
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

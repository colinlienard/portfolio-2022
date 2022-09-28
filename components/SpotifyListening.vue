<script setup lang="ts">
/* eslint-disable camelcase */
const music = ref<{ track: string; artist: string; link: string } | null>();
const config = useRuntimeConfig();
let interval: NodeJS.Timer | null = null;

const getMusic = async () => {
  // Get an access token
  const responseToken = await fetch(
    `https://accounts.spotify.com/api/token?grant_type=refresh_token&refresh_token=${config.public.spotifyRefreshToken}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(
          `${config.public.spotifyClientId}:${config.public.spotifyClientSecret}`
        )}`,
      },
    }
  );
  if (!responseToken.ok) {
    return;
  }
  const { access_token } = await responseToken.json();

  // Use the access token to fetch data
  const response = await fetch(
    'https://api.spotify.com/v1/me/player/currently-playing',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  if (response.ok) {
    try {
      const { item } = await response.json();

      const track = item.name;
      const artist = item.artists.reduce(
        (previous: string, current: any) =>
          `${previous ? `${previous}, ` : ''}${current.name}`,
        ''
      );
      const link = item.external_urls.spotify;

      music.value = {
        track,
        artist,
        link,
      };
    } catch {
      music.value = null;
    }
  }
};

onMounted(() => {
  getMusic();

  interval = setInterval(getMusic, 60000);
});

onUnmounted(() => {
  clearInterval(interval as NodeJS.Timer);
});
</script>

<template>
  <aside :class="['spotify', { disabled: music === null }]">
    <NuxtImg
      src="/icons/spotify.svg"
      alt=""
      class="icon"
      width="24"
      height="24"
      quality="100"
    />
    <a
      v-if="music"
      class="text"
      :href="music.link"
      target="_blank"
      rel="noreferrer"
      >{{ music.track }} • {{ music.artist }}</a
    >
    <p v-else class="text">Actuellement inactif • Spotify</p>
    <div v-if="music" class="music">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
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

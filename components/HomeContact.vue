<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
  <NuxtLayout id="contact" name="section">
    <h2 class="hero">
      <span class="stroke">Me </span>contact<span class="stroke">er</span>
    </h2>
    <div class="galaxy">
      <div class="orbit orbit-1">
        <span class="circle" />
        <a
          class="icon icon-1"
          :href="config.public.githubLink"
          target="_blank"
          rel="norefferer"
        >
          <img src="/icons/github.svg" alt="" />
        </a>
        <a
          class="icon icon-2"
          :href="config.public.maltLink"
          target="_blank"
          rel="norefferer"
        >
          <img src="/icons/malt.svg" alt="" />
        </a>
        <a
          class="icon icon-3"
          :href="config.public.email"
          target="_blank"
          rel="norefferer"
        >
          <img src="/icons/email.svg" alt="" />
        </a>
      </div>
      <div class="orbit orbit-2">
        <span class="circle" />
        <a
          class="icon icon-1"
          :href="config.public.linkedinLink"
          target="_blank"
          rel="norefferer"
        >
          <img src="/icons/linkedin.svg" alt="" />
        </a>
        <a
          class="icon icon-2"
          :href="config.public.redditLink"
          target="_blank"
          rel="norefferer"
        >
          <img src="/icons/reddit.svg" alt="" />
        </a>
      </div>
      <nuxt-img
        class="image"
        src="/images/colin.webp"
        alt=""
        sizes="mobile:160px tablet:128px"
        width="128"
        height="128"
        quality="100"
      />
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
/* stylelint-disable no-descending-specificity */

@keyframes rotate {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}

@keyframes anti-rotate {
  from {
    rotate: 0deg;
  }

  to {
    rotate: -360deg;
  }
}

.hero {
  @include typography.heading-2;

  .stroke {
    @include mixins.text-stroke;
  }
}

.galaxy {
  width: min(100%, 40rem);
  aspect-ratio: 1 / 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .orbit {
    aspect-ratio: 1 / 1;
    position: absolute;
    animation: rotate linear infinite;
  }

  .icon {
    position: absolute;
    z-index: 1;
    animation: anti-rotate linear infinite;
    transition: scale 0.3s variables.$ease-in-out;

    &:hover {
      scale: 0.9;
    }

    img {
      pointer-events: none;
    }
  }

  .image {
    position: absolute;
    border-radius: 50%;
  }
}

.orbit-1 {
  width: 100%;

  &,
  .icon {
    animation-duration: 100s !important;
  }

  .circle {
    @include mixins.dashed-circle(
      conic-gradient(
        variables.$blue,
        transparent,
        transparent,
        variables.$green,
        transparent,
        color.mix(variables.$blue, variables.$green, 50%),
        transparent,
        variables.$blue
      )
    );

    pointer-events: none;
  }

  .icon-1 {
    top: 6%;
    left: 13%;
  }

  .icon-2 {
    top: 76%;
    left: 84%;
  }

  .icon-3 {
    top: 70%;
    left: 2%;
  }
}

.orbit-2 {
  width: 70%;

  &,
  .icon {
    animation-duration: 70s !important;
  }

  .circle {
    @include mixins.dashed-circle(
      conic-gradient(
        variables.$blue,
        transparent,
        variables.$green,
        variables.$green,
        transparent,
        transparent,
        color.mix(variables.$blue, variables.$green, 50%),
        variables.$blue
      )
    );
  }

  .icon-1 {
    top: -2%;
    left: 63%;
  }

  .icon-2 {
    top: 93%;
    left: 44%;
  }
}
</style>

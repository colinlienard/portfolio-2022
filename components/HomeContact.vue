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
          title="GitHub"
        >
          <img src="/icons/github.svg" alt="" />
        </a>
        <a
          class="icon icon-2"
          :href="config.public.maltLink"
          target="_blank"
          rel="norefferer"
          title="Malt"
        >
          <img src="/icons/malt.svg" alt="" />
        </a>
        <CopyButton class="icon icon-3" :to-copy="config.public.email">
          <img src="/icons/email.svg" alt="" />
        </CopyButton>
      </div>
      <div class="orbit orbit-2">
        <span class="circle" />
        <a
          class="icon icon-1"
          :href="config.public.linkedinLink"
          target="_blank"
          rel="norefferer"
          title="LinkedIn"
        >
          <img src="/icons/linkedin.svg" alt="" />
        </a>
        <a
          class="icon icon-2"
          :href="config.public.redditLink"
          target="_blank"
          rel="norefferer"
          title="Reddit"
        >
          <img src="/icons/reddit.svg" alt="" />
        </a>
      </div>
      <NuxtImg
        class="image"
        src="/images/colin-small.webp"
        alt=""
        sizes="mobile:64px tablet:128px"
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
  width: min(calc(100% - 2rem), 40rem);
  aspect-ratio: 1 / 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  .orbit {
    aspect-ratio: 1 / 1;
    position: absolute;
    animation: rotate linear infinite;
  }

  .icon {
    position: absolute;
    translate: -50% -50%;
    z-index: 1;
    pointer-events: all;
    animation: anti-rotate linear infinite;
    transition: scale 0.3s variables.$ease-in-out;

    &:hover {
      scale: 0.9;
    }

    img {
      width: 2.5rem;
      pointer-events: none;

      @include screens.laptop {
        width: 4rem;
      }
    }
  }

  .image {
    position: absolute;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;

    @include screens.laptop {
      width: 8rem;
      height: 8rem;
    }
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
  }

  .icon-1 {
    top: 6%;
    left: 26%;
  }

  .icon-2 {
    top: 80%;
    left: 89%;
  }

  .icon-3 {
    top: 66%;
    left: 3%;
  }
}

.orbit-2 {
  width: calc(50% + 2rem);

  @include screens.laptop {
    width: calc(50% + 4rem);
  }

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
    top: 3%;
    left: 65%;
  }

  .icon-2 {
    top: 99%;
    left: 54%;
  }
}
</style>

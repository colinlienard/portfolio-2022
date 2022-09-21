<script setup lang="ts">
defineProps<{
  image: string;
  color: string;
}>();
</script>

<template>
  <header class="header-container">
    <span class="background" :style="`background-color: ${color};`" />
    <div class="image-container">
      <nuxt-img
        class="image"
        :src="`/images/projects/${image}`"
        alt=""
        sizes="mobile:480px tablet:1024px"
        quality="100"
      />
      <NuxtLink class="back" to="/">
        <img src="/icons/arrow.svg" alt="" />
      </NuxtLink>
    </div>
    <slot name="hero" />
    <slot name="links" />
  </header>
</template>

<style lang="scss">
.header-container {
  @include mixins.section-width;
  @include mixins.mobile-padding;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  padding-top: 5rem;

  @include screens.laptop {
    padding: 6rem 0 0;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    z-index: -1;

    @include screens.laptop {
      left: -31rem;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 13.4rem;
      left: 0;
      width: 100%;
      height: 6rem;
      background-image: linear-gradient(
        transparent,
        rgba(variables.$dark, 0.5)
      );

      @include screens.laptop {
        bottom: 24.4rem;
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 14.5rem;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: variables.$dark;

      @include screens.laptop {
        top: 28.4rem;
      }
    }
  }

  .image-container {
    position: relative;
    translate: 0 3.5rem;

    @include screens.laptop {
      translate: 0 4.5rem;
    }

    .back {
      width: 2.25rem;
      aspect-ratio: 1 / 1;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: variables.$white;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 0;
      translate: -50% -50%;
      transition: scale 0.3s variables.$ease-in-out;

      @include screens.laptop {
        width: 4rem;
      }

      &:hover {
        scale: 0.9;
      }

      img {
        filter: invert(1);
        rotate: 90deg;
        width: min(1.5rem, 50%);
        pointer-events: none;
      }
    }
  }

  h1 {
    @include typography.heading-1;

    text-align: center;
    width: 100%;
    z-index: 1;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 1rem;

    @include screens.laptop {
      gap: 2rem;
    }

    li a {
      @include mixins.link;
    }
  }
}
</style>

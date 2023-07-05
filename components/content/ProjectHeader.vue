<script setup lang="ts">
defineProps<{
  image: string;
}>();

const { path } = useRoute();

const { data } = await useAsyncData(path, () =>
  queryContent('/projects/').where({ _path: path }).find(),
);
</script>

<template>
  <header class="header-container">
    <div class="image-container">
      <span
        class="background"
        :style="`background-color: #${data && data[0].color};`"
      />
      <div class="image-wrapper">
        <img
          class="image"
          :src="`/images/projects/${image}`"
          alt=""
          width="1024"
          height="576"
        />
      </div>
      <PageLink class="back" to="/">
        <img class="icon" src="/icons/arrow.svg" alt="" />
      </PageLink>
    </div>
    <slot name="hero" />
    <slot name="links" />
  </header>
</template>

<style lang="scss">
@keyframes image {
  0% {
    opacity: 0;
    translate: 0 2rem;
  }

  25% {
    opacity: 0;
    translate: 0 2rem;
  }

  100% {
    opacity: 1;
    translate: 0;
  }
}

@keyframes back {
  0% {
    scale: 0;
  }

  75% {
    scale: 0;
  }

  100% {
    scale: 1;
  }
}

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

  .image-container {
    position: relative;
    translate: 0 3.25rem;

    @include screens.laptop {
      translate: 0 4.5rem;
    }

    &::before {
      content: '';
      position: absolute;
      inset: 50% -50vw 0;
      background-color: variables.$dark;
      z-index: -1;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0 -50vw;
      background-image: linear-gradient(transparent, variables.$dark);
      z-index: -1;
    }

    .background {
      position: absolute;
      inset: -16rem -50vw 0;
      z-index: -2;
    }

    .image-wrapper {
      width: min(100%, 64rem);
      aspect-ratio: 16 / 9;

      .image {
        height: 100%;
        animation: image 1.5s variables.$ease-in-out;
      }
    }

    .back {
      width: 3rem;
      aspect-ratio: 1 / 1;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: variables.$white;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 50%;
      translate: -50% -50%;
      transition: scale 0.3s variables.$ease-in-out;
      animation: back 2s variables.$ease-in-out;

      @include screens.laptop {
        width: 4rem;
        top: 50%;
        left: 0;
      }

      &:hover {
        scale: 0.9;
      }

      .icon {
        filter: invert(1);
        rotate: 90deg;
        pointer-events: none;
        width: 1rem;

        @include screens.laptop {
          width: 1.5rem;
        }
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
    gap: 0.5rem;

    @include screens.laptop {
      gap: 1rem;
    }

    li a {
      @include mixins.link;
    }
  }
}
</style>

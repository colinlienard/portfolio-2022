<script setup lang="ts">
const isMobile = useIsMobile();
const { data } = await useAsyncData('milestones', async () =>
  queryContent('/milestones').findOne()
);
</script>

<template>
  <NuxtLayout name="section">
    <SkillsContainer />
    <figure id="about" class="figure">
      <figcaption v-if="isMobile">
        <h2 class="hero">À propos <span class="empty">de moi</span></h2>
      </figcaption>
      <NuxtImg
        class="image"
        src="/images/colin.webp"
        alt=""
        sizes="mobile:160px tablet:256px"
        quality="100"
      />
      <figcaption class="figcaption">
        <h2 v-if="!isMobile" class="hero">
          À propos <span class="empty">de moi</span>
        </h2>
        <p class="paragraph">
          Je suis un <strong>webdesigner</strong> et un
          <strong>développeur front-end</strong> fraîchement diplômé,
          actuellement basé à Limoges.<br /><br />Passionné par la
          <strong>création d’interfaces</strong>️, aussi bien par le côté
          graphique que par le développement, j’adore tester des
          <strong>nouvelles tendances et technologies</strong
          >.<br /><br />J’essaie aussi de créer des projets cools sur mon temps
          libre !<br /><br />Pour découvrir mes compétences,
          <strong>cliquez n’importe où</strong>...
        </p>
      </figcaption>
    </figure>
    <ul
      v-if="data"
      class="list"
      data-scroll
      data-scroll-class="visible"
      :data-scroll-offset="isMobile ? '0' : '25%'"
    >
      <li class="timeline"></li>
      <li
        v-for="(milestone, index) in data.milestones"
        :key="index"
        class="list-item"
      >
        <span class="circle"></span>
        <div class="content">
          <h3 class="title">{{ milestone.start }} - {{ milestone.end }}</h3>
          <p class="description">
            <strong>{{ milestone.name }}</strong>
          </p>
          <p class="sub">
            <strong>{{ milestone.description }}</strong>
          </p>
        </div>
      </li>
      <li class="list-item">
        <span class="circle full"></span>
        <div class="content">
          <h3 class="title">2022 - 202x</h3>
          <div class="description-wrapper">
            <p class="description">Open to work!</p>
            <img class="arrow" src="/icons/arrow.svg" alt="" />
            <a
              class="button"
              href="/media/colin-lienard-cv.pdf"
              target="_blank"
            >
              Télécharger mon CV
            </a>
            <p>/</p>
            <a
              class="button"
              href="/media/colin-lienard-cv-en.pdf"
              target="_blank"
            >
              Download my CV
            </a>
          </div>
          <p class="sub">La Rochelle, Bordeaux ou Limoges</p>
        </div>
      </li>
    </ul>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.figure {
  @include mixins.section;

  padding: 0;

  @include screens.laptop {
    flex-direction: row;

    .figcaption {
      display: flex;
      flex-direction: column;
      gap: 4rem;
      width: min-content;

      .hero {
        white-space: nowrap;
      }
    }
  }

  .hero {
    @include typography.heading-2;

    .empty {
      @include mixins.text-stroke;
    }
  }

  .image {
    border-radius: 99rem;
  }

  .paragraph {
    @include typography.paragraph;

    color: variables.$grey;

    strong {
      color: variables.$white;
    }
  }
}

.list {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;
  z-index: 2;
  pointer-events: none;

  @include screens.laptop {
    gap: 8rem;
    right: 2.5rem;
  }

  .timeline {
    position: absolute;
    top: 2rem;
    bottom: 2rem;
    left: calc(1rem - 1px);
    width: 2px;
    background-image: linear-gradient(
      to bottom,
      variables.$blue,
      variables.$green
    );
    z-index: -1;
    clip-path: inset(0 0 100% 0);
    transition: clip-path 1.5s variables.$ease-in-out;

    @include screens.laptop {
      left: calc(1.5rem - 1px);
      top: -6rem;
    }
  }

  .list-item {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @include screens.laptop {
      gap: 3rem;
    }

    .circle {
      flex: 0 0 auto;
      width: 2rem;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background-color: variables.$dark;
      border: 2px solid variables.$white;
      scale: 0;
      transition: scale 0.5s 0.25s variables.$ease-in-out;

      @include screens.laptop {
        width: 3rem;
      }

      &.full {
        background-color: variables.$white;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      opacity: 0;
      translate: 0 1rem;
      transition: 0.5s 0.25s variables.$ease-in-out;

      .title {
        @include typography.heading-3;
      }

      .description-wrapper {
        display: flex;
        align-items: center;
        gap: 1em;

        .arrow {
          rotate: -90deg;
        }

        .button {
          @include mixins.blink;

          pointer-events: all;
        }
      }

      .sub {
        color: variables.$grey;
      }
    }

    &:nth-of-type(2) * {
      transition-delay: 0.5s;
    }

    &:nth-of-type(3) * {
      transition-delay: 0.75s;
    }

    &:nth-of-type(4) * {
      transition-delay: 1s;
    }
  }

  &.visible {
    .timeline {
      clip-path: inset(0);
    }

    .list-item {
      .circle {
        scale: 1;
      }

      .content {
        translate: 0;
        opacity: 1;
      }
    }
  }
}
</style>

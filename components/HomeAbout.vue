<script setup lang="ts">
const isMobile = useIsMobile();
</script>

<template>
  <NuxtLayout id="about" name="section">
    <figure class="figure">
      <figcaption v-if="isMobile">
        <h2 class="hero">À propos de moi</h2>
      </figcaption>
      <img src="/images/colin.webp" alt="" class="image" />
      <figcaption class="figcaption">
        <h2 v-if="!isMobile" class="hero">À propos de moi</h2>
        <p class="paragraph">
          Je suis un <strong>webdesigner</strong> 🎨 et un
          <strong>développeur front-end</strong> ⚡ fraîchement diplômé,
          actuellement basé à Limoges.<br /><br />Passioné de la
          <strong>création d’interface</strong> 🖥️, aussi bien par le côté
          graphique que par le développement, j’adore tester des
          <strong>nouvelles tendances et technologies</strong
          >.<br /><br />J’essaie aussi de créer des projets cools ✨👀 sur mon
          temps libre !<br /><br />Pour découvrir mes compétences,
          <strong>cliquez n’importe où</strong>...
        </p>
      </figcaption>
    </figure>
    <ul class="list">
      <li class="timeline"></li>
      <li class="list-item">
        <span class="circle"></span>
        <div class="content">
          <h3 class="title">2019 - 2021</h3>
          <p class="description">DUT Métiers du Multimédia et de l’Internet</p>
          <p class="sub">Limoges</p>
        </div>
      </li>
      <li class="list-item">
        <span class="circle"></span>
        <div class="content">
          <h3 class="title">2021 - 2022</h3>
          <p class="description">
            Licence professionnelle Métiers de l’Informatique Application Web
          </p>
          <p class="sub">La Rochelle, Limoges</p>
        </div>
      </li>
      <li class="list-item">
        <span class="circle full"></span>
        <div class="content">
          <h3 class="title">2022 - 202x</h3>
          <div class="description-wrapper">
            <p class="description">Open to work!</p>
            <span class="line"></span>
            <button class="button">Télécharger mon CV</button>
          </div>
          <p class="sub">La Rochelle, Limoges ou autres</p>
        </div>
      </li>
    </ul>
  </NuxtLayout>
</template>

<style scoped lang="scss">
@use '../styles/mixins';
@use '../styles/screens';
@use '../styles/typography';
@use '../styles/variables';

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
  }

  .image {
    width: 10rem;
    border-radius: 99rem;

    @include screens.laptop {
      width: 16rem;
    }
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

  @include screens.laptop {
    gap: 8rem;
    right: 2rem;
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

      .title {
        @include typography.heading-3;

        @include screens.laptop {
          transform: translateX(-18rem);
        }
      }

      .description-wrapper {
        display: flex;
        align-items: center;
        gap: 1em;

        .line {
          width: 1em;
          height: 1px;
          background-color: variables.$white;
        }

        .button {
          @include mixins.blink;
        }
      }

      .sub {
        color: variables.$grey;
      }
    }
  }
}
</style>

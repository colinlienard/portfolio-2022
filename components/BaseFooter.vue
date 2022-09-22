<script setup lang="ts">
const config = useRuntimeConfig();
const scrollTo = useScrollTo();
const route = useRoute();

const handleScrollTo = (target: string) => {
  if (route.path === '/') {
    scrollTo(target);
    return;
  }

  navigateTo(`/${target}`);
};
</script>

<template>
  <NuxtLayout name="section">
    <footer class="footer">
      <SpotifyListening />
      <div class="links-list">
        <ul class="list">
          <li>
            <button class="button" @click="handleScrollTo('#portfolio')">
              Portfolio
            </button>
          </li>
          <li>
            <button class="button" @click="handleScrollTo('#about')">
              À propos
            </button>
          </li>
          <li>
            <button class="button" @click="handleScrollTo('#contact')">
              Contact
            </button>
          </li>
        </ul>
        <ul class="list">
          <li>
            <a class="button" :href="config.public.githubLink" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              class="button"
              :href="config.public.linkedinLink"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <CopyButton :to-copy="config.public.email">
              {{ config.public.email }}
            </CopyButton>
            <!-- <a class="button" :href="config.public.email">
              contact@colin-lienard.fr
            </a> -->
          </li>
        </ul>
        <ul class="list">
          <li>
            <button class="button">Mentions légales</button>
          </li>
        </ul>
      </div>
      <p class="copyright">
        © Copyright 2022 - Tous droits réservés, Colin Lienard
      </p>
    </footer>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 2rem;

  @include screens.laptop {
    gap: 6rem;
    padding-bottom: 4rem;
  }

  .title {
    @include typography.heading-3;

    text-align: center;
  }

  .links-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @include screens.laptop {
      display: grid;
      grid-template-columns: repeat(3, 16rem);
    }

    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      .button {
        text-align: center;
        color: variables.$grey;
        transition: color 0.3s ease-in-out;

        &:hover {
          color: variables.$white;
        }
      }
    }
  }

  .copyright {
    color: variables.$grey;
    text-align: center;
  }
}
</style>

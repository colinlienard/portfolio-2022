<template>
  <NuxtLayout name="section">
    <footer class="footer">
      <SpotifyListening />
      <article class="links-list">
        <ul class="list">
          <li>
            <button class="button">Portfolio</button>
          </li>
          <li>
            <button class="button">À propos</button>
          </li>
          <li>
            <button class="button">Contact</button>
          </li>
        </ul>
        <ul class="list">
          <li>
            <a
              class="button"
              href="https://github.com/ColinLienard"
              target="_blank"
              >GitHub</a
            >
          </li>
          <li>
            <a
              class="button"
              href="https://www.linkedin.com/in/colin-lienard-83490a1a4/"
              target="_blank"
              >LinkedIn</a
            >
          </li>
          <li>
            <a class="button" href="mailto:colin.lienard87@orange.fr"
              >colin.lienard87@orange.fr</a
            >
          </li>
        </ul>
        <ul class="list">
          <li>
            <button class="button">Mentions légales</button>
          </li>
        </ul>
      </article>
      <p class="copyright">
        © Copyright 2022 - Tous droits réservés, Colin Lienard
      </p>
    </footer>
  </NuxtLayout>
</template>

<style scoped lang="scss">
@use '../styles/screens';
@use '../styles/variables';

.footer {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 2rem;

  @include screens.laptop {
    gap: 6rem;
    padding-bottom: 4rem;
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

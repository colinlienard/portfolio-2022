<template>
  <NuxtLayout name="section">
    <footer class="footer">
      <aside class="spotify">
        <img src="/icons/spotify.svg" alt="" class="icon" />
        <p class="text">Like You Do • Joji</p>
        <div class="music">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </aside>
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

@keyframes music {
  0% {
    height: 10%;
  }

  50% {
    height: 100%;
  }

  100% {
    height: 10%;
  }
}

.footer {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 2rem;

  .spotify {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;

    .icon {
      width: 1.5em;
    }

    .music {
      width: 1em;
      height: 1em;
      transform: rotateX(180deg);

      span {
        width: 1px;
        height: 100%;
        background-color: variables.$grey;
        animation: music ease-in-out infinite;

        &:nth-of-type(1) {
          animation-duration: 1s;
          animation-delay: 0s;
        }

        &:nth-of-type(2) {
          animation-duration: 0.9s;
          animation-delay: 0.3s;
        }

        &:nth-of-type(3) {
          animation-duration: 1.1s;
          animation-delay: 0.2s;
        }

        &:nth-of-type(4) {
          animation-duration: 1s;
          animation-delay: 0.1s;
        }
      }
    }
  }

  .links-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;

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

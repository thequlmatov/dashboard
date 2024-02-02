<template>
  <main class="main">
    <ul class="main_page__list">
      <li class="main_page__list__item">
          <img src="../img/icon.svg" alt="">
          <p>
            <router-link to="/dashboard">Dashboard</router-link>
          </p>

      </li>
      <li class="main_page__list__item">
        <a href="#">
          <img src="../img/icon.svg" alt="">
          <p>Rooms</p>
        </a>
      </li>
      <li class="main_page__list__item">
        <a href="#">
          <img src="../img/icon.svg" alt="">
          <p>Groups</p>
        </a>
      </li>
      <li class="main_page__list__item">
        <a href="#">
          <img src="../img/icon.svg" alt="">
          <p>Teachers</p>
        </a>
      </li>
      <li class="main_page__list__item">
        <a href="#">
          <img src="../img/icon.svg" alt="">
          <p>Students</p>
        </a>
      </li>
    </ul>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .main {
    &_page__list {
      width: 137px;
      height: 100vh;
      background: #F5F5F5;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      &__item {
        padding: 20px;
      }
      &__item a {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: space-around;
        p {
          color: #000;
          font-family: "Space Mono";
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
        img {
          width: 50px;
        }
      }
    }
  }
</style>
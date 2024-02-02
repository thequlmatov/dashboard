<template>
   <header class="header">
    <nav class="site_nav">
      <a href="">
        <img src="../img/site-logo.png" alt="">
      </a>
      <h1> {{ fullName }} </h1>

    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      fullName: "Zuhriddin Qulmatov",
    }
  }
}
</script>

<style lang="scss">
  .header {
    height: 87px;
    width: 100%;
    .site_nav {
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #F5F5F5;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
;
      img {
        width: 80px;
        height: 80px;

      }
    }
  }
</style>
<template>
  <div class="footer">
    <router-link to="/"
      ><font-awesome-icon class="iconHome" :icon="['fas', 'home']"
    /></router-link>

    <router-link to="/Ajoutpost"
      ><font-awesome-icon class="iconPlus" :icon="['fas', 'plus-square']"
    /></router-link>

    <router-link to="/Perso"
      ><font-awesome-icon class="iconUser" :icon="['fas', 'user-circle']"
    /></router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;

  .iconHome {
    font-size: 20px;
  }

  .iconPlus {
    font-size: 20px;
  }

  .iconUser {
    font-size: 20px;
  }
}
</style>

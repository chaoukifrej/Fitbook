<template>
  <div class="footer">
    <router-link to="/"
      ><font-awesome-icon class="iconHome" :icon="['fas', 'home']"
    /></router-link>
    |
    <router-link to="/Ajoutpost"
      ><font-awesome-icon :icon="['fas', 'plus-square']"
    /></router-link>
    |
    <router-link to="/Perso"
      ><font-awesome-icon :icon="['fas', 'user-circle']"
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

  .iconHome {
    font-size: 20px;
  }
}
</style>

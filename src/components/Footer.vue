<template>
  <div class="footer">
    <router-link to="/FilActus"
      ><font-awesome-icon class="iconHome" :icon="['fas', 'home']"
    /></router-link>

    <span v-if="isConnected.is">
      <router-link to="/Ajoutpost"
        ><font-awesome-icon class="iconPlus" :icon="['fas', 'plus-square']"
      /></router-link>
    </span>
    <span v-else>
      <router-link to="/Connexion"
        ><font-awesome-icon class="iconPlus" :icon="['fas', 'plus-square']"
      /></router-link>
    </span>

    <router-link to="/PagePerso"
      ><font-awesome-icon class="iconUser" :icon="['fas', 'user-circle']"
    /></router-link>
  </div>
</template>

<script>
export default {
  inject: ["isConnected"],
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;

  .iconHome {
    font-size: 1.5rem;
    color: whitesmoke;
  }

  .iconPlus {
    font-size: 1.5rem;
    color: whitesmoke;
  }

  .iconUser {
    font-size: 1.5rem;
    color: whitesmoke;
  }
}
</style>

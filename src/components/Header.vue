<template>
  <div class="header">
    <router-link to="/FilActus">
      <img
        v-animate-css="{
          classes: 'bounceIn',
          delay: 500,
          duration: 1000,
        }"
        id="imgLogo"
        alt="logo FitBook"
        src="../assets/fitbookCoupe.png"
      />
    </router-link>
    <h4 v-show="$route.name == 'Actus' && isConnected.is">Fil d'actus</h4>
    <h4 v-show="$route.name == 'Perso' && isConnected.is">
      Ma page perso
    </h4>
    <h4 v-show="$route.name == 'User' && isConnected.is">
      Page perso
    </h4>
    <h4 v-show="$route.name == 'Contact' && isConnected.is">
      Contact et Infos
    </h4>
    <button
      v-show="
        !isConnected.is &&
          $route.name != 'Connexion' &&
          $route.name != 'Ajoutpost' &&
          $route.name != 'Comment' &&
          $route.name != 'Inscription'
      "
      class="connexion"
      @click.prevent="$router.push('Connexion')"
    >
      Connexion
    </button>
    <a
      v-show="
        $route.name == 'Ajoutpost' ||
          $route.name == 'Connexion' ||
          $route.name == 'Comment' ||
          $route.name == 'Inscription' ||
          $route.name == 'Modifprofil'
      "
      class="retour"
      href="#"
      @click.prevent="$router.go(-1)"
      ><span class="flecheRetour">←</span> Retour</a
    >
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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 15px;
  h4 {
    letter-spacing: 2px;
    color: rgb(185, 185, 185);
  }
  .connexion {
    font-size: 1.1rem;
    padding: 3px 15px;
    border: 2px solid #ff1616;
    background-color: transparent;
    border-radius: 5px;
    color: #ff1616;
    outline: none;
    transition: 0.4s;
    &:active {
      transform: scale(0.98);
      color: whitesmoke;
    }
  }
  .retour {
    color: whitesmoke;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.2rem;
    .flecheRetour {
      position: relative;
      top: -2px;
      font-size: 1.4rem;
    }
  }
  #imgLogo {
    margin-top: 3px;
    height: 35px;
  }
}

/* A modif  */
.displayNone {
  display: none;
}
</style>

<template>
  <div class="perso">
    <Header />
    <Footer />
    <div class="containerPerso">
      <div class="modPhoto">
        <div class="nometPrenom">
          <h3>Nom et prénom:</h3>
        </div>
        <div class="nbrPubli">
          <h3>Nombres de publications:</h3>
        </div>
        <div class="sport">
          <h3>Sport pratiqué:</h3>
        </div>
        <div class="description">
          <h3>Description:</h3>
        </div>
        <div class="ville">
          <h3>Ville:</h3>
        </div>
        <div class="salle">
          <h3>Salle de sport:</h3>
        </div>
        <label for="files">
          <div class="imgs"></div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
.containerPerso {
  .imgs {
    background-image: url("../assets/imgUtilisateur.png");
    background-size: cover;
    height: 15rem;
    border-radius: 50%;
    border: 1px solid #000000;
    opacity: 0.6;
  }
  .modPhoto {
    margin-top: 10px;
  }
}
</style>

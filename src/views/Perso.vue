<template>
  <div class="divPerso">
    <Header />
    <Footer />
    <div class="containerPerso">
      <div class="cardPerso">
        <div class="contenu">
          <p>Nom et prénom:</p>
          <p>Nombres de publications:</p>
          <p>Sport pratiqué:</p>
          <p>Description:</p>
          <p>Ville:</p>
          <p>Salle de sport:</p>
        </div>
        <div class="description">
          <p>Description:</p>
        </div>
        <label for="files">
          <div class="imgs"></div>
          <input
            accept=".jpeg,.png, .jpg"
            ref="img"
            @change="addPhoto"
            id="files"
            style="visibility:hidden;"
            type="file"
          />
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
  data: () => ({
    nom: "Jean",
    nbrPubli: "2",
    sport: "AquaPoney",
    description: "Je fais 1m75 pour 60kg",
    Ville: "Paris",
    Salle: "Fitness Park",
  }),
};
</script>

<style lang="scss">
.containerPerso {
  .description {
    display: flex;
    justify-content: end;
  }
  p {
    font-size: 0.7rem;
  }
  .contenu {
    margin-right: 0%;
    position: absolute;
    right: 70px;
  }
  .cardPerso {
    background-color: #232323;
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
    border: 1px solid #000000;
    border-radius: 3px;
    width: 90%;
    height: 200px;
    margin: 20px 5%;
    padding: 0 10px;
  }
  .imgs {
    background-image: url("../assets/imgUtilisateur.png");
    background-size: cover;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    border: 1px solid #000000;
    opacity: 0.6;
  }
}
</style>

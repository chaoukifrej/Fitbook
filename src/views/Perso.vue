<template>
  <div class="perso">
    <Header />
    <Footer />
    <div class="containerPerso">
      <h2>Page perso</h2>
      <div class="modPhoto">
        <div class="nometPrenom">
          <h3>Nom et prénom:</h3>
          <input type="text" />
        </div>
        <div class="nbrPubli">
          <h3>Nombres de publications:</h3>
          <select name="nbr de publi" id="selectNbrPubli">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>
        <div class="sport">
          <h3>Sport pratiqué:</h3>
          <select name="sport" id="selectSport">
            <option>muscu</option>
            <option>tennis</option>
            <option>foot</option>
            <option>boxe</option>
            <option>cross fit</option>
            <option>handball</option>
            <option>aqua poney</option>
          </select>
        </div>
        <div class="description">
          <h3>Description:</h3>
          <textarea name="message" cols="30" rows="5"></textarea>
        </div>
        <div class="ville">
          <h3>Ville:</h3>
          <input type="text" />
        </div>
        <div class="salle">
          <h3>Salle de sport:</h3>
          <select name="salle" id="selectSalle">
            <option>Basic-Fit</option>
            <option>FitLane</option>
            <option>Fitness Park</option>
          </select>
        </div>
        <label for="files">
          <div class="imgs">
            <input v-on="image" id="files" type="file" />
          </div>
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

<template>
  <div class="divPerso">
    <Header />
    <div class="containerPerso">
      <div class="cardPerso">
        <div class="contenu">
          <div class="haut">
            <img :src="img" alt="" />
            <div class="contenu">
              <p>{{ prenom }} {{ nom }}</p>
              <p><span>Nb de publications:</span> {{ nbrPubli }}</p>
              <p>Sport pratiqué</p>
              <p>Ville</p>
              <p>Salle de sport</p>
            </div>
          </div>
          <div class="description">
            <p>Description: <br />{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
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
    nom: "Onche",
    prenom: "Jean",
    nbrPubli: "2",
    sport: "AquaPoney",
    description: "Je fais 1m75 pour 60kg",
    Ville: "Paris",
    Salle: "Fitness Park",
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2F-TkKO4S3bFZU%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2FdfhYjIlWsO4%2Fs900-c-k-no-mo-rj-c0xffffff%2Fphoto.jpg&f=1&nofb=1",
  }),
};
</script>

<style lang="scss">
.containerPerso {
  p {
    font-size: 0.8rem;
    span {
      font-size: 0.8rem;
      font-style: italic;
      color: rgb(133, 133, 133);
    }
  }
  .contenu {
    display: flex;
    flex-direction: column;
    .haut {
      display: flex;
      justify-content: space-around;
    }
    .description {
      display: flex;
      justify-content: start;
    }
  }
  .cardPerso {
    background-color: #232323;
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
    border: 1px solid #000000;
    border-radius: 3px;
    width: 90%;
    margin: 20px 5%;
    padding: 10px;
  }
  img {
    background-image: url("../assets/imgUtilisateur.png");
    background-size: cover;
    height: 5rem;
    border-radius: 50%;
    border: 1px solid #000000;
    opacity: 0.6;
  }
}
</style>

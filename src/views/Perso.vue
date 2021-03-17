<template>
  <div class="divPerso">
    <Header />

    <button
      v-show="isConnected.is"
      class="btnModification"
      @click.prevent="$router.push('Modifprofil')"
    >
      Modifier profil
    </button>

    <button
      v-show="isConnected.is"
      class="btnDisconnect"
      @click="isConnected.is = false"
    >
      Se deconnecter
    </button>
    <div class="containerPerso">
      <div class="cardPerso">
        <div class="contenu">
          <div class="haut">
            <div class="image">
              <img :src="img" alt="" />
              <p>{{ nbrPubli }}<span> publications</span></p>
            </div>
            <div class="contenu">
              <p class="nom">{{ prenom }} {{ nom }}</p>
              <p class="optionelContent"><span>Mon sport</span> {{ sport }}</p>
              <p class="optionelContent"><span>Ville</span> {{ ville }}</p>
              <p class="optionelContent"><span>Ma salle </span> {{ salle }}</p>
            </div>
          </div>
          <div class="description">
            <p>{{ description }}</p>
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
  inject: ["isConnected"],
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
    ville: "Paris",
    salle: "Fitness Park",
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2F-TkKO4S3bFZU%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2FdfhYjIlWsO4%2Fs900-c-k-no-mo-rj-c0xffffff%2Fphoto.jpg&f=1&nofb=1",
  }),
};
</script>

<style lang="scss">
.btnDisconnect,
.btnModification {
  font-size: 0.9rem;
  padding: 3px 10px;
  margin: 0 15px;
  border: 2px solid whitesmoke;
  background-color: transparent;
  border-radius: 5px;
  color: whitesmoke;
  outline: none;
  transition: 0.4s;
  &:active {
    transform: scale(0.98);
  }
}
.containerPerso {
  .cardPerso {
    background-color: #232323;
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
    border: 1px solid #000000;
    border-radius: 3px;
    width: 98%;
    margin: 10px 1%;
    padding: 10px;
  }
  .contenu {
    width: 100%;
    .haut {
      display: flex;
      justify-content: space-around;
      img {
        height: 6rem;
        border-radius: 50%;
        border: 1px solid #000000;
        opacity: 0.6;
      }
      p {
        font-size: 0.9rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10%;
        justify-items: start;
        margin-bottom: 5px;
        span {
          font-size: 0.8rem;
          font-style: italic;
          color: rgb(133, 133, 133);
          justify-self: end;
        }
      }
      .nom {
        font-size: 1.2rem;
      }
    }
    .description {
      display: flex;
      justify-content: start;
    }
  }
}
</style>

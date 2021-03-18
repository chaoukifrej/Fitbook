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

    <button v-show="isConnected.is" class="btnDisconnect" @click="disconnect">
      Se deconnecter
    </button>
    <div class="containerPerso">
      <div class="cardPerso">
        <div class="contenu">
          <div class="haut">
            <div class="image">
              <img :src="profilePicture" alt="" />
            </div>
            <div class="droite">
              <p id="nom">
                <b class="prenom">{{ firstname }}</b> <b>{{ lastname }}</b>
              </p>
              <p class="optionelContent"><span>Ville</span> {{ city }}</p>
              <p class="optionelContent"><span>Age</span> {{ age }} ans</p>

              <p class="optionelContent">
                <span>Mon sport</span> {{ sports[0] }}
              </p>
              <p class="optionelContent">
                <span>Ma salle </span> {{ sportsHall }}
              </p>
              <p><span> Status</span>{{ status }}</p>
            </div>
          </div>
          <div class="description">
            <p>{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
    <Post />

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Post from "@/components/Post.vue";
export default {
  name: "Perso",
  inject: ["isConnected", "token", "disconnect"],
  components: {
    Header,
    Footer,
    Post,
  },
  data: () => ({
    firstname: "Jean",
    lastname: "Onche",
    age: 26,
    profilePicture:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2F-TkKO4S3bFZU%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2FdfhYjIlWsO4%2Fs900-c-k-no-mo-rj-c0xffffff%2Fphoto.jpg&f=1&nofb=1",
    city: "Bruxelles",
    description: "Je fais 1m75 pour 60kg",
    status: "Pro",
    sportsHall: "FitPoney",
    sports: ["AquaPoney"],
  }),
  mounted: async function() {
    const options = {
      method: "GET",
      headers: {
        Authorization: "bearer " + this.token.value,
      },
    };
    try {
      const response = await fetch(
        "https://fitbook-api.osc-fr1.scalingo.io/user?limit=8000",
        options
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
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
    padding: 20px 10px;
  }
  .contenu {
    width: 100%;
    .haut {
      display: flex;
      justify-content: space-around;
      img {
        height: 7rem;
        border-radius: 50%;
        border: 1px solid #000000;
      }
      .droite {
        width: 100%;
        p {
          font-size: 0.9rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 6%;
          justify-items: start;
          margin-bottom: 5px;
          span {
            font-size: 0.8rem;
            font-style: italic;
            color: rgb(133, 133, 133);
            justify-self: end;
          }
        }
        #nom {
          font-size: 1.2rem;
          grid-column: 1/3;
          .prenom {
            justify-self: end;
          }
        }
      }
    }
    .description {
      margin: 20px 0 0;
      display: flex;
      justify-content: start;
    }
  }
}
</style>

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
            <div
              class="image"
              :style="{ backgroundImage: 'url(' + profilePicture + ')' }"
            ></div>
            <div class="droite">
              <p id="nom">
                <b class="prenom">{{ firstname }}</b> <b>{{ lastname }}</b>
              </p>
              <p v-show="city" class="optionelContent">
                <span>Ville</span> {{ city }}
              </p>
              <p v-show="age" class="optionelContent">
                <span>Age</span> {{ age }} ans
              </p>

              <p v-show="sports[0]" class="optionelContent">
                <span>Mon sport</span> {{ sports[0] }}
              </p>
              <p v-show="sportsHall" class="optionelContent">
                <span>Ma salle </span> {{ sportsHall }}
              </p>
              <p v-show="status"><span> Status</span>{{ status }}</p>
            </div>
          </div>
          <div v-show="description" class="description">
            <p>{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-for="post in posts" :key="post._id">
      <Post :post="post" />
    </div>
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
    firstname: "",
    lastname: "",
    age: "",
    profilePicture: "",
    city: "",
    description: "",
    status: "",
    sportsHall: "",
    sports: [],
    posts: [],
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
      const data = await response.json();
      this.firstname = data.firstname;
      this.lastname = data.lastname;
      this.age = data.age;
      this.profilePicture = data.profilePicture;
      this.city = data.city;
      this.description = data.description;
      this.status = data.status;
      this.sportsHall = data.sportsHall;
      this.sports = data.sports;
      this.posts = data.posts;
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
    border-bottom: 1px solid #000;
    width: 100%;
    margin: 10px 0;
    padding: 20px 10px;
  }
  .contenu {
    width: 100%;
    .haut {
      display: flex;
      justify-content: space-around;
      .image {
        height: 6.5rem;
        width: 10rem;
        background-size: cover;
        border-radius: 5px;
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
      padding-top: 10px;
      margin: 10px 0 0;
      display: flex;
      justify-content: start;
      text-align: start;
    }
  }
}
</style>

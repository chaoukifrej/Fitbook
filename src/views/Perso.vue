<template>
  <div class="divPerso">
    <Header />
    <div
      v-animate-css="{
        classes: 'fadeIn',
        delay: 500,
        duration: 1000,
      }"
      class="maxContenu"
    >
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
      <div v-for="(post, index) in posts" :key="index">
        <Post
          v-animate-css="{
            classes: 'fadeInUp',
            duration: 1000,
          }"
          :post="post"
        />
      </div>
      <infinite-loading @infinite="infiniteHandler">
        <div class="NoMore" slot="no-more">Plus de posts</div>
      </infinite-loading>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Post from "@/components/Post.vue";
import InfiniteLoading from "vue-infinite-loading";
export default {
  name: "Perso",
  inject: [
    "isConnected",
    "token",
    "disconnect",
    "userIdLoggedIn",
    "userFistnameLoggedIn",
    "userLastnameLoggedin",
    "webApiLink"
  ],
  components: {
    Header,
    Footer,
    Post,
    InfiniteLoading,
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
    page: 0,
    posts: [],
  }),
  methods: {
    infiniteHandler($state) {
      const options = {
        method: "GET",
        headers: {
          Authorization: "bearer " + this.token.value,
        },
      };
      fetch(
        this.webApiLink + "user?limit=5&page=" +
          this.page,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data.posts);
          this.firstname = data.firstname;
          this.lastname = data.lastname;
          this.age = data.age;
          this.profilePicture = data.profilePicture;
          this.city = data.city;
          this.description = data.description;
          this.status = data.status;
          this.sportsHall = data.sportsHall;
          this.sports = data.sports;
          this.userIdLoggedIn.id = data._id;
          this.userFistnameLoggedIn.firstname = data.firstname;
          this.userLastnameLoggedin.lastname = data.lastname;
          if (data.posts.length) {
            this.page++;
            this.posts.push(...data.posts);
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    },
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

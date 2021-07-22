<template>
  <div class="connexion">
    <Header />
    <div
      v-animate-css="{
        classes: 'pulse',
        duration: 600,
      }"
      class="containerConnexion"
    >
      <h2>Connexion</h2>
      <form @submit.prevent="connexion">
        <div class="email">
          <float-label>
            <input
              v-autofocus
              v-model="email"
              type="email"
              placeholder="Email"
              required
            />
          </float-label>
        </div>
        <div class="mdp">
          <float-label>
            <input
              v-model="password"
              type="password"
              name="mdp"
              id="mdp"
              placeholder="Mot de passe"
              required
            />
          </float-label>
        </div>
        <input type="submit" @click="connexion" value="Se connecter" />
        <router-link class="toInscription" to="/Inscription">
          <span>Pas de compte ?</span> Je m'inscris</router-link
        >
      </form>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "Connexion",
  inject: ["isConnected", "token", "connect", "webApiLink"],
  components: {
    Header,
  },
  data() {
    return {
      email: "",
      password: "",
      sendOK: false, // a watcher pour renvoyer l'utilisateur vers une autre vue
    };
  },
  methods: {
    connexion: async function() {
      const body = {
        email: this.email,
        password: this.password,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };
      try {
        const response = await fetch(
          this.webApiLink + "login",
          options
        );
        const data = await response.json();
        this.token.value = data.token;
        console.log("Status Connexion : " + response.status);
        if (response.status == 200) {
          this.sendOK = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  watch: {
    sendOK: function() {
      if (this.sendOK) {
        this.$router.replace("Perso");
      }
    },
  },
};
</script>

<style lang="scss">
.containerConnexion {
  background-color: #232323;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  width: 90%;
  margin: 20px 5%;
  padding: 10px;
  h2 {
    font-size: 1.3rem;
    margin: 10px 0 15px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      input,
      select {
        width: 75vw;
        padding: 5px;
        border: 2px solid whitesmoke;
        border-radius: 5px;
        background-color: transparent;
        color: whitesmoke;
        outline: none;
        font-size: 1rem;
        transition: 0.4s;
        margin: 15px 0;
        &::placeholder {
          color: rgb(107, 107, 107);
        }
        &:focus {
          border: 2px solid #ff1616;
        }
      }
    }
    input[type="submit"] {
      margin: 10px 0 20px;
      font-size: 1rem;
      padding: 5px 15px;
      border: 2px solid whitesmoke;
      background-color: transparent;
      border-radius: 5px;
      color: whitesmoke;
      outline: none;
      transition: 0.4s;
      &:active {
        transform: scale(0.98);
        border: 2px solid #ff1616;
        color: #ff1616;
      }
      &:focus {
        transform: scale(0.98);
        border: 2px solid #ff1616;
        color: #ff1616;
      }
    }
  }
  .toInscription {
    color: #ff1616;
    margin-bottom: 20px;
    text-decoration-color: rgb(146, 146, 146);
    span {
      color: whitesmoke;
    }
  }
  /* Float Label */
  .vfl-label {
    text-align: start;
    margin: 15px 0 5px 5px;
    font-size: 0.9rem;
    color: whitesmoke;
    font-family: "Ubuntu", Arial, sans-serif;
  }

  .vfl-label-on-input {
    top: -1.3rem;
  }

  .vfl-label-on-focus {
    color: #ff1616;
  }
}
</style>

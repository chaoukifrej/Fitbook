<template>
  <div class="connexion">
    <Header />
    <div class="containerConnexion">
      <h2>Connexion</h2>
      <form @submit.prevent="connexion">
        <div class="email">
          <label for="email">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Entrer votre email"
            required
          />
        </div>
        <div class="mdp">
          <label for="mdp">Mot de passe</label>
          <input
            v-model="password"
            type="password"
            name="mdp"
            id="mdp"
            placeholder="Entrer votre mot de passe"
            required
          />
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
  inject: ["isConnected", "token", "connect"],
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
          "https://fitbook-api.osc-fr1.scalingo.io/login",
          options
        );
        const data = await response.json();
        this.token.value = data.token;
        this.sendOK = true;
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
    margin: 10px 0 0;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      label {
        text-align: start;
        margin: 15px 0 5px 5px;
        font-size: 0.9rem;
      }
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
        &::placeholder {
          color: rgb(107, 107, 107);
        }
        &:focus {
          border: 2px solid #ff1616;
        }
      }
    }
    input[type="submit"] {
      margin: 20px;
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
}
</style>

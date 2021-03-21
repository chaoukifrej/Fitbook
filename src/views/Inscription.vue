<template>
  <div class="connexion">
    <Header />
    <div class="containerInscription">
      <h2>Inscription</h2>
      <form @submit.prevent="inscription">
        <div class="prenom">
          <float-label>
            <input
              v-autofocus
              v-model="firstname"
              type="text"
              placeholder="Prénom"
              required
            />
          </float-label>
        </div>
        <div class="nom">
          <float-label>
            <input v-model="lastname" type="text" placeholder="Nom" required />
          </float-label>
        </div>
        <div class="email">
          <float-label>
            <input v-model="email" type="email" placeholder="Email" required />
          </float-label>
        </div>
        <div class="mdp">
          <float-label>
            <input
              v-model="password"
              type="password"
              name="mdp"
              id="mdpFirst"
              placeholder="Mot de passe"
              required
            />
          </float-label>
        </div>
        <div class="mdp">
          <float-label>
            <input
              v-model="repassword"
              type="password"
              name="mdp"
              id="mdpSecond"
              placeholder="Verification Mot de passe"
              required
            />
          </float-label>
        </div>

        <input type="submit" @click="inscription" value="S'incrire" />
      </form>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "Inscription",
  components: {
    Header,
  },
  data: () => ({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
    sendOK: false, // a watcher pour renvoyer l'utilisateur vers une autre vue
  }),
  methods: {
    inscription: async function() {
      let passwordChecked;
      let checked = false;
      if (
        this.firstname != "" &&
        this.lastname != "" &&
        this.email != "" &&
        this.password != ""
      ) {
        if (this.password == this.repassword) {
          passwordChecked = this.repassword;
          checked = true;
        } else {
          this.repassword = "";
          checked = false;
        }
      }
      console.log(checked);
      if (checked) {
        const body = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: passwordChecked,
        };
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        };
        console.log(body);
        console.log(options);

        try {
          const response = await fetch(
            "https://fitbook-api.osc-fr1.scalingo.io/register",
            options
          );
          const data = await response.json();
          console.log(data);
          console.log("Status Connexion : " + response.status);
          if (response.status == 200) {
            this.sendOK = true;
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
  watch: {
    sendOK: function() {
      if (this.sendOK) {
        this.$router.replace("Connexion");
      }
    },
  },
};
</script>

<style lang="scss">
.containerInscription {
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
  .vfl-label {
    text-align: start;
    margin: 15px 0 5px 5px;
    font-size: 0.9rem;
    color: whitesmoke;
    font-family: "Ubuntu", Arial, sans-serif;
  }

  .vfl-label-on-input {
    top: -1.2rem;
  }

  .vfl-label-on-focus {
    color: #ff1616;
  }
}
</style>

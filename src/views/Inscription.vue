<template>
  <div class="connexion">
    <Header />
    <div class="containerInscription">
      <h2>Inscription</h2>
      <form action="" method="">
        <div class="nom">
          <label for="nom">Nom</label>
          <input type="text" placeholder="Delatour" required />
        </div>
        <div class="prenom">
          <label for="prenom">Prénom</label>
          <input type="text" placeholder="Jean" required />
        </div>
        <div class="email">
          <label for="email">Email</label>
          <input type="email" placeholder="jd@email.fr" required />
        </div>
        <div class="mdp">
          <label for="mdp">Mot de passe</label>
          <input
            type="password"
            name="mdp"
            id="mdpFirst"
            placeholder="Entrer un mot de passe"
            required
          />
        </div>
        <div class="mdp">
          <label for="mdp">Retaper votre Mot de passe</label>
          <input
            type="password"
            name="mdp"
            id="mdpSecond"
            placeholder="Re-entrer votre mot de passe"
            required
          />
        </div>

        <input type="submit" value="S'incrire" />
      </form>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
.containerInscription {
  background-color: #232323;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
  border: 1px solid #000000;
  border-radius: 3px;
  width: 90%;
  margin: 20px 5%;
  padding: 0 10px;
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
    }
  }
}
</style>

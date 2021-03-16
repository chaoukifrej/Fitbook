<template>
  <div class="connexion">
    <Header />
    <div class="containerConnexion">
      <form action="" method="">
        <div class="email">
          <label for="email">Email</label>
          <input type="email" placeholder="Entrer votre email" required />
        </div>
        <label for="mdp">Mot de passe</label>
        <input
          type="password"
          name="mdp"
          id="mdp"
          placeholder="Entrer votre mot de passe"
        />
        <input type="submit" value="Se connecter" />
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
.containerConnexion {
  background-color: #232323;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
  border: 1px solid #000000;
  border-radius: 3px;
  width: 90%;
  margin: 0 5%;
  padding: 10px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>

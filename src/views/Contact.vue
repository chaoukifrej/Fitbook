<template>
  <div class="contact">
    <Header />
    <Footer />
    <h1 class="title">Formulaire de Contact</h1>
    <p>Nom et prénom:</p>
    <input class="input" text="Entrez votre nom et prénom" />
    <p>Email:</p>
    <input text="Entrez votre mail" />
    <p>Message:</p>
    <textarea name="Message" id="message" cols="30" rows="10"></textarea>
    <br />
    <button>Valider</button>
    <div class="fonctionnalite">
      <p>A propos</p>
      <p>Blog</p>
      <p>Aide</p>
      <p>Confidentialité</p>
      <p>Langue</p>
    </div>
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
};
</script>

<style lang="scss">
.contact {
  .title {
    text-align: center;
    display: flex;
  }
  .fonctionnalite {
    display: flex;
    flex-direction: column;
    padding: 5px;
    border-radius: 5px;
  }
}
</style>

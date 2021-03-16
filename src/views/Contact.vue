<template>
  <div class="contact">
    <Header />
    <Footer />
    <div class="containerContact">
      <form action="" method="">
        <div class="email">
          <label for="email">Email</label>
          <input type="email" placeholder="Entrer votre email" required />
        </div>
        <div class="nomPrenom">
          <label for="nomPrenom">Nom et prénom</label>
          <input
            type="nomPrenom"
            placeholder="Entrer votre nom et prénom"
            required
          />
        </div>
        <div class="message">
          <label for="message">Message:</label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Dites nous votre problème"
          ></textarea>
        </div>

        <input type="submit" value="Valider" />
      </form>
    </div>
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
.containerContact {
  background-color: #232323;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
  border: 1px solid #000000;
  border-radius: 3px;
  width: 90%;
  margin: 20px 5%;
  padding: 0 10px;
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
      textarea {
        width: 75vw;
        padding: 5px;
        border: 2px solid whitesmoke;
        border-radius: 5px;
        background-color: transparent;
        color: whitesmoke;
        outline: none;
        transition: 0.4s;
        &::placeholder {
          color: rgb(107, 107, 107);
        }
        &:focus {
          border: 2px solid #ff1616;
        }
      }
    }
  }
}
</style>

<template>
  <div class="contact">
    <Header />
    <Footer />
    <div class="containerContact">
      <h2>Contact moi</h2>
      <form action="" method="">
        <div class="nomPrenom">
          <label for="nomPrenom">Nom et prénom</label>
          <input
            type="nomPrenom"
            placeholder="Entrer votre nom et prénom"
            required
          />
        </div>
        <div class="email">
          <label for="email">Email</label>
          <input type="email" placeholder="Entrer votre email" required />
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
  h2 {
    font-size: 1.3rem;
    margin: 10px 0 0;
  }
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
        font-size: 1rem;
        transition: 0.4s;
        &::placeholder {
          color: rgb(107, 107, 107);
        }
        &:focus {
          border: 2px solid #ff1616;
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

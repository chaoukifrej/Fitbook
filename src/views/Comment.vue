<template>
  <div class="comment">
    <Header />
    <div class="nom">
      <label for="commentaire">Commentaire:</label>
      <textarea
        name="message"
        cols="30"
        rows="10"
        placeholder="Commentez"
      ></textarea>
      <input type="submit" value="Valider" />
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
.comment {
  .nom {
    background-color: #232323;
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
    border: 1px solid #000000;
    border-radius: 3px;
    width: 90%;
    margin: 20px 5%;
    padding: 0 10px;
    height: 350px;
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
    resize: none;

    &::placeholder {
      color: rgb(107, 107, 107);
    }
    &:focus {
      border: 2px solid #ff1616;
    }
  }
}
</style>

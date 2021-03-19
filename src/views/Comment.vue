<template>
  <div class="comment">
    <Header />
    <div class="nom">
      <label for="commentaire">Commentaires</label>
      <textarea
        v-model="commentaire"
        name="message"
        cols="20"
        rows="4"
        placeholder="Ecrivez votre commentaire"
      ></textarea>
      <input type="submit" value="Publier" @click="sendComment" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "comment",
  inject: ["token"],
  components: {
    Header,
  },
  data: () => ({
    commentaire: "",
  }),

  methods: {
    sendComment: async function() {
      const body = {
        content: this.commentaire,
        postId: "60532d2d9dbf9a001bcf1a4a",
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + this.token.value,
        },
        body: JSON.stringify(body),
      };
      console.log(body);

      try {
        const response = await fetch(
          "https://fitbook-api.osc-fr1.scalingo.io/post/comment",
          options
        );
        console.log(response);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
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
    padding: 10 10px;
    height: 350px;
  }
  input {
    margin-top: 20px;
    width: 45vw;
    padding: 5px;
    border: 2px solid whitesmoke;
    border-radius: 3px;
    background-color: transparent;
    color: whitesmoke;
    outline: none;
    font-size: 1rem;
    transition: 0.4s;
    resize: none;
  }
  textarea {
    margin-top: 360px;
    width: 85vw;
    padding: 5px;
    border: 2px solid whitesmoke;
    border-radius: 3px;
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

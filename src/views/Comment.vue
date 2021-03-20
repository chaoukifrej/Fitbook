<template>
  <div class="comment">
    <Header />
    <h2>Ajouter un commentaire</h2>

    <div class="commentaires"></div>
    <form @submit.prevent>
      <textarea
        v-model="commentaire"
        name="message"
        cols="auto"
        rows="auto"
        placeholder="Ecrivez votre commentaire"
      ></textarea>
      <button class="btnSend" @click="sendComment">
        <font-awesome-icon class="iconSend" :icon="['far', 'paper-plane']" />
      </button>
    </form>
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
        postId: "",
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
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss">
.comment {
  h2 {
    font-size: 1.3rem;
    margin: 10px 0 10px;
  }
  .commentaires {
    height: 60vh;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    margin: 5px;
    width: 98vw;
    textarea {
      padding: 5px;
      border: 2px solid whitesmoke;
      border-radius: 5px;
      background-color: transparent;
      color: whitesmoke;
      outline: none;
      font-size: 1.1rem;
      transition: 0.4s;
      resize: none;
      width: 100%;
      height: 50px;
      &::placeholder {
        color: rgb(107, 107, 107);
      }
      &:focus {
        border: 2px solid #ff1616;
      }
    }
    .btnSend {
      width: 50px;
      height: 50px;
      margin: 5px;
      font-size: 1.2rem;
      padding: 5px;
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
}
</style>

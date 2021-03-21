<template>
  <div class="comment">
    <Header />

    <h2>Ajouter un commentaire</h2>
    <div class="commentaires">
      <transition-group name="fade" appear>
        <div class="commentaireCard" v-for="com in comments" :key="com._id">
          <p class="nomEtPrenom">{{ com.firstname }} {{ com.lastname }}</p>
          <p class="commentaireContent">{{ com.content }}</p>
          <span class="commentaireLike">
            <font-awesome-icon
              class="icons"
              :class="{ active: isActive }"
              :icon="['far', 'thumbs-up']"
            />
            <p>{{ com.likes.length }} j'aime</p>
          </span>
        </div>
      </transition-group>
    </div>
    <transition name="frombottom" appear>
      <form @submit.prevent>
        <textarea
          v-autofocus
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
    </transition>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "comment",
  props: ["postId", "comments"],
  inject: ["token"],
  components: {
    Header,
  },
  data: () => ({
    commentaire: "",
    isActive: false,
  }),

  methods: {
    sendComment: async function() {
      const body = {
        content: this.commentaire,
        postId: this.postId,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + this.token.value,
        },
        body: JSON.stringify(body),
      };
      try {
        const response = await fetch(
          "https://fitbook-api.osc-fr1.scalingo.io/post/comment",
          options
        );
        console.log("Commentaire status : " + response.status);
        this.$router.go(-1);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss">
.comment {
  margin-bottom: 70px;
  /* Bouton Like actif */
  .active {
    color: #ff1616;
  }
  h2 {
    font-size: 1.3rem;
    margin: 10px 0 10px;
  }
  .commentaires {
    height: 100%;
    overflow-y: scroll;
    .commentaireCard {
      display: grid;
      grid-template-columns: 5fr 1fr;
      align-items: center;
      column-gap: 10px;
      background-color: #232323;
      margin: 5px 0;
      padding: 10px;
      .nomEtPrenom {
        grid-area: 1 / 1 / 2 / 3;
        text-align: center;
        font-size: 0.9rem;
        font-weight: bold;
      }
      .commentaireContent {
        text-align: left;
        margin: 5px 0 0 5px;
      }
      .commentaireLike {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-self: end;
        font-size: 1.5rem;
        p {
          font-size: 0.8rem;
          margin-top: 3px;
          color: rgb(153, 153, 153);
        }
      }
    }
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    padding: 5px;
    width: 100vw;
    background-color: #232323;
    textarea {
      padding: 5px;
      border: 2px solid transparent;
      border-radius: 5px;
      background-color: transparent;
      color: whitesmoke;
      outline: none;
      font-size: 1rem;
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
      margin-left: 5px;
      font-size: 1.2rem;
      padding: 5px;
      background-color: transparent;
      border-radius: 5px;
      color: whitesmoke;
      outline: none;
      transition: 0.4s;
      border: none;
      &:active {
        transform: scale(0.98);
        color: #ff1616;
      }
      &:focus {
        transform: scale(0.98);
        color: #ff1616;
      }
    }
  }
  /* Animation Entrée */
  .frombottom-enter-active {
    animation: frombottom-in 0.5s;
  }
  .frombottom-leave-active {
    animation: frombottom-in 0.5s reverse;
  }
  @keyframes frombottom-in {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  /* Animation Commentaires*/
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>

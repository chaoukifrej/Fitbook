<template>
  <div class="post">
    <div class="card">
      <p class="hautCard">
        <span>
          <b>{{ post.firstname }}</b>
        </span>
        <span class="date">
          {{ new Date(post.date).toLocaleDateString() }} -
          {{ new Date(post.date).toLocaleTimeString() }}
        </span>
      </p>
      <div
        class="img"
        :style="{ backgroundImage: 'url(' + post.image + ')' }"
      ></div>
      <div class="btnCard">
        <div class="like">
          <span v-if="isConnected.is">
            <font-awesome-icon
              @click="addLike"
              class="icons"
              :icon="['far', 'thumbs-up']"
            />
          </span>
          <span v-else>
            <font-awesome-icon
              @click="$router.push('Connexion')"
              class="icons"
              :icon="['far', 'thumbs-up']"
            />
          </span>
          <p>{{ post.likes.length }} j'aime</p>
        </div>
        <div class="comment">
          <p>{{ post.comments.length }} commentaires</p>
          <span v-if="isConnected.is">
            <font-awesome-icon
              @click="$router.push('Comment')"
              class="icons"
              :icon="['far', 'comment']"
            />
          </span>
          <span v-else>
            <font-awesome-icon
              @click="$router.push('Connexion')"
              class="icons"
              :icon="['far', 'comment']"
            />
          </span>
        </div>
      </div>
      <div class="description">
        <p>{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["isConnected", "token"],
  props: ["post"],
  methods: {
    addLike: async function() {
      console.log(this.post._id);

      const options = {
        method: "POST",
        headers: {
          Authorization: "bearer " + this.token.value,
        },
        body: { PostId: this.post._id },
      };

      const envoi = await fetch(
        "https://fitbook-api.osc-fr1.scalingo.io/post/like",
        options
      );
      console.log(envoi);
    },
  },
};
</script>

<style lang="scss">
.card {
  margin: 10px 1%;
  border: 1px solid #000000;
  border-radius: 3px;
  background-color: #232323;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
  min-height: 350px;
  width: 98%;
  .img {
    min-height: 300px;
    background-size: cover;
    background-position: center;
  }
  .hautCard {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    background: transparent;
    .date {
      font-size: 0.8rem;
    }
  }
  .btnCard {
    background: transparent;
    display: flex;
    justify-content: space-between;
    .like,
    .comment {
      background: transparent;
      display: flex;
      align-items: center;
      margin: 10px;
      p {
        margin: 3px 10px 0;
        color: rgb(143, 143, 143);
      }
    }
    .icons {
      font-size: 1.5rem;
    }
  }
  .description p {
    text-align: start;
    margin: 10px;
  }
}
</style>

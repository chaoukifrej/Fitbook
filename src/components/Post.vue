<template>
  <div class="post">
    <div class="card">
      <p class="hautCard">
        <span
          @click="
            $router.push({
              name: 'User',
              params: { id: post.userId },
            })
          "
        >
          <b>{{ post.firstname }} {{ post.lastname }}</b>
          <p class="endroitPost">{{ endroit }}</p>
        </span>
        <span class="date">
          <span>{{ new Date(post.date).toLocaleDateString() }}</span>
          <span>{{
            new Date(post.date).toLocaleTimeString("fr-FR", {
              hour: "2-digit",
              minute: "2-digit",
            })
          }}</span>
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
              :class="{ active: isActive }"
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
          <p>{{ likesNumber }} j'aime</p>
        </div>
        <div class="comment">
          <span
            v-if="isConnected.is"
            @click="
              $router.push({
                name: 'Comment',
                params: { postId: post._id, comments: post.comments },
              })
            "
          >
            <p>{{ post.comments.length }} commentaires</p>
            <font-awesome-icon
              :class="{ active: comActive }"
              class="icons"
              :icon="['far', 'comment']"
            />
          </span>
          <span v-else @click="$router.push('Connexion')">
            <p>{{ post.comments.length }} commentaires</p>
            <font-awesome-icon class="icons" :icon="['far', 'comment']" />
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
  inject: ["isConnected", "token", "userIdLoggedIn"],
  props: ["post"],
  data() {
    return {
      likes: this.post.likes,
      likesNumber: this.post.likes.length,
      comments: this.post.comments,
      isActive: false,
      comActive: false,
    };
  },
  computed: {
    endroit: function() {
      let endroit = "";
      this.post.location ? (endroit = this.post.location.name) : (endroit = "");
      return endroit;
    },
  },
  mounted() {
    for (const like of this.likes) {
      if (like.userId == this.userIdLoggedIn.id) {
        this.isActive = true;
      }
    }
    for (const com of this.comments) {
      if (com.userId == this.userIdLoggedIn.id) {
        this.comActive = true;
      }
    }
  },
  methods: {
    addLike: async function() {
      const body = { postId: this.post._id };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + this.token.value,
        },
        body: JSON.stringify(body),
      };
      const response = await fetch(
        "https://fitbook-api.osc-fr1.scalingo.io/post/like",
        options
      );
      console.log("Like status : " + response.status);
      if (response.status == 200) {
        this.likesNumber++;
        this.isActive = true;
      }
    },
  },
};
</script>

<style lang="scss">
.card {
  /* Bouton Like actif */
  .active {
    color: #ff1616;
  }
  .endroitPost {
    text-align: left;
    font-size: 0.9rem;
    color: rgb(138, 138, 138);
  }
  margin: 10px 1%;
  /* border: 1px solid #000000; */
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
      color: rgb(138, 138, 138);
      display: flex;
      flex-direction: column;
      text-align: end;
      font-size: 0.8rem;
    }
  }
  .btnCard {
    background: transparent;
    display: flex;
    justify-content: space-between;
    .like {
      background: transparent;
      display: flex;
      align-items: center;
      margin: 10px;
      p {
        margin: 3px 10px 0;
        color: rgb(143, 143, 143);
      }
    }
    .comment {
      margin: 0px;
    }
    .comment span {
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
  .description {
    text-align: start;
    margin: 10px;
    padding-bottom: 10px;
  }
}
</style>

<template>
  <div class="actus">
    <transition name="fromtop" appear>
      <Header />
    </transition>

    <div class="maxContenu">
      <div v-for="post in posts" :key="post._id">
        <Post
          v-animate-css="{
            classes: 'fadeInUp',
            duration: 1000,
          }"
          :post="post"
        />
      </div>
      <infinite-loading @infinite="infiniteHandler">
        <div class="NoMore" slot="no-more">Plus de posts</div>
      </infinite-loading>
    </div>
    <transition name="frombottom" appear>
      <Footer />
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Post from "@/components/Post.vue";
import InfiniteLoading from "vue-infinite-loading";
export default {
  name: "Actus",
  components: {
    Header,
    Footer,
    Post,
    InfiniteLoading,
  },

  data: () => ({
    page: 0,
    posts: [],
  }),

  methods: {
    infiniteHandler($state) {
      const options = {
        method: "GET",
      };

      fetch(
        "https://fitbook-api.osc-fr1.scalingo.io/posts?limit=5&page=" +
          this.page,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.totalPages) {
            this.page++;
            this.posts.push(...data.posts);
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    },
  },
};
</script>

<style lang="scss">
/* Attention - utilisé aussi pour page Perso.vue et User.vue*/
.maxContenu {
  margin-bottom: 70px;
}

/* Animation Header */
.fromtop-enter-active {
  animation: fromtop-in 0.4s;
}
.fromtop-leave-active {
  animation: fromtop-in 0.4s reverse;
}
@keyframes fromtop-in {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}
/* Animation Footer */
.frombottom-enter-active {
  animation: frombottom-in 0.3s;
}
.frombottom-leave-active {
  animation: frombottom-in 0.3s reverse;
}
@keyframes frombottom-in {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
}

/* Plus de post */
.NoMore {
  font-size: 0.9rem;
  color: #ff1616;
}
</style>

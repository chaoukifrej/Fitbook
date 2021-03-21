<template>
  <div class="actus">
    <transition name="fromtop" appear>
      <Header />
    </transition>

    <div class="maxContenu">
      <div v-for="post in posts" :key="post._id">
        <transition name="fade" appear>
          <Post :post="post" />
        </transition>
      </div>
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

export default {
  name: "Actus",
  components: {
    Header,
    Footer,
    Post,
  },

  data: () => ({ posts: [] }),

  mounted: async function() {
    const options = {
      method: "GET",
    };
    try {
      const response = await fetch(
        "https://fitbook-api.osc-fr1.scalingo.io/posts",
        options
      );
      const data = await response.json();
      this.posts = data.posts;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss">
/* Attention - utilisé aussi pour page Perso.vue et User.vue*/
.maxContenu {
  margin-bottom: 70px;
}
/* Animation Posts*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
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
</style>

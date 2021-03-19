<template>
  <div class="actus">
    <Header />
    <div class="maxContenu">
      <div v-for="post in posts" :key="post._id">
        <Post :post="post" />
      </div>
    </div>
    <Footer />
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
/* Attention - utilisé aussi pour page Perso.vue */
.maxContenu {
  margin-bottom: 70px;
}
</style>

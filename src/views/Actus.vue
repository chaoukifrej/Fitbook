<template>
  <div class="actus">
    <Header />

    <div v-for="post in posts" :key="post._id">
      <Post :post="post" />
      <Post />
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
      console.log(response.status);

      const data = await response.json();
      console.log(data);

      this.posts = data.posts;

      console.log(this.posts);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss"></style>

<template>
  <div class="actus">
    <Header />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />

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
};
</script>

<style lang="scss"></style>

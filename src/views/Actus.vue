<template>
  <div class="actus">
    <Header />

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Actus",
  components: {
    Header,
    Footer,
  },
};
</script>

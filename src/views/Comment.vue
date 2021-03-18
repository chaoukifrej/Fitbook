<template>
  <div class="comment">
    <Header />
    <div class="nom">
      <label for="message">Message:</label>
      <textarea
        name="commentaire"
        cols="30"
        rows="10"
        placeholder="Ecrivez votre commentaire"
      ></textarea>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
.nom {
  background-color: #232323;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
  border: 1px solid #000000;
  border-radius: 3px;
  width: 90%;
  margin: 20px 5%;
  padding: 0 10px;
}
</style>

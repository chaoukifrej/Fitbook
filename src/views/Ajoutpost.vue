<template>
  <div class="ajoutpost">
    <Header />
    <div class="ajoutphoto">
      <label for="files" class="btn"
        ><img
          src="../assets/imgUtilisateur.png"
          alt="imgUtilisateur"
          class="imgUtilisateur"
      /></label>
      <input id="files" style="visibility:hidden;" type="file" />
      <div class="description">
        <textarea name="description" id="" cols="30" rows="10">
Entré votre description</textarea
        >
      </div>

      <input type="text" placeholder="lieu" />

      <button class="btnValider">VALIDER</button>
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

<style lang="scss">
.ajoutpost {
  input[type="file"] {
    color: transparent;
  }

  .ajoutphoto {
    flex-direction: column;
    justify-content: space-between;
    display: flex;
    align-items: center;

    .imgUtilisateur {
      width: 100%;
    }

    .description {
      width: 100%;
    }
    textarea {
      width: 100%;
    }
  }
}
</style>

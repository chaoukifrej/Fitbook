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
      <div class="containerLieu">
        <input type="text" placeholder="lieu" />
      </div>
      <div class="containerBtn">
        <button class="btnValider">VALIDER</button>
      </div>
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
    display: flex;
    flex-direction: column;

    .imgUtilisateur {
      width: 50%;
      border-radius: 50%;
      border: 1px solid #000000;
    }
  }

  .description {
    width: 100%;
  }
  textarea {
    width: 100%;
    border-radius: 3px;
  }
  .containerLieu input {
    border-radius: 3px;
    border: 1px solid #000000;
    margin: 1rem;
  }

  .btnValider {
    margin: 1rem;
  }
}
</style>

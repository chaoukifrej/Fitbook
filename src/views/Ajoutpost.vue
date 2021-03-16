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
        <textarea
          placeholder="Entré votre description"
          name="description"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div class="containerLieu">
        <input type="text" placeholder="lieu" />
      </div>
      <div class="containerBtn">
        <input type="submit" />
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
      opacity: 0.6;
    }
  }

  input {
    padding: 5px;
    border: 2px solid whitesmoke;
    border-radius: 5px;
    background-color: transparent;
    color: whitesmoke;
    outline: none;
    font-size: 1rem;
    transition: 0.4s;

    &::placeholder {
      color: rgb(107, 107, 107);
    }
    &:focus {
      border: 2px solid #ff1616;
    }
    &:active {
      transform: scale(0.98);
      color: whitesmoke;
    }
  }
  input[type="submit"] {
    margin: 20px;
    font-size: 1rem;
    padding: 5px 15px;
    background-color: transparent;
    border-radius: 5px;
    outline: none;
    transition: 0.4s;
    border: 2px solid whitesmoke;

    &:active {
      transform: scale(0.98);
      color: whitesmoke;
    }
    &:focus {
      border: 2px solid #ff1616;
    }
  }

  textarea {
    border: 2px solid whitesmoke;
    margin: 20px;
    font-size: 1rem;
    padding: 5px 15px;

    background-color: transparent;
    border-radius: 5px;
    color: #ff1616;
    outline: none;
    transition: 0.4s;

    &::placeholder {
      color: rgb(107, 107, 107);
    }
    &:focus {
      border: 2px solid #ff1616;
    }

    &:active {
      transform: scale(0.98);
      color: whitesmoke;
    }
  }
}
</style>

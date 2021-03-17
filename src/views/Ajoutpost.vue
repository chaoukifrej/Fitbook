<template>
  <div class="ajoutpost">
    <Header />
    <form>
      <div class="mainContainer">
        <h2>Publier un post</h2>
        <div class="ajoutphoto">
          <label for="files" style="  border-radius: 50%;"
            ><div
              class="imgUtilisateur"
              :style="{ backgroundImage: 'url(' + valueImg + ')' }"
              ref="value"
            ></div>

            <input
              accept=".jpeg,.png, .jpg"
              ref="img"
              @change="addPhoto"
              id="files"
              style="visibility:hidden;"
              type="file"
          /></label>
        </div>

        <div class="description">
          <label for="description"> Description </label>
          <textarea
            v-model="description"
            placeholder="Entrer votre description"
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div class="lieu">
          <label for="lieu">Indiquer le Lieu</label>
          <input v-model="lieu" type="text" placeholder="lieu" />
        </div>

        <div class="containerBtn">
          <input type="submit" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
  data: () => ({
    image: "",
    description: "",
    lieu: "",
    valueImg: "/assets/imgUtilisateur.png",
  }),

  methods: {
    addPhoto(e) {
      const reader = new FileReader();
      reader.onload = (readerEvent) => {
        this.valueImg = readerEvent.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    },
  },
};
</script>

<style lang="scss">
.mainContainer {
  h2 {
    font-size: 1.3rem;
    margin: 10px 0 10px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  input[type="file"] {
    z-index: -1;
  }
  /* ajout photo */
  .ajoutphoto {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }

  .imgUtilisateur {
    background-size: cover;
    height: 15rem;
    border-radius: 50%;
    border: 1px solid #000000;
    opacity: 0.6;
  }
  /* indication description */

  .description {
    display: flex;
    flex-direction: column;
    label {
      margin: 15px 0 5px 5px;
      font-size: 0.9rem;
      text-align: start;
    }
    textarea {
      width: 90vw;
      padding: 5px;
      border: 2px solid whitesmoke;
      border-radius: 5px;
      background-color: transparent;
      color: whitesmoke;
      outline: none;
      font-size: 1rem;
      transition: 0.4s;
      resize: none;
      &::placeholder {
        color: rgb(107, 107, 107);
      }
      &:focus {
        border: 2px solid #ff1616;
      }
    }
  }

  /* indication du lieu */

  .lieu {
    display: flex;
    flex-direction: column;
    label {
      margin: 15px 0 5px 5px;
      font-size: 0.9rem;
      text-align: start;
    }
    input {
      width: 90vw;
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
    }
  }

  /* boutton VALIDER */

  input[type="submit"] {
    margin: 20px;
    font-size: 1rem;
    padding: 5px 15px;
    border: 2px solid whitesmoke;
    background-color: transparent;
    border-radius: 5px;
    color: whitesmoke;
    outline: none;
    transition: 0.4s;
    &:active {
      transform: scale(0.98);
      border: 2px solid #ff1616;
      color: #ff1616;
    }
  }
}
</style>

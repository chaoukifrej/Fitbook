<template>
  <div class="modifProfil">
    <Header />

    <div class="containerAmodifier">
      <h2>Modifier votre Profil</h2>

      <form action="">
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

        <div class="nom">
          <label for="nom">Modifiez votre Nom</label>
          <input
            v-model="lastname"
            type="text"
            placeholder="Delatour"
            required
          />
        </div>

        <div class="prenom">
          <label for="prenom">Modifiez votre Prénom</label>
          <input v-model="firstname" type="text" placeholder="Jean" required />
        </div>

        <div class="email">
          <label for="email">Modifiez votre Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="jd@email.fr"
            required
          />
        </div>

        <div class="ville">
          <label for="ville">ville <span class="opt">(optionnel)</span> </label>
          <input v-model="ville" type="text" placeholder="Nice" />
        </div>

        <div class="sport">
          <label for="sport"
            >Sport pratiqué <span class="opt">(optionnel)</span></label
          >
          <input v-model="sport" type="text" placeholder="Body-Building" />
        </div>

        <div class="status">
          <label for="status"
            >Status <span class="opt">(optionnel)</span></label
          >
          <select v-model="status" name="status" id="status">
            <option value="amateur">Amateur</option>
            <option value="pro">Professionnelle</option>
          </select>
        </div>

        <div class="salleSport">
          <label for="salleSport"
            >Salle de sport <span class="opt">(optionnel)</span>
          </label>
          <input
            v-model="salleSport"
            type="text"
            placeholder="Ta salle préferée"
          />
        </div>
        <div class="mdp">
          <label for="mdp">Modifiez votre Mot de passe</label>
          <input
            v-model="password"
            type="password"
            name="mdp"
            id="mdpFirst"
            placeholder="Entrer un mot de passe"
            required
          />
        </div>
        <div class="mdp">
          <label for="mdp">Verification du nouveau Mot de passe</label>
          <input
            v-model="repassword"
            type="password"
            name="mdp"
            id="mdpSecond"
            placeholder="Retaper votre mot de passe"
            required
          />
        </div>
        <input type="submit" value="Valider" />
      </form>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
  data: () => ({
    firstname: "",
    lastname: "",
    email: "",
    ville: "",
    sport: "",
    status: "",
    salleSport: "",
    password: "",
    repassword: "",
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
.containerAmodifier {
  background-color: #232323;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
  border: 1px solid #000000;
  border-radius: 3px;
  width: 90%;
  margin: 20px 5%;
  padding: 0 10px;

  h2 {
    font-size: 1.3rem;
    margin: 10px 0 0;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      label {
        text-align: start;
        margin: 15px 0 5px 5px;
        font-size: 0.9rem;
      }

      .imgUtilisateur {
        background-size: cover;
        height: 15rem;
        border-radius: 50%;
        border: 1px solid #000000;
        opacity: 0.6;
      }

      input,
      select {
        width: 75vw;
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

        option {
          background-color: #232323;
        }
      }
    }
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
}
</style>

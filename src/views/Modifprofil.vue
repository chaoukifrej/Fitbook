<template>
  <div class="modifProfil">
    <Header />
    <div class="amodifier">
      <div class="ville">
        <label for="ville">Ville <span class="opt">(optionnel)</span> </label>
        <input type="text" placeholder="Nice" />
      </div>
      <div class="sport">
        <label for="sport"
          >Sport pratiqué <span class="opt">(optionnel)</span></label
        >
        <input type="text" placeholder="Body-Building" />
      </div>
      <div class="status">
        <label for="status">Status <span class="opt">(optionnel)</span></label>
        <select name="status" id="status">
          <option value="amateur">Amateur</option>
          <option value="pro">Professionnelle</option>
        </select>
      </div>
      <div class="salleSport">
        <label for="salleSport"
          >Salle de sport <span class="opt">(optionnel)</span>
        </label>
        <input type="text" placeholder="Ta salle préferée" />
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

<style lang="scss"></style>

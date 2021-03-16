<template>
  <div class="header">
    <img id="imgLogo" alt="logo FitBook" src="../assets/fitbookCoupe.png" />
    <button class="inscription displayNone">Incription</button>
    <a class="retour" href="#" @click.prevent="$router.go(-1)">Retour</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 15px;
  .inscription {
    font-size: 1.1rem;
    padding: 3px 15px;
    border: 2px solid #ff1616;
    background-color: transparent;
    border-radius: 5px;
    color: #ff1616;
    outline: none;
    transition: 0.4s;
    &:active {
      transform: scale(0.98);
      color: whitesmoke;
    }
  }
  .retour {
    color: whitesmoke;
    font-weight: bold;
    text-decoration: none;
  }
  #imgLogo {
    height: 35px;
  }
}

/* A modif  */
.displayNone {
  display: none;
}
</style>

<template>
  <div id="app">
<<<<<<< HEAD
    <div id="nav">
      <router-link to="/">Actus</router-link> |
      <router-link to="/Perso">Perso</router-link> |
      <router-link to="/Connexion">Connexion</router-link> |
      <router-link to="/Ajoutpost">Ajoutpost</router-link> |
      <router-link to="/Contact">Contact</router-link>
    </div>
=======
    <div id="nav"></div>
>>>>>>> e212048fd0712e11d388430677ab17f529206ee6
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/* Barre Header */
.header {
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  border-bottom: 1px solid black;
  top: 0;
}

/* Barre de Navigation (Footer) */
.footer {
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  border-top: 1px solid black;
  bottom: 0;
}
</style>

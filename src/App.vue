<template>
  <div id="app">
    <div id="nav"></div>
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

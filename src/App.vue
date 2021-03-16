<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<style lang="scss">
$bgColor: #232323;
$bgColorView: #363636;
$redColor: #ff1616;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: $bgColorView;
  color: rgb(235, 235, 235);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: whitesmoke;

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
  border-bottom: 1px solid black;
  background-color: $bgColor;
  top: 0;
  z-index: 1000;
}

/* Barre de Navigation (Footer) */
.footer {
  position: fixed;
  width: 100%;
  height: 50px;
  border-top: 1px solid black;
  background-color: $bgColor;
  bottom: 0;
  z-index: 1000;
}
</style>

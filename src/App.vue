<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    users: [
      {
        firstname: "Jean Onche la tapette",
        lastname: "15/03/20",
        email: "jot@email.fr",
        age: "26",
      },
    ],
    isConnected: false,
    token: "",
  }),
  methods: {
    connect: function() {
      this.isConnected = true;
      console.log("connecté");
    },
    disconnect: function() {
      this.isConnected = false;
      console.log("deconnecté");
    },
    pushUsers(p) {
      let user = {
        firstname: p.firstname,
        lastname: p.lastname,
        email: p.email,
        password: p.password,
      };
      let check = false;
      for (const elem of this.users) {
        if (elem.email != user.email) {
          check = false;
        } else {
          check = true;
          break;
        }
      }
      if (!check) {
        if (user.lastname != "") {
          this.users.push(user);
        }
      }
      console.log(user);
    },
  },
  watch: {
    token: function() {
      if (this.token != "") {
        this.isConnected = true;
      } else {
        this.isConnected = false;
      }
    },
  },
  provide() {
    const isConnected = {};
    Object.defineProperty(isConnected, "is", {
      enumerable: true,
      get: () => this.isConnected,
      set: (n) => (this.isConnected = n),
    });
    const token = {};
    Object.defineProperty(token, "value", {
      enumerable: true,
      get: () => this.token,
      set: (n) => (this.token = n),
    });
    return {
      isConnected,
      token,
      connect: this.connect,
      disconnect: this.disconnect,
    };
  },
};
</script>

<style lang="scss">
/* Google fonts */
@import url("https://fonts.googleapis.com/css2?family=Chau+Philomene+One:ital@0;1&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap");
/* Variables */
$bgColor: #232323;
$bgColorView: #363636;
$redColor: #ff1616;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Ubuntu", Arial, sans-serif;
}
body {
  background-color: $bgColorView;
  color: rgb(235, 235, 235);
}
#app {
  font-family: "Ubuntu", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "Chau Philomene One", sans-serif;
  }
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

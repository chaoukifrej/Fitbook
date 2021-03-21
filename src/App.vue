<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "AppVue",
    isConnected: false,
    token: "",
    userIdLoggedIn: "",
  }),
  methods: {
    connect: function() {
      this.isConnected = true;
      console.log("connecté");
    },
    disconnect: function() {
      this.isConnected = false;
      this.token = "";
      this.userIdLoggedIn = "";
      this.$router.go(-1);
    },
  },

  //Mise en place du Local Storage

  beforeMount() {
    let oldToken = "";
    localStorage.getItem("token")
      ? (oldToken = JSON.parse(localStorage.getItem("token")))
      : (this.token = "");
    localStorage.getItem("userId")
      ? (this.userIdLoggedIn = JSON.parse(localStorage.getItem("userId")))
      : (this.userIdLoggedIn = "");
    const options = {
      method: "GET",
      headers: {
        Authorization: "bearer " + oldToken,
      },
    };
    fetch("https://fitbook-api.osc-fr1.scalingo.io/user", options).then(
      (response) => {
        if (response.status == 200) {
          console.log("Token get status " + response.status);
          this.token = oldToken;
        } else {
          this.token = "";
        }
      }
    );
  },
  watch: {
    token: function() {
      if (this.token != "") {
        this.isConnected = true;
      } else {
        this.isConnected = false;
      }
      localStorage.setItem("token", JSON.stringify(this.token));
    },
    user: function() {
      localStorage.setItem("userId", JSON.stringify(this.user));
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
    const userIdLoggedIn = {};
    Object.defineProperty(userIdLoggedIn, "id", {
      enumerable: true,
      get: () => this.userIdLoggedIn,
      set: (s) => (this.userIdLoggedIn = s),
    });
    return {
      userIdLoggedIn,
      isConnected,
      token,
      connect: this.connect,
      disconnect: this.disconnect,
    };
  },
};
</script>

<style lang="scss">
/* Site version non mobile */
.notMobile {
  display: none;
}
/* Google fonts */
@import url("https://fonts.googleapis.com/css2?family=Chau+Philomene+One:ital@0;1&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap");
/* Variables */
$bgColor: #232323;
$bgColorView: #383838;
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
  /* border-bottom: 1px solid black; */
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.2);
  background-color: $bgColor;
  top: 0;
  z-index: 1000;
}

/* Barre de Navigation (Footer) */
.footer {
  position: fixed;
  width: 100%;
  height: 50px;
  /* border-top: 1px solid black; */
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.2);
  background-color: $bgColor;
  bottom: 0;
  z-index: 1000;
}

/* Transition Animation */
/* Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Media Queries pour Non Mobile  */
@media screen and (min-width: 500px) {
  #app {
    display: none;
  }
  .notMobile {
    background-color: $bgColor;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20%;
    letter-spacing: 2px;
    line-height: 50px;
    text-align: justify;
    span {
      color: #ff1616;
    }
  }
}
</style>

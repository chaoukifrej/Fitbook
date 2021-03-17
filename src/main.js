import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

library.add(faHome);
library.add(faThumbsUp);
library.add(faComment);
library.add(faInfo);

Vue.component("font-awesome-icon", FontAwesomeIcon);

library.add(faPlusSquare);
Vue.component("font-awesome-icon", FontAwesomeIcon);

library.add(faUserCircle);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  data: {
    users: [
      {
        firstname: "Jean Onche la tapette",
        lastname: "15/03/20",
        email: "jot@email.fr",
        age: "26",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2F-TkKO4S3bFZU%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2FdfhYjIlWsO4%2Fs900-c-k-no-mo-rj-c0xffffff%2Fphoto.jpg&f=1&nofb=1",
        description:
          "Fin de séance, 21k de poussé !!! De la pure folie cette seance de merde",
        nbLike: "12",
        nbComment: "3",
        isConnected: false,
      },
    ],
  },
  methods: {
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
  render: (h) => h(App),
}).$mount("#app");

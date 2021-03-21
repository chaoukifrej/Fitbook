import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import autofocus from "vue-autofocus-directive";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

library.add(faHome);
library.add(faThumbsUp);
library.add(faComment);
library.add(faInfo);
library.add(faPlusSquare);
library.add(faUserCircle);
library.add(faPaperPlane);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.directive("autofocus", autofocus);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

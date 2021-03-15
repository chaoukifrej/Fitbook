import Vue from "vue";
import VueRouter from "vue-router";
import Actus from "../views/Actus.vue";
import Perso from "../views/Perso.vue";
import Connexion from "../views/Connexion.vue";
import Ajoutpost from "../views/Ajoutpost.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Actus",
    component: Actus,
  },
  {
    path: "/Perso",
    name: "Perso",
    component: Perso,
  },
  {
    path: "/Connexion",
    name: "Connexion",
    component: Connexion,
  },
  {
    path: "/Ajoutpost",
    name: "Ajoutpost",
    component: Ajoutpost,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

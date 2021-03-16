import Vue from "vue";
import VueRouter from "vue-router";
import Actus from "../views/Actus.vue";
import Perso from "../views/Perso.vue";
import Connexion from "../views/Connexion.vue";
import Ajoutpost from "../views/Ajoutpost.vue";
import Contact from "../views/Contact.vue";
import Modifprofil from "../views/Modifprofil.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Actus",
    component: Actus,
    alias: "/FilActus",
  },
  {
    path: "/Perso",
    name: "Perso",
    component: Perso,
    alias: "/PagePerso",
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
  {
    path: "/Modifprofil",
    name: "Modifprofil",
    component: Modifprofil,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Actus from "../views/Actus.vue";
import Perso from "../views/Perso.vue";
import Connexion from "../views/Connexion.vue";
import Inscription from "../views/Inscription.vue";
import Ajoutpost from "../views/Ajoutpost.vue";
import Comment from "../views/Comment.vue";
import Contact from "../views/Contact.vue";
import Modifprofil from "../views/Modifprofil.vue";
import User from "../views/User.vue";

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
    path: "/Inscription",
    name: "Inscription",
    component: Inscription,
  },
  {
    path: "/Ajoutpost",
    name: "Ajoutpost",
    component: Ajoutpost,
  },
  {
    path: "/Comment/:postId",
    name: "Comment",
    component: Comment,
    props: true,
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
  {
    path: "/User/:id",
    name: "User",
    component: User,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

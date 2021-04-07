[Voir le site (Version mobile -> ctrl+shift+m)](https://fitbook.netlify.app/) 

# Fitbook
3eme projet formation Le Bocal Academy, VueJS

### Objectifs:

    Développer une application web front-end avec VueJS
    
### Sujet: 

Développer la partie front-end d'un tout nouveau réseau social.

Avec au minimum les fonctionnalités suivantes:

    création de compte, connexion et déconnexion;
    création de posts (avec ou sans photo);
    mention "j'aime" sur les posts;
    ajout de commentaires sur les posts;
    édition de son profil;
    page personnelle présenant également les posts les plus récents.

 
Par défaut, toutes les publications sont visibles dans un fil d'actualité accessible à tous les utilisateurs (connectés ou non). 
Pour poster, aimer un post ou commenter, il faudra être connecté.

Choix graphiques et d'interface libres.

***
### Notre stratégie :

 * Réseau social sur le thème de la Fitness (Mobile First).
 * Utilisation de **VueJS (Vue-cli), Vue-Router, SCSS**.
 * librairie utilisé : v-animate-css,fortawesome, vue-float-label, **vue-infinite-loading**.
 * Création de 3 composants : Header, Footer et Post.
 * Utilisation : 
    * Web API (Fetch)(avec routes connexion, inscription, post, ...) pour stockage des informations, 
    * Local Storage (pour le *token*, et autre infos sur le user connecté),
    * Provide et Injects (avec propriétés d'Objet définie manuellement pour getter et setter),
    * Construction Objet File Reader (pour récuperer des photos pour les posts ou l'utilisateur) et envoie sur web API au format Base64.


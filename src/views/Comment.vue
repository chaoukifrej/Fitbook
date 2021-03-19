<template>
  <div class="comment">
    <Header />
    <div v-for="comment in comments" :key="comment._id">
     <Post :post="post" />


    <h2>Ajouter un commentaire</h2>

    <div class="commentaires"></div>
    <form @submit.prevent>
      <textarea
        v-model="commentaire"
        name="message"
        cols="auto"
        rows="auto"
        placeholder="Ecrivez votre commentaire"
      ></textarea>
      <input type="submit" value="Publier" @click="sendComment" />
    </form>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
/* import func from 'vue-editor-bridge'; */
export default {
  name: "comment",
  inject: ["token"],
  components: {
    Header,
  },
  data: () => ({
    commentaire :"",
     comments: [{
        firstname: "" ,
        lastname: "",
        userId:"" ,
        content:"",
        likes: [{
            firstname:"" ,
            lastname: "",
            userId: "",
        }],
    }]}),

mounted: async function (){
  const options = {
    method: "GET",
    headers : {Authorization: "bearer " + this.token.value,},
  };

  try { 
    const response = await fetch  ("https://fitbook-api.osc-fr1.scalingo.io/post/comments",
        options);

        const data = await response.json();
      
        this.lastname = data.lastname;
        this.firstname = data.firstname;
        this.userId=data.userId;
        this.content = data.content;
        
    
  } catch (error) { console.log(error);}
},

  
  methods: {
    sendComment: async function() {
      const body = {
        content: this.commentaire,
        postId: this.Post._ID,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + this.token.value,
        },
        body: JSON.stringify(body),
      };
      console.log(body);

      try {
        const response = await fetch(
          "https://fitbook-api.osc-fr1.scalingo.io/post/comment",
          options
        );
        console.log(response);
        const data = await response.json();
  
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style lang="scss">
.comment {
  h2 {
    font-size: 1.3rem;
    margin: 10px 0 10px;
  }
  .commentaires {
    height: 60vh;
  }
  form {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    margin: 5px;
    width: 100%;
    textarea {
      padding: 5px;
      border: 2px solid whitesmoke;
      border-radius: 5px;
      background-color: transparent;
      color: whitesmoke;
      outline: none;
      font-size: 1rem;
      transition: 0.4s;
      resize: none;
      &::placeholder {
        color: rgb(107, 107, 107);
      }
      &:focus {
        border: 2px solid #ff1616;
      }
    }
    input[type="submit"] {
      margin-left: 5px;
      font-size: 1rem;
      padding: 5px 15px;
      border: 2px solid whitesmoke;
      background-color: transparent;
      border-radius: 5px;
      color: whitesmoke;
      outline: none;
      transition: 0.4s;
      &:active {
        transform: scale(0.98);
        border: 2px solid #ff1616;
        color: #ff1616;
      }
      &:focus {
        transform: scale(0.98);
        border: 2px solid #ff1616;
        color: #ff1616;
      }
    }
  }
}
</style>

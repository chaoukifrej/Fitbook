<template>
  <div class="post">
    <div class="card">
      <div class="img" :style="{ backgroundImage: 'url(' + card.img + ')' }">
        <p class="hautCard">
          <span>{{ card.name }}</span>
          <span class="date">{{ card.date }}</span>
        </p>
      </div>
      <div class="btnCard">
        <div class="like">
          <font-awesome-icon class="icons" :icon="['far', 'thumbs-up']" />
          <p>{{ card.nbLike }} j'aime</p>
        </div>
        <div class="comment">
          <p>{{ card.nbComment }} commentaires</p>
          <font-awesome-icon class="icons" :icon="['far', 'comment']" />
        </div>
      </div>
      <div class="description">
        <p>{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card: {
        name: "Jean Onche la tapette",
        date: "15/03/20",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2F-TkKO4S3bFZU%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2FdfhYjIlWsO4%2Fs900-c-k-no-mo-rj-c0xffffff%2Fphoto.jpg&f=1&nofb=1",
        description:
          "Fin de séance, 21k de poussé !!! De la pure folie cette seance de merde",
        nbLike: "12",
        nbComment: "3",
      },
    };
  },
};
</script>

<style lang="scss">
.card {
  margin: 10px 1%;
  border: 1px solid #000000;
  border-radius: 3px;
  background-color: #232323;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
  min-height: 350px;
  width: 98%;
  .img {
    height: 250px;
    background-color: rgb(207, 207, 207);
    background-size: cover;
  }
  .hautCard {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    background: linear-gradient(#000000, #36363600);

    .date {
      font-size: 0.8rem;
    }
  }
  .btnCard {
    background: transparent;
    display: flex;
    justify-content: space-between;
    .like,
    .comment {
      background: transparent;
      display: flex;
      align-items: center;
      margin: 10px;
      p {
        margin: 3px 10px 0;
        color: rgb(143, 143, 143);
      }
    }
    .icons {
      font-size: 1.5rem;
    }
  }
  .description p {
    text-align: start;
    margin: 0 10px;
  }
}
</style>

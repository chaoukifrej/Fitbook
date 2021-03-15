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
        <font-awesome-icon class="like" :icon="['far', 'thumbs-up']" />
        <font-awesome-icon class="like" :icon="['far', 'comment']" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card: {
        name: "Robert",
        date: "15/03/20",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2F-TkKO4S3bFZU%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2FdfhYjIlWsO4%2Fs900-c-k-no-mo-rj-c0xffffff%2Fphoto.jpg&f=1&nofb=1",
        description: "Fin de séance, 21k de poussé !!!",
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
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.7);
  min-height: 300px;
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
    span {
      background: transparent;
    }
    .date {
      font-size: 0.8rem;
    }
  }
  .btnCard {
    background: transparent;
    .like {
      background: transparent;
      margin: 5px;
      font-size: 1.5rem;
    }
  }
}
</style>

<template>
  <div class="post">
    <div class="card">
      <div class="img" :style="{ backgroundImage: 'url(' + card.img + ')' }">
        <p class="hautCard">
          <span>{{ card.name }}</span>
          <span>{{ card.date }}</span>
        </p>
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
        img: "../assets/logo.png",
        description: "Fin de séance, 21k de poussé !!!",
      },
    };
  },
};
</script>

<style lang="scss">
.card {
  background-color: wheat;
  min-height: 220px;
  width: 100%;
  .img {
    height: 180px;
    background-color: rgb(207, 207, 207);
  }
  .hautCard {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    background: linear-gradient(#363636b9, #36363600);
    span {
      background: transparent;
    }
  }
}
</style>

<template>
  <div class="post">
    <div class="card">
      <div class="img" :style="{ backgroundImage: 'url(' + card.img + ')' }">
        <p>
          <span>{{ card.name }}</span>
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
    background-color: #fff;
  }
}
</style>

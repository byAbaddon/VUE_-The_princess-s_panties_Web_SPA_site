<template>
  <div class="about-page">


    <h1 class="title">
      <span class="title-icon">⚔️</span>
      Whisper of a Princess
      <span class="title-icon">⚔️</span>
    </h1>

    <v-card class="mx-auto" max-width="1150">
      <v-img color="surface-variant" height="" width="1170" aspect-ratio="16/9" cover
        lazy-src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg" src="/assets/images/about/1.png">
      </v-img>

      <h2 class="title-card text-center">👑 The Prince’s Trial! 👑</h2>
      <v-card-text class="text-card" v-for="(text, index) in cardText" :key="index">
        <div class="font-weight-bold ms-1 mb-2">{{ text }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>


<script setup>

const cardText = [
  '🌟 This is not just a game – it’s a battle for the princess’s heart and the kingdom’s throne!',
  '🚀 The prince must prove his wisdom, intelligence, and courage by answering 15 questions posed by the princess.',
  '🔹 But beware – every wrong answer brings him closer to his doom!',
  '💡  He has three lifelines and the help of an old witch, who may guide him… or deceive him.',
  '✨ If he loses – the executioner will do his job.',
  '🎯 If he wins – love and the crown will be his!',
  '😈 Are you ready for the challenge? ',
]

</script>




<style scoped>
.about-page {
  position: relative;
  min-height: 100vh;
  padding: 2rem;
  color: #e0d6c2;
  overflow-x: hidden;
}



.title-card {
  background: black;
  color: lightcyan;

}

.text-card {
  background: cornflowerblue;
  color: lightcyan;
  font-size: medium;
  text-shadow: 1px 1px 2px #000;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.title {
  font-family: 'UnifrakturMaguntia', cursive;
  text-align: center;
  color: #c9a66b;
  text-shadow: 2px 2px 4px #000;
  font-size: 2.4rem;
  margin-bottom: 1.5rem;
}



.section-title {
  font-family: 'MedievalSharp', cursive;
  color: #b84343;
  border-bottom: 1px dashed #c9a66b;
  padding-bottom: 0.5rem;
}
</style>

<template>
  <div>
    <div class="video-background">
      <video autoplay muted class="background-video">
        <source src="/assets/images/bg/castle.mp4" type="video/mp4" />
      </video>

      <div class="content">

        <v-container>
          <h1 class="title-text d-none d-md-block font-playwrite ">The princess's panties</h1>
          <h1 class=" d-md-none font-playwrite  text-white text-center my-2 text-h2 font-weight-bold text-pink ">The
            princess's panties</h1>

          <h3 v-for="(row, index) in arrayText" :key="index"
            class="d-none d-md-block  font-playwrite txt text-black text-center my-6 text-uppercase">
            {{ row }}
          </h3>

        
        </v-container>

        <div class="text-center">
          <v-btn color="pink" variant="elevated" rounded size="x-large" border="red" style="width: 140px;"
          @click="btnPlay"
          >PLAY</v-btn>
        </div>
      </div>

    </div>




  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import router from "@/router"
import { usePrincessStore } from '../stores/princessesStore'

const store = usePrincessStore()




const arrayText = ref([
'In a distant kingdom, where magic and challenges are part of daily life, your story unfolds. An adventure where you must fight for the heart of the princess and the throne of her father.',
'You are a young, ambitious prince—bold and daring—but before you lies a difficult and perilous trial.The princess, heir to a mighty kingdom, is renowned not only for her beauty but also for her sharp wit. To win her hand and the throne, you must face 15 treacherous questions she will ask you. Each correct answer brings you closer to victory, but a wrong one will summon the executioner, who may grant you a second chance. Fail again, and your story ends forever.',
'Luckily, you won’t face this battle alone. The old enchantress will lend you her aid, and your three lifelines might save you at a critical moment.',
'But beware—the stakes are high: a crown and love… or your head! Will you overcome the trial and emerge victorious? Or will you fall victim to your own recklessness? The choice is in your hands.',
'Are you ready to begin?',
])

onMounted(() => {
  store.isFooterVisible = true
  store.stopAllSounds()
  store.isBackgroundMuted = false
  store.playSound('bgIntro', 0.1)
  
   
  window.scrollTo({
    top: window.innerHeight * 0.1,
    behavior: 'smooth'
  })
})
const btnPlay = () => {
  store.playSound('clickBtn')
  store.isFooterVisible = false
  router.push('/menu').catch(() => { })
}
</script>




<style scoped>
/*<weight>: Use a value from 100 to 400 
*/

.title-text {
  text-align: center;
  text-transform: uppercase;
  color: deeppink;
  font-weight: bold;
  font-size: 5em;
  text-shadow: 0 0 10px rgba(20, 0, 0, 0.8), 0 0 30px rgba(255, 0, 0, 0.6);
}




.font-playwrite {
  font-family: "Playwrite CU", cursive;
  font-optical-sizing: auto;
  font-weight: 100;
  font-style: normal;
}

.txt{
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
}


.video-background {
  position: relative;
  width: 100%;
  height: 78vh;
  max-height: 78vh;
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  max-height: 78vh;
}

.content {
  position: relative;
  z-index: 1;
}


.background {
  background-image:
  linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
    url('/assets/images/home4.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>

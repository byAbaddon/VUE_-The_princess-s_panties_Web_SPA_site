<template>
  <div class="">
    <div>
      <v-row class="d-flex  justify-center  align-center flex-column text-h5">
        <v-col cols="4">
          <h1 class="game-over  mt-3 text-yellow-darken-3 cursor-wait" style="position: relative;top:5px; right:11px">
           {{ title }} </h1>
        </v-col>

        <v-col class="pt-0">
          <div class="bg-black">
            <v-img class="mx-auto" :width="1170" aspect-ratio="16/9" cover
              :src="imgURL"></v-img>
          </div>
        </v-col>

        <v-col class="py-0">
          <div style="width: 99%;" class="ml-2 text-yellow-darken-3 text-justify "
            :class="isLargeScreen ? 'text-body-1' : 'text-h5'">
            <v-pre v-if="title == 'GAME OVER'">
              You have failed and did not succeed in the princess's challenges. Your dreams of love, glory, and wealth
              have come to an end. Now, imprisoned in the dark dungeon, you await the same fate as the other unfortunate
              souls before you.

              Countless suitors for the princess's heart have met their end on the scaffold. Await the executioner, who
              will lead you to the square for execution before the gathered crowd.

              Your story ends here! But remember: the legends of the princess and her challenge will live on, as long as
              there are brave souls willing to risk their lives.
            </v-pre>

            <v-pre v-else>
              You overcame all the challenges and won the kingdom and the hand of the princess. You proved that you are
              wise and worthy of her heart. Your dreams of love, glory, and wealth have come true. The king, with
              respect and admiration in his eyes, offers you the princess's hand, and the entire kingdom celebrates its
              new hero.
              You will remain in history as an unmatched hero, inspiring future brave souls. But remember: the true
              victory lies in the path you walked and the sacrifices you made in the name of love.
            </v-pre>
          </div>
        </v-col>
      </v-row>

    </div>

  </div>
</template>

<script setup>

import { useDisplay } from 'vuetify'
import { usePrincessStore } from '../stores/princessesStore'
import { ref, computed, onMounted } from "vue"

const store = usePrincessStore()

const { xxl, xl, lg, md, sm, xs, mdAndUp, width } = useDisplay() // xl true if display biggest from 1920px+
const isLargeScreen = computed(() => width.value < 1500)


const title = ref('')
const imgURL = ref( store.countCorrectAnswers >= 15 ? '/assets/images/wedding/wedding.png' : '/assets/images/man/1.png')


onMounted(() => {
  store.stopAllSounds()
  if (store.countCorrectAnswers >= 15) {
    store.playSound('bgEpilogueWin', 0.3, true)
    title.value = 'YOU WON'

  } else {
    store.playSound('bgEpilogueLoss', 0.3, true)
    title.value = 'GAME OVER'
  }

})



</script>



<style scoped>
@keyframes colorFlash {
  from {
    color: blue;
  }

  to {
    color: red;
  }
}



@keyframes moveLeftRight {
  0% {
    transform: translateX(120px);
  }

  25% {
    transform: translateX(240px);
  }

  50% {
    transform: translateX(0px);
    color: red !important;
  }

  75% {
    transform: translateX(240px);
  }

  100% {
    transform: translateX(120px);
  }
}

.game-over {
  display: inline-block;
  position: relative;
  /* for use transform */
  animation: moveLeftRight 10s ease-in-out infinite forwards;
  color: #FF6F00;
  white-space: nowrap;
}
</style>

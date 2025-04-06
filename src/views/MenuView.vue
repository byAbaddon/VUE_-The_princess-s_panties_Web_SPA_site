<template>
  <div class="menu-page bg-black">
    <h1 class="text-deep-purple-lighten-4 text-center">- CHOICE PRINCESS FROM CATALOG -</h1>

    <v-row class="my-1">
      <v-col v-for="(princess, id) in store.princessesCatalogArray" :key="id" class="d-flex child-flex mb-3">
        <!--  ======= create cards ========== -->
        <v-card class="mx-auto bg-grey-darken-4" max-height="466" min-height="466" max-width="300" min-width="300">
          <!--  title  -->
          <v-card-title style="resize: none; overflow: auto; color:dodgerblue; text-align: center">

            <span style="color: dodgerblue;">Princess </span>
            <span class="text-pink-lighten-2">{{ princess }}</span>
          </v-card-title>


          <!--  divider  -->
          <v-divider class="mx-12 py-2 "></v-divider>

          <!--  img  -->
          <v-img 
          :src="`/assets/images/princesses/catalog/${princess}.png`"
            :lazy-src="`https://picsum.photos/10/6?image=${4}`" 
           
            aspect-ratio="0.9"
            
             alt="img" class="mx-auto blur">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>

          <!--  divider  -->
          <v-divider class="mx-12 mt-3"></v-divider>
          <v-card-actions class="d-flex justify-between align-center" style="min-width: 16em">
            <v-btn @click="princessDetailsBtn(princess , id)" class="bg-blue-darken-4 mx-auto"
            variant="flat">Details</v-btn>
           
            <v-btn @click="princessChoiceBtn(princess, id)" class="bg-pink-lighten-1 mx-auto"
              variant="flat"
              >Choice</v-btn>

          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { usePrincessStore } from '../stores/princessesStore'

import router from "@/router"
import { useRoute } from "vue-router"
import { ref ,  onMounted} from "vue"

const store = usePrincessStore()
const route = useRoute();


onMounted(() => {
  store.stopAllSounds()
  store.isBackgroundMuted = false
  store.playSound('bgDetails', 0.1)
  
})



const princessDetailsBtn = (princessName, id) => {
  store.playSound('clickBtn')
  router.push({ path: "/details", query: { princessName, id } }).catch(() => {})
}

const princessChoiceBtn = (princessName, id) => {
  store.playSound('clickBtn')
  // console.log('princess ' + name, id)
  router.push({ path: "/game", query: { princessName, id } }).catch(() => { })
  // router.push({ path: "/about", query: { princessName, id } }).catch(() => { })


}

</script>



<style scoped> 
</style>
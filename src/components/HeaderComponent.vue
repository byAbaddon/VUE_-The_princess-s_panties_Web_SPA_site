<template>
  <v-app-bar height="50" color="indigo-darken-4" :image="imageSrc">

    <!-- title label ---->
    <v-toolbar-title class="font-weight-bold ml-12 d-none d-sm-block ">QUIZ MANIA</v-toolbar-title>
    <!-- desktop version routing ---->
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>


    <!-- router page links ---->
    <div>
      <v-btn @click="onPath" class="font-weight-bold">Home</v-btn>
      <v-btn v-show="store.isFooterVisible" @click="onPath" class="font-weight-bold  mr-n4">About</v-btn>
    </div>

    <!-- icons ---->
    <v-btn icon class="ml-7" @click="soundStopPlay">
      <v-icon :class="store.isBackgroundMuted ? 'text-red' : 'text-purple-lighten-4'">
       mdi-volume-medium
      </v-icon>
    </v-btn>

  </v-app-bar>


</template>


<script setup>
// import imageSrc from '@/assets/images/bg/header.png';
import { usePrincessStore } from '../stores/princessesStore'
import { useRouter } from 'vue-router'

const store = usePrincessStore()
const imageSrc = "/assets/images/bg/bg.png"



const router = useRouter()
const onPath = e => {
  let path = e.target.innerText.toLowerCase().trim()
  router.push(path == 'home' ? '/' : path)
}


const soundStopPlay = () => {
  store.isBackgroundMuted = !store.isBackgroundMuted
  store.stopAllSounds()
  if(!store.isBackgroundMuted) store.playSound(store.currentSound, 0.1) 
}

</script>





<style scoped></style>

<template>
  <v-app class="container">
    <HeaderComponent class="item" />
    <v-main class="item">
      <div v-if="store.phoneScreen" class="mt-15">
        <v-row class="d-flex justify-center flex-column my-15">
          <v-col>
            <p class="text-center text-h5 text-teal-darken-3">Not supported phone mode</p>

          </v-col>
          <v-col class="text-center">
            <img src="/assets/images/bg/phone.png" alt="Not supported" width="400" />
          </v-col>

          <v-col class="text-center text-h5 text-yellow  ">
            <p>Only Desktop</p>
          </v-col>  
        </v-row>

        
        <v-row class="d-flex justify-space-around">
          <v-col cols="7" class="mt-16 pt-16">
            <v-text class="text-white">By Abaddon</v-text>
          </v-col>
          <v-col cols="auto" class="mt-16 pt-16">
            <v-text class="text-white">Copyright 2025</v-text>
          </v-col>
        </v-row>
      </div>

      <router-view v-else />
    </v-main>
    <FooterComponent class="item" v-show="store.isFooterVisible"/>
  </v-app>
</template>


<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue"
import FooterComponent from "@/components/FooterComponent.vue"
import router from "@/router"
import { onBeforeMount } from "vue"

import { usePrincessStore } from '@/stores/princessesStore'
const store = usePrincessStore()

// onBeforeMount(() => {
//   console.log('Page mounted')
//   router.push("/").catch(() => { })
// })

</script>



<style>
body {
  font-family: "Playwrite CU", cursive;
  user-select: none;
  background: whitesmoke;

}

.container {
  display: flex;
  flex-wrap: wrap;
}

.item {
  flex: 1;
  margin: 0px;
  background: #141b66 !important;

}

.v-main {
  margin-top: -5px
}
</style>
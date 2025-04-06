<template>
  <div>
    <v-row>
      <v-col v-for="(item, index) in games" :key="item.id" cols="4">
        <v-card class="mx-auto" max-width="400">

          <v-img :draggable="false" class="align-end text-white" height="200" :src="item.img" cover>
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>

          <v-card-text :style="{ display: 'none' }">
            <div>Index: {{ index }}</div>
            <div>Name: {{ item.name }} </div>
            <div>Url: {{ item.url }} </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" @click="getInfoBtn">
              Info
            </v-btn>

            <v-btn color="darkgreen">
              Play
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script setup>
import { ref, onBeforeMount } from "vue"
import { getAllMoviesFromBase } from "@/service/loadAllGames"


const games  = ref()

onBeforeMount(async () => {
  // games.value = await getAllMoviesFromBase()
})


const getInfoBtn = (event) => {
  const cardInfo = event.target.closest('.v-card').children[2]
  cardInfo.style.display = cardInfo.style.display == 'block' ? 'none' : 'block'
}


setTimeout(() => {
  console.log(games.value)
}, 1111);


</script>





<style scoped>
div {
  background: rgba(236, 226, 226, 0.212)
}
</style>
<template>
  <div class="d-sm-none">

    <v-dialog v-model="modelDialog" persistent="false">
      <v-row noGutters class="d-flex justify-center align-center"
        style="max-height: 100vh; overflow-y: auto;  overflow-x: hidden; ">

        <!-- Title and image -->
        <v-col cols="12" md="3" class=" bg-grey-darken-4" alignSelf="stretch">

          <div>
            <h4 class="t-color text-center text-white bg-grey-darken-3 pb-1">
              <span style="color: dodgerblue;">Princess </span>
              <span class="text-pink-lighten-3">{{ princessName }} </span>
            </h4>
          </div>

          <v-img lazy-src="/assets/images/imageNotFound.png" aspect-ratio="0"
            :src="`/assets/images/princesses/catalog/${princessName}.png`"
            style="border: 2px solid grey ; margin-bottom:-22px" cover>
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular color="red" bg-color="black" indeterminate></v-progress-circular>
              </div>
            </template>
          </v-img>

          <!--  Flag and Country  -->
          <div class="bg-grey-darken-4 text-center" v-if="princessData">
            <p class="mt-8" style="color: #929eae">From country:
              <span class="text-white" > {{ princessData.country.toUpperCase() || null }} </span>
            </p>
            <p class="" style="font-size: 70px;"> {{ princessData.flag || null }} </p>
          </div>
          <div v-else>Loading...</div>
        </v-col>


        <v-col cols="12" md="6" alignSelf="stretch">
          <v-card class="" color="grey-darken-4" style="height: 100%;">
            <template v-slot:loader="{ isActive }">
              <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
            </template>

            <h4 class="t-color  text-center bg-grey-darken-3 pb-2">Person Description and Features</h4>

            <v-card-item class=" bg-grey-darken-4 ">
              <!-- zodiac -->
              <v-row class="d-flex justify-space-evenly  align-space-around ">
                <v-col class="bg-grey-darken-4">
                  <v-chip class="ma-2"
                   prepend-icon="mdi-zodiac-pisces">
                    <span >Zodiac:</span>&nbsp;
                    {{ princessData?.zodiac }}</v-chip>
                </v-col>
               
              </v-row>
              <!-- personality -->
              <v-divider class=""></v-divider>
              <v-chip class="ma-2" color=""
                prepend-icon="mdi-account-details"><span>Personality:</span>&nbsp;
                {{ princessData?.personality }} </v-chip>
              <!-- interests-->
              <v-divider class=""></v-divider>
              <v-chip class="ma-2" color="" prepend-icon="mdi-book-open-variant">
                <span>Interests:</span>&nbsp;{{ princessData?.interests }} </v-chip>

              <!--behavior -->
              <v-divider class=""></v-divider>
              <v-chip  class="ma-2" color="" prepend-icon="mdi-hand-heart">
                <span>Behavior:</span>&nbsp; {{ princessData?.behavior }}</v-chip>

              <!-- sexual_orientation-->
              <v-divider class=""></v-divider>
              <v-chip  class="ma-2" color="" prepend-icon="mdi-gender-male-female">
                <span>Sexual orientation:</span>&nbsp; {{ princessData?.sexual_orientation }}
              </v-chip>

              <!-- intimate_partners-->
              <v-divider class=""></v-divider>
              <v-chip class="ma-2" color="" prepend-icon="mdi-account-group">
                <span>Intimate partners:</span>&nbsp; {{ princessData?.intimate_partners }}</v-chip>

              <!--sexual_experience -->
              <v-divider></v-divider>
              <div v-if="princessData" class="bg-grey-darken-4">
                <v-chip class="ma-2 float-left" color="" prepend-icon="mdi-heart">
                  <span>Sexual experience:</span>&nbsp; {{ princessData?.sexual_experience.split('_')[1] }}
                </v-chip>
                <v-rating length="5" :model-value="princessData.sexual_experience.split('_')[0]" color="amber"
                  class="float-right mt-3" style="background-color: transparent;" density="compact" size="small"
                  readonly></v-rating>
              </div>

              <!-- sexual_liberality -->
              <v-divider class="mt-12"></v-divider>
              <div v-if="princessData" class="bg-grey-darken-4">
                <v-chip  class="ma-2" color="" prepend-icon="mdi-heart-flash">
                  <span>Sexual liberality:</span>&nbsp; {{ princessData?.sexual_liberality.split('_')[1] }}</v-chip>
                <v-rating length="5" :model-value="princessData.sexual_liberality.split('_')[0]" color="amber"
                  class="float-right mt-3" style="background-color: transparent;" density="compact" size="small"
                  readonly></v-rating>
              </div>

              <!-- sexual_desire-->
              <v-divider class=""></v-divider>
              <div v-if="princessData" class="bg-grey-darken-4">
                <v-chip  class="ma-2" color="" prepend-icon="mdi-heart-pulse">
                  <span>Sexual desire:</span>&nbsp; {{ princessData?.sexual_desire.split('_')[1] }}</v-chip>
                <v-rating length="5" :model-value="princessData.sexual_desire.split('_')[0]" color="amber"
                  class="float-right mt-3" style="background-color: transparent;" density="compact" size="small"
                  readonly></v-rating>
              </div>
              <v-divider class=""></v-divider>

            </v-card-item>



            <v-card-actions class="justify-center bg-grey-darken-4 ma-3">
              <v-btn variant="outlined" color="red-lighten-2" @click="close" width="150">Close</v-btn>
            </v-card-actions>

          </v-card>

        </v-col>


      </v-row>
    </v-dialog>
  </div>
</template>



<script setup>
import router from "@/router"
import { usePrincessStore } from '../stores/princessesStore'
import { useDisplay } from 'vuetify'
import princessDataJSON from '/public/assets/data/princesses.json'
import { ref, onMounted } from "vue"

const store = usePrincessStore()
const princessName = ref(null)
const princessData = ref(null)
const modelDialog = ref(true)
const { xs } = useDisplay()


onMounted(() => {
  const id = router.currentRoute.value.query.id
  princessName.value = store.princessesCatalogArray[id]
  princessData.value = princessDataJSON[princessName.value]
  // prinsesses.json
})



const close = () => {
  store.playSound('clickBtn')
  router.back()
  modelDialog.value = false
}





</script>



<style scoped>
.wrap-text {
  white-space: normal;
  word-break: break-word;
  text-align: center;
}

div {
  background: rgba(2, 2, 2, 0.212)
}

span.v-chip ::before {
  color: cornflowerblue;
}



span.v-chip span {
  color: lightsteelblue;
}

.t-color {
  color: lavender;
}


span.v-chip span[data-v-f34ca824]{
color: #ff88c0;
}

</style>
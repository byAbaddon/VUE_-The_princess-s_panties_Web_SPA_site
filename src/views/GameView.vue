<template>
  <!-- if no prison page, show -->
  <div v-if="!route.path.includes('/game/prison')" class="menu-page bg-black">
    <!-- <h1 class="text-deep-purple-lighten-4 text-center">- PRINCESS  {{ princessName  }}, waiting for you -</h1> -->


    <v-row class="my-1">
      <!-- container 1-->
      <v-col clos="auto">
        <v-container>

          <!-- Type     -->
          <v-card class="mx-auto bg-grey-darken-4" min-height="144" max-height="144" max-width="350" min-width="350">
            <v-row>
              <v-col cols="12" md="3">
                <v-img height="88" src="/assets/images/items/type.png" cover></v-img>
              </v-col>

              <v-col>
                <p class="mа-4">
                  <span style="color: dodgerblue;">Princess </span>
                  <span class="text-pink-lighten-2">{{ princessName }} </span> chose:
                </p>

                <v-chip class="ma-2" color="green-lighten-1" rounded>
                  <v-icon icon="mdi-alpha-t-circle-outline" start></v-icon>
                  TYPE
                </v-chip>


                <v-progress-linear class="my-2 " color="green-lighten-1" height="2" style="max-width: 90%;"
                  :indeterminate="!stopProgressLine" rounded model-value="100"></v-progress-linear>

                <div class="mb-5  text-uppercase text-center">
                  <v-text v-model="store.questionsDataObj.type" class="mb-2 text-body-1 ">
                    {{ formattedType }}
                  </v-text>
                </div>
                <!-- <v-icon color="red">mdi-message-text</v-icon>  -->
              </v-col>
            </v-row>
          </v-card>

          <!-- Category     -->
          <v-card class="mx-auto bg-grey-darken-4 my-6 py-3" min-height="157" max-height="157" max-width="350"
            min-width="350">
            <v-row>
              <v-col cols="12" md="3">
                <v-img height="88" src="/assets/images/items/category.png" cover></v-img>
              </v-col>

              <v-col>
                <p class="mа-4">
                  <span style="color: dodgerblue;">Princess </span>
                  <span class="text-pink-lighten-2">{{ princessName }} </span> chose:
                </p>

                <v-chip class="ma-2" color="yellow-darken-1" rounded>
                  <v-icon icon="mdi-alpha-c-circle-outline" start></v-icon>
                  CATEGORY
                </v-chip>


                <v-progress-linear class="my-2" color="yellow-darken-2" height="2" style="max-width: 90%;"
                  :indeterminate="!stopProgressLine" rounded model-value="100"></v-progress-linear>

                <div class="mb-5  text-uppercase text-center">
                  <v-text class="mb-2 text-body-1">
                    {{ store.questionsDataObj?.category || "No choice yet" }}
                  </v-text>
                </div>
                <!-- <v-icon color="red">mdi-message-text</v-icon>  -->
              </v-col>
            </v-row>
          </v-card>

          <!-- Difficulty     -->
          <v-card class="mx-auto bg-grey-darken-4" min-height="127" max-height="127" max-width="350" min-width="350">
            <v-row>
              <v-col cols="12" md="3">
                <v-img height="88" src="/assets/images/items/difficulty.png" cover></v-img>
              </v-col>

              <v-col>
                <p class="mа-4">
                  <span style="color: dodgerblue;">Princess </span>
                  <span class="text-pink-lighten-2">{{ princessName }} </span> chose:
                </p>


                <v-chip class="ma-2" color="blue-lighten-3" rounded>
                  <v-icon icon="mdi-alpha-d-circle-outline" start></v-icon>
                  DIFFICULTY
                </v-chip>

                <v-progress-linear class="my-2" color="cyan" height="2" style="max-width: 90%;"
                  :indeterminate="!stopProgressLine" rounded model-value="100"></v-progress-linear>
                <div class="mb-5  text-uppercase text-center">
                  <v-text v-model="store.questionsDataObj.difficulty" class="text-body-1  text-uppercase"
                  :class="formattedDifficulty == 'Easy' ? 'text-white' :
                    formattedDifficulty == 'Medium' ? 'text-yellow' : 'text-red' " 
                  >
                    {{ formattedDifficulty }}
                  </v-text>
                </div>


                <!-- <v-icon color="red">mdi-message-text</v-icon>  -->
              </v-col>
            </v-row>



          </v-card>

          <!--  Timer -->
          <v-card class="mx-auto bg-grey-darken-4 mt-7" max-width="350" min-width="350">
            <v-row>

              <!-- <v-col cols="12" md="3">
      <v-img height="66" src="/assets/images/items/timer.png" cover></v-img>
    </v-col> -->
              <v-col>
                <p class="text-center  ">
                  Progress timer...
                </p>

                <v-progress-linear class="mt-3 mb-4" style="max-width: 80% ; color: #d12b40" rounded striped height="2"
                  :indeterminate="!stopProgressLine" :model-value="timerSeconds * 1.7"></v-progress-linear>
                <div class=" time-display  text-center mb-2">
                  {{ formattedTime }}
                </div>

              </v-col>
            </v-row>
          </v-card>




        </v-container>
      </v-col>

      <!-- image-->
      <v-col clos="auto">
        <v-container>
          <v-hover v-slot="{ isHovering, props }">
            <v-card class="mx-auto bg-grey-darken-4" max-height="614" max-width="488" min-width="488"
              :class="{ 'on-hover': isHovering }" :elevation="isHovering ? 12 : 2" v-bind="props">
              <!--  title  -->
              <v-card-title v-show="!stopProgressLine"
                style="resize: none; overflow: auto; color:dodgerblue; text-align: center">
                <span style="color: dodgerblue;">Princess </span>
                <span class="text-pink-lighten-2">{{ princessName }} </span>
              </v-card-title>
              <!--  img  --> 
             <div style="border:1px dotted rgb(2, 59, 85) ">
           
              <v-img :src="princessImageSrc" lazy-src="/assets/images/princesses/Yaga.png"
                              
                 aspectRatio="0.9"
                 
                 color="#000000"   
                         
                 transition="fade-transition"
                 eager
                :draggable="false"
                 alt="Image" class="mx-auto  blur">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </div>
              <!--  divider  -->
              <!-- <v-divider class="mx-12 mt-3"></v-divider> 
              <v-card-title style="white-space: normal; border:2px solid darkgreen; margin-top:2px">
                {{ displayedText || isGameStart ? displayedText : "Press START button to begin our adventure..." }}
              </v-card-title>  -->
            </v-card>
          </v-hover>
        </v-container>
      </v-col>

      <!-- container 3-->
      <v-col clos="auto">

        <v-container>

          <!-- Messages  from princess   -->
          <v-card class="mx-auto bg-grey-darken-4" max-height="144" max-width="350" min-width="350" min-height="144">
            <v-row>
              <v-col cols="12" md="3">
                <v-avatar size="96">
                  <v-img v-if="!isDevilSession" alt="Princess IMG"
                    :src="`/assets/images/princesses/catalog/${princessName}.png`"></v-img>
                  <v-img v-else alt="Devil IMG" src="/assets/images/devil/devilPhoto.png"></v-img>

                </v-avatar>
              </v-col>

              <v-col>

                <p class="mа-4">
                  <v-wrap v-if="!isDevilSession">
                    <span style="color: dodgerblue;">Princess </span>
                    <span class="text-pink-lighten-2">{{ princessName }} </span> says:
                  </v-wrap>
                  <v-wrap v-else>
                    <span style="color: rgb(233, 179, 4);">Headsmen </span>
                    <span style="color: red;">Devil </span> says:
                  </v-wrap>

                </p>

                <v-chip class="ma-2" :color="colorPrincessMessage || 'mdi-message'" rounded>
                  <v-icon :icon="iconPrincessMessage || 'red'" start></v-icon>
                  Says
                </v-chip>


                <v-progress-linear class="my-2" :color="colorPrincessMessage" height="2" style="max-width: 90%;"
                  :indeterminate="!stopProgressLine" rounded model-value="100"></v-progress-linear>

                <div class="mb-5   text-body-1">
                  <v-wrap v-if="!isDevilSession">
                    <p class="mb-3">
                      {{ princessSays || 'No message yet' }}
                    </p>
                  </v-wrap>
                  <v-wrap v-else>
                    <p class="mb-3" style="color:rgb(228, 15, 15);  text-shadow: 0.5px  white;">
                      Answer correctly or die!
                    </p>
                  </v-wrap>

                </div>
                <!-- <v-icon color="red">mdi-message-text</v-icon>  -->
              </v-col>
            </v-row>
          </v-card>


          <!-- Ask The old witch    -->
          <v-card class="mx-auto bg-grey-darken-4 my-6 py-3" max-width="350" min-width="350">
            <v-row>
              <v-col cols="12" md="3">
                <v-avatar size="96" alt="Witch">
                  <v-img height="88" src="public/assets/images/princesses/witch1.png" cover></v-img>
                </v-avatar>
              </v-col>

              <v-col>
                <p class="mа-4">
                  <span style="color: green;">The old </span>
                  <span class="text-yellow-darken-3"> Witch </span> says:
                </p>

                <v-chip class="ma-2" :color="colorWitchMessage || 'red'" rounded>
                  <v-icon :icon="iconWitchMessage || 'mdi-message'" start></v-icon>
                  Says
                </v-chip>
                <v-btn @click="btnAskWitch" class="ml-16" size="default" color="yellow-darken-3"
                  :disabled="!isSessionStart || witchSays.length">ASK</v-btn>


                <v-progress-linear class="my-2 mb-" :color="colorWitchMessage || 'red'" height="2"
                  style="max-width: 90%;" :indeterminate="!stopProgressLine" rounded
                  model-value="100"></v-progress-linear>

                <div class="mb-5  text-uppercase">
                  <p class="mb-2 text-body-1">
                    {{ witchSays || 'No answer yet' }}
                  </p>
                </div>
                <!-- <v-icon color="red">mdi-message-text</v-icon>  -->
              </v-col>
            </v-row>
          </v-card>

          <!-- JOKER     -->
          <v-card class="mx-auto bg-grey-darken-4" max-width="350" min-width="350">
            <v-row>
              <v-col cols="12" md="3">
                <v-avatar size="96" alt="Joker">
                  <v-img height="88" src="/assets/images/princesses/joker.png" cover></v-img>
                </v-avatar>
              </v-col>

              <v-col>
                <p class="mа-4">
                  <span style="color:burlywood ;">Joker </span>
                  <span style="color: rgb(131, 157, 240)">bonuses</span> chose:
                </p>

                <v-progress-linear class="mt-4 mb-4" color="blue-darken-2" height="2" style="max-width: 90%;"
                  :indeterminate="!stopProgressLine" rounded model-value="100"></v-progress-linear>

                <div class="mb-1 pb-2 d-flex justify-space-around">


                  <v-btn @click="btnPhone" icon="mdi-phone" size="large" :color="bgColorOne"
                    :disabled="bgColorOne == 'pink' || !isSessionStart ? true : false" style="font-size: 14px">
                  </v-btn>

                  <v-btn @click="btnPercent" icon="mdi-percent" size="large" :color="bgColorTwo"
                    :disabled="bgColorTwo == 'pink' || !isSessionStart ? true : false">50%
                  </v-btn>



                  <v-btn @click="btnPublic" icon="mdi-human-capacity-increase" size="large" :color="bgColorThree"
                    :disabled="bgColorThree == 'pink' || !isSessionStart ? true : false">
                  </v-btn>
                </div>

              </v-col>
            </v-row>



          </v-card>

          <!--  Progress -->
          <v-card class="mx-auto bg-grey-darken-4 mt-7" max-width="350" min-width="350">
            <v-row>
              <v-col>
                <p class="mа-4 text-center">
                  Progress to the princess's heart:
                </p>

                <v-progress-linear class="mt-4 mb-4" striped color="" height="2" style="max-width: 84%; color: #dd1c5d;"
                  rounded :indeterminate="!stopProgressLine"
                  :model-value="(store.countCorrectAnswers - 1) * 7"></v-progress-linear>

                <div class="text-center">
                  <v-rating :model-value="store.countCorrectAnswers" length="15" density="compact" readonly>
                    <template v-slot:item="{ index }">
                      <span style="margin: 3px; font-size: 13px;color: #dd1c5d;">
                        {{ index < store.countCorrectAnswers - 1 ? '❤️' : '🖤' }} </span>
                    </template>
                  </v-rating>

                </div>

              </v-col>
            </v-row>



          </v-card>

        </v-container>


      </v-col>
    </v-row>

<div class="text-question " :class="`text-${colorAnswer}`">
    {{ displayedText || isGameStart ? displayedText : "Press START button to begin our adventure..." }}
  
</div>


    <div style="background: #141b66">
      <div v-show="!isGameStart" class="text-center pt-16">
        <v-btn @click="btnStart" size="x-large" color="pink" variant="flat">Start</v-btn>
      </div>

      <!--  Answer Buttons -->
      <v-row v-show="isGameStart && isShowButtons" class="my-1" style="background: #141b66">
        <v-col clos="" v-for="(question, id) in store.questionsDataObj.incorrect_answers" :key="id" class="d-flex"
          :class="isDevilSession || isCenterButtons ? 'justify-center' : ''">


          <div style="position:relative; left: 10.5em; color:cyan;" class="joker"> {{ getJokerText(id) }}
            <v-icon v-show="jokerIcon" :color="getJokerIconColor(id)" size="28">
              {{ getJokerIcon(id) }}
            </v-icon>
          </div>


          <v-btn @click="btnAnswer(id, question)" class=" my-hover-btn   text-none mt-10  justify-space-between "
            color="" style="border: 1px solid teal;" size="x-large" height="4em" width="290" rounded="lg" model
            :variant="btnAnswerVariant[id]" :disabled="btnAnswerIsEnabled[id] || btnAnswerIsDisabled" append-icon="mdi-check-circle"
            :prepend-icon="['mdi-alpha-a', 'mdi-alpha-b', 'mdi-alpha-c', 'mdi-alpha-d'][id]">

            <template v-slot:prepend>
              <v-icon color="yellow-darken-4" class="first-icon "></v-icon>
            </template>

            <span class="btn-text">
              {{ question }}
            </span>

            <template v-slot:append>
              <v-icon end :color="!answerColorIcon ? '' : id == answerColorIcon ? 'success' : 'error'"
                class="second-icon"></v-icon>
            </template>

          </v-btn>


          <v-overlay v-model="overlay" persistent="false"></v-overlay>
        </v-col>
      </v-row>
    </div>

  </div>

  <KeepAlive>
    <router-view />
  </KeepAlive>

</template>

<script setup>

import { usePrincessStore } from '../stores/princessesStore'
import { useRoute } from "vue-router"
import router from "@/router"
import confetti from "canvas-confetti"
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue"


//values
const store = usePrincessStore()
const route = useRoute()
const princess = route.query
const princessName = ref(princess.princessName)
const isGameStart = ref(false)
const isSessionStart = ref(false)
const isDevilSession = ref(false)
const isShowButtons = ref(false)
const isCenterButtons = ref(false)
const isWitchAsked = ref(false)


const stopProgressLine = ref(false)
const overlay = ref(false)
const princessSays = ref("")  //'No communication yet'
const witchSays = ref("")  //'No answer yet'
const displayedText = ref("") // questions text 
const timerSeconds = ref(0)
const time = ref(0)
const interval = ref(null)
const bgColorOne = ref('#1770c7')
const bgColorTwo = ref('#1770c7')
const bgColorThree = ref('#1770c7')
const answerColorIcon = ref('')
const jokerIcon = ref([])
const jokerText = ref([])
const jokerColor = ref([])
const btnAnswerVariant = ref([])
const btnAnswerIsEnabled = ref([])
const btnAnswerIsDisabled = ref(false)
const iconPrincessMessage = ref('mdi-message')
const colorPrincessMessage = ref('red')
const iconWitchMessage = ref('mdi-message')
const colorWitchMessage = ref('red')
const colorAnswer = ref('white')
const usedSessionMessagePrincess = ref([])
const usedSessionMessageWitch = ref([])


//--------------------------------------- Mount
onMounted(() => {
  store.isBackgroundMuted = false
  store.stopAllSounds()
  store.countCorrectAnswers = 1
  setTimeout(() => store.playSound('hiPrincess', 0.5), 500)
  setTimeout(() => princessSay(), 1700)
})

onBeforeUnmount(() => {
  isGameStart.value = false
  isSessionStart.value = false
})


// -------------------------------------- Computed
const princessImageSrc = computed(() => {
  if (isDevilSession.value && isGameStart.value) {
    return '/assets/images/devil/devil.png'
  }

  return `/assets/images/princesses/${princessName.value}/${store.countCorrectAnswers}.png`
})

const formattedType = computed(() => {
  try {
    const types = store.questionsDataObj.type
    return types.charAt(0).toUpperCase() + types.slice(1)
  } catch (error) {
    return "No choice yet"
  }

})

const formattedDifficulty = computed(() => {
  try {
    const difficulty = store.questionsDataObj.difficulty
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
  } catch (error) {
    return "No choice yet"
  }

})




//---------------------------------------- Watch


//------play bg sound again
watch(() => store.isBackgroundMuted, (newValue) => {
  if (!newValue && isGameStart.value) {
    if (store.countCorrectAnswers <= 5) store.currentSound = 'bgLevelOne'
    else if (store.countCorrectAnswers <= 10) store.currentSound = 'bgLevelTwo'
    else store.currentSound = 'bgLevelThree'

    console.log(newValue, store.currentSound)
    store.playSound(store.currentSound, 0.1, true)
  }
})



//------watch is answers to big

// const hasLargeAnswers = computed(() => {
//   try {
//     const incorrectAnswers = store.questionsDataObj?.incorrect_answers || [];
//     return incorrectAnswers.some(answer => answer.length > 70);  //TODO:

//   } catch (error) {
//     console.log('Opsss', error);

//   }

// })

// let isFetching = false;

// watch(hasLargeAnswers, async (newValue) => {
//   if (newValue && !isFetching) {
//     isFetching = true;
//     await store.fetchQuestion();
//     isFetching = false;
//   }
// });


//--------effect text
watch(() => store.questionsDataObj.question, (newText) => {
  if (newText) {
    typeText(newText) // call function
  }
})

const typeText = (text) => {
  displayedText.value = ""
  const words = text.split(" ")
  let index = 0

  const interval = setInterval(() => {
    if (index < words.length) {
      displayedText.value += (index === 0 ? "" : " ") + words[index]
      index++
      store.playSound('type')
    } else {
      clearInterval(interval)
    }
  }, 250)
}



// ---------------------------------------  Actions  


const resetSessionSettings = () => {
  answerColorIcon.value = ''
  btnAnswerIsDisabled.value = false
  isShowButtons.value = false
  jokerText.value = []
  jokerIcon.value = []
  jokerColor.value = []
  btnAnswerVariant.value = []
  btnAnswerIsEnabled.value = []
  iconPrincessMessage.value = 'mdi-message'
  colorPrincessMessage.value = 'red'
  iconWitchMessage.value = 'mdi-message'
  colorWitchMessage.value = 'red'
  colorAnswer.value = 'white'
  if (store.countCorrectAnswers % 6 == 0) witchSays.value = ''
  

}


// -- start game first time
const btnStart = async () => {

  console.log('start game')

  //add bg sounds------------------
  store.playSound('bgLevelOne', 0.1, true)

  showHideAnswersButtons() // time for show buttons
  stopProgressLine.value = true
  isGameStart.value = true
  isSessionStart.value = true
  await store.fetchQuestion()
  // start timer
  interval.value = setInterval(() => time.value++, 10)
  iconPrincessMessage.value = 'mdi-message'
  colorPrincessMessage.value = 'red'
  princessSays.value = ''
  princessSay()
}


const btnAnswer = (id, answer) => {
  store.playSound('clickBtnAnswer')
  // ---- check is answer Correct or Wrong
  if (answer.trim() == store.questionsDataObj.correct_answer.trim()) { // ***CORRECT Answer***
    // console.log(store.countCorrectAnswers, '  show N ')
    if (store.countCorrectAnswers >= 15) { //----------- WIN go to Epilog Game Pag
      router.push({ path: "/epilogue" , query: { result: 'won'}}).catch(() => {console.log(e) })
    } else {  //---------------------------------------- continue game      
      isSessionStart.value = true
      correctAnswer(id)
    }
  } else {  // ***WRONG Answer***   
    if (isDevilSession.value) {  //----------------------- LOSS go to Epilog Game Page
      router.push("/epilogue").catch((e) => { console.log(e);
       })
    } else { //------------------------------------------------------ continue game
      wrongAnswer(id)
    }

  }
}


const correctAnswer = (btnID) => {
  store.playSound('correctAnswer', 0.5)
  
  displayedText.value = 'Correct answer !'
  colorAnswer.value = 'green-accent-2'
  answerColorIcon.value = btnID
  princessSay()
  launchHearts()
  reloadNewSession()
  
  if (!isDevilSession.value) {  
    setTimeout(() => {store.playSound('omgPrincess', 1)}, 1400);
    store.countCorrectAnswers++
  } else {
    isDevilSession.value = false
    setTimeout(() => {isCenterButtons.value = false}, 4000);
  }

 
}



const wrongAnswer = (btnID) => {   //this call devilSession function
  store.playSound('wrongAnswer', 0.1)
  launchHearts(true)
  setTimeout(() => {store.playSound('noPrincess', 1)}, 700);
  displayedText.value = 'Wrong answer !'
   colorAnswer.value = 'red-accent-3'
   setTimeout(() => devilSession(), 1000);
}


//---Devil Session
const devilSession = () => {
  isDevilSession.value = true
  isSessionStart.value = false
  isCenterButtons.value = true
  store.playSound('messagePrincess', 0.5)
  setTimeout(() => store.playSound('devil', 0.5), 700)
  isShowButtons.value = false
  displayedText.value = 'YOU WILL DIE! - I WILL TAKE YOUR HEAD!'
  reloadNewSession()
}


//---Reload New session
const reloadNewSession = () => {
  setTimeout(() => btnAnswerIsDisabled.value = true, 1000)
  effectAfterAnswer()

  setTimeout(() => {
    if (isDevilSession.value) {
      store.fetchQuestion('boolean').then(e => {
      // console.log(e, store.questionsDataObj.correct_answer);
    })
    } else {
      
      store.fetchQuestion()

        
      .then(e => {
      // console.log(e, store.questionsDataObj.correct_answer);
    })
    }
  
    musicChanger()
    effectAfterAnswer()
    resetSessionSettings()
    startTimer() //---- start timer
    showHideAnswersButtons()
    btnAnswerIsDisabled.value = false
  }, 3000)
}


//---Show/Hide Answers buttons
const showHideAnswersButtons = () => {
  isShowButtons.value = false
  setTimeout(() => {
    store.playSound('clickIn', 0.4)
    isShowButtons.value = true
  }, 3000)
}


//musicChanger 
const musicChanger = () => {
  if (store.currentSound != 'bgLevelTwo' && store.countCorrectAnswers == 6) {
    store.stopAllSounds()
    store.currentSound = 'bgLevelTwo'
    store.playSound(store.currentSound, 0.1,true)
  } else if (store.currentSound != 'bgLevelThree' && store.countCorrectAnswers == 11) {
    store.stopAllSounds()
    store.currentSound = 'bgLevelThree'
    store.playSound(store.currentSound, 0.1, true)
  }
}




//-------------------------------- Princess say
const princessSay = () => {
  princessSays.value = ''
  //--- first message to welcome
  if (!isGameStart.value) {
    iconPrincessMessage.value = 'mdi-message-text'
    colorPrincessMessage.value = 'green'
    setTimeout(() => {
      store.playSound('messagePrinces', 0.3)
      princessSays.value = "Hello!\nAre you ready to answer my questions?"
    }, 300)
    return
  }


  //--- regular messages
  let message = ''

  while (true) {
    let randomNumber = generateRandomNumber(store.countCorrectAnswers)
    message = store.princessesTalkingArray[randomNumber]
    if (!usedSessionMessagePrincess.value.includes(message)) {
      usedSessionMessagePrincess.value.push(message)
      break
    }
  }
  // console.log(store.princessesTalkingArray.target, message)

  setTimeout(() => {
    iconPrincessMessage.value = 'mdi-message-text'
    colorPrincessMessage.value = 'green'
    store.playSound('messagePrinces', 0.3)
    princessSays.value = message
  }, 3500)
}


//support function Princess say
function generateRandomNumber(counter) {
  let min, max

  if (counter <= 5) {
    min = 0
    max = 30
  } else if (counter <= 10) {
    min = 30
    max = 60
  } else {
    min = 60
    max = store.princessesTalkingArray.length
  }

  // get random num
  return Math.floor(Math.random() * (max - min + 1)) + min
}


//-------------------------------- Ask Witch
const btnAskWitch = () => {
  if (witchSays.value.length) return
  

  iconWitchMessage.value = 'mdi-message-text'
  colorWitchMessage.value = 'green'


  let chance = 1/5 // 50/50 ~ 1:3 (20%)
  if (store.countCorrectAnswers >= 5) chance = 1 / 6  // 2:1 (33.3%)    ~ 1:6 (15%)
  if (store.countCorrectAnswers >= 10) chance = 1 / 10 // 3:1 (25%)      ~ 1:10 (10%)     
  let lottery = Math.random() < chance
  //------------------win    

  if (lottery) {
    store.playSound('messageWitch', 0.5)
    witchSays.value = `The magic orb says: "${store.questionsDataObj.correct_answer}"`

    // ***** THIS USE AI API **** 
    // store.askWitch(store.questionsDataObj.question).then((answerText) => {
    //   witchSays.value = answerText
    // })

  } else { //--------loss
    store.playSound('ha_ha', 0.5)
    let message = ''

    while (true) {
      let randomNumberMessage = Math.floor(Math.random() * 100) + 1
      message = store.witchTalkingArray[randomNumberMessage]

      if (!usedSessionMessageWitch.value.includes(message)) {
        usedSessionMessageWitch.value.push(message)
        witchSays.value = message
        break
      }
    }

  }

}



//--------------------------------Joker's buttons

const btnPhone = (e) => {
  jokerText.value = ''
  store.playSound('clickBtnJoker', 0.3)
  bgColorOne.value = "pink"

  const result = chanceAnswersPercent()
  // console.log(result);

  const percentArray = Object.values(result).map(v => v.percent)

  //get max percent
  const maxPercent = Math.max(...percentArray)

  // create new array
  jokerIcon.value = percentArray.map(percent => percent == maxPercent ? 'mdi-arrow-down-bold' : 'mdi-alert-octagon-outline')
  jokerColor.value = percentArray.map(percent => percent == maxPercent ? 'green' : 'red')
}


const btnPercent = () => {
  store.playSound('clickBtnJoker', 0.3)
  bgColorTwo.value = "pink"

  const correctAnswer = store.questionsDataObj.correct_answer.trim()
  const allAnswers = [...store.questionsDataObj.incorrect_answers].map(x => x == correctAnswer ? 'correctAnswer' : x)
  // console.log(allAnswers)

  let disabledCount = 0
  allAnswers.forEach((answer, index) => {
    if (answer != 'correctAnswer' && disabledCount < 2) {
      btnAnswerVariant.value[index] = "outlined"
      btnAnswerIsEnabled.value[index] = true
      disabledCount++
    }
  })
}


const btnPublic = (e) => {
  jokerIcon.value = ''
  jokerColor.value = ''
  store.playSound('clickBtnJoker', 0.3)
  bgColorThree.value = "pink"

  const result = chanceAnswersPercent()
  // console.log(result);
  const percentArray = Object.values(result).map(v => v.percent + '%')
  jokerText.value = percentArray
  getJokerText(percentArray)

}


// --- get percent for joker answers
const chanceAnswersPercent = () => {
  const correctAnswer = store.questionsDataObj.correct_answer.trim()
  const allAnswers = [...store.questionsDataObj.incorrect_answers]

  let correctProbability
  if (store.countCorrectAnswers <= 5) {
    correctProbability = Math.floor(Math.random() * (70 - 50 + 1)) + 50 // between 50 and 70 %
  } else if (store.countCorrectAnswers > 5 && store.countCorrectAnswers <= 10) {
    correctProbability = Math.floor(Math.random() * (50 - 30 + 1)) + 30 // between 30 and 50 %
  } else {
    correctProbability = Math.floor(Math.random() * (40 - 30 + 1)) + 30 // between 30 and 40 %
  }

  // other answers percent
  const remainingProbability = 100 - correctProbability
  const otherAnswers = allAnswers.filter(answer => answer.trim() !== correctAnswer)
  const otherProbabilities = distributeRandomly(otherAnswers.length, remainingProbability)


  const result = {}
  let otherIndex = 0

  allAnswers.forEach((answer, index) => {
    if (answer.trim() === correctAnswer) {
      result[index] = { name: answer, percent: correctProbability }
    } else {
      result[index] = { name: answer, percent: otherProbabilities[otherIndex] }
      otherIndex++
    }
  })

  return result
}

// support function percent
const distributeRandomly = (count, total) => {
  const probabilities = []
  let remaining = total

  for (let i = 0; i < count - 1; i++) {
    const random = Math.floor(Math.random() * remaining)
    probabilities.push(random)
    remaining -= random
  }

  probabilities.push(remaining)
  return probabilities

}


//------------------

//--- Return text for any button
function getJokerText(id,) {
  // expect ["1","2","3","4"][id];
  return jokerText.value[id]
}

//--- Return color for any button icon
function getJokerIconColor(id, colors = []) {
  // colors = ["green", "red", "blue", "yellow"]
  return jokerColor.value[id]
}

//--- Rerun icon for any button
function getJokerIcon(id) {
  // const icons = ["mdi-alert-octagon-outline", "mdi-alert-octagon-outline", "mdi-alert-octagon-outline","mdi-alert-octagon-outline"];
  return jokerIcon.value[id]
}


// -----------------------------------effect

const effectAfterAnswer = (correct = '') => {
  overlay.value = true
  setTimeout(() => { overlay.value = false }, 1000)
}


//---effects hearts 

const launchHearts = (isWrong) => {
  const colors = isWrong ? ["#000000", "#333333", "#555555"] : ["#ff4d6d", "#ff99ac", "#ff1a75"];
  const shapes = isWrong ? ["circle", "square", "triangle"] : ["circle"];

  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.3 },
    shapes: shapes, 
    scalar: 1.5,
    colors: colors,  
  });


  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      confetti({
        particleCount: 5,
        spread: 100,
        origin: { y: 0.6 },
        colors: colors,  
        shapes: shapes,  
      });
    }, i * 200);
  }
}

//--- timer

const startTimer = () => {
  if (time.value) {
    clearInterval(interval.value)
    time.value = 0
  }
  // start timer
  interval.value = setInterval(() => time.value++, 10)
}


const formattedTime = computed(() => {
  const minutes = Math.floor(time.value / 6000).toString().padStart(2, '0')
  const seconds = Math.floor((time.value % 6000) / 100)
  timerSeconds.value = seconds
  const centiseconds = (time.value % 100).toString().padStart(2, '0')
  return `${minutes}:${seconds.toString().padStart(2, '0')}:${centiseconds}`
});

</script>



<style scoped>


  .text-question {
    white-space: normal;
  /*  border-bottom: 1px solid darkgreen;  */
  padding-top:5px;
    margin-top: -30px;
    width: 100%;
    height: 2em;
    text-align: center;
    font-size: large;
    margin-bottom: 0.3em;
     /* border-top: 1px solid green; */
  }


.my-hover-btn > span >span {
  text-align: inherit;
  text-wrap: balance;
}

.my-hover-btn:hover {
  background: #fffde1;
  /* color: rgb(68, 3, 16);  */
  transform: scale(1.05);
  transition: transform 0.3s ease, color 0.3s ease;

}

.first-icon {
  font-size: 50px;
  margin-left: -26px;
}

.second-icon {
  margin-right: -13px;
}

.v-btn__append {
  margin-left: -12px;
}

.v-btn__prepend {
  margin: 0;
}

.v-card {
  transition: opacity .4s ease-in-out;
}



.v-card:not(.on-hover) {
  opacity: 0.95;
}


.time-display {
  font-family: monospace;
  letter-spacing: 0.1em;
  min-width: 80px;
}

.btn-text {
  display: block;
  white-space: normal;
  /* new row */
  word-wrap: break-word;
  text-align: justify;
  font-size: 16px;
  overflow-wrap: break-word;
  /* Позволява пренасяне при нужда */
}

/*  text color
span.btn-text {
  color: red;

} */

.joker {
  height: 22px;
  width: 30px;
}
</style>
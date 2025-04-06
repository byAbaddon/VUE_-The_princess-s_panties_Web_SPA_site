import { defineStore } from 'pinia'
import { ref, computed } from 'vue'


import { askWitch } from '@/service/hfAPI'
import princessTalkingJSON from '/public/assets/data/princessesTalking.json'
import witchTalkingJSON from '/public/assets/data/witchTalking.json'
import { useDisplay } from 'vuetify';

export const usePrincessStore = defineStore('counter', () => {
 
  
  const isFooterVisible = ref(true)

  //display watcher
  const { width } = useDisplay();
  const phoneScreen = computed(() => width.value < 1350)


  //------------------------------load sounds
  const sounds = ref({
    bgIntro : new Audio("/assets/sounds/bg/intro.mp3"),  
    bgDetails  : new Audio("/assets/sounds/bg/details.mp3"),
    bgLevelOne  : new Audio("/assets/sounds/bg/level_1.mp3"),
    bgLevelTwo  : new Audio("/assets/sounds/bg/level_2.mp3"),
    bgLevelThree  : new Audio("/assets/sounds/bg/level_3.mp3"),
    bgDevil  : new Audio("/assets/sounds/bg/devil.mp3"),
    bgEpilogueWin  : new Audio("/assets/sounds/bg/epilogueWin.mp3"),
    bgEpilogueLoss  : new Audio("/assets/sounds/bg/epilogueLoss.mp3"),

    type: new Audio("/assets/sounds/type.wav"),
    clickBtn: new Audio("/assets/sounds/click1.wav"),
    clickBtnAnswer: new Audio("/assets/sounds/clickBtnAnswer.wav"),
    correctAnswer: new Audio("/assets/sounds/correctAnswer.wav"),
    wrongAnswer: new Audio("/assets/sounds/wrongAnswer.wav"),
    messageWitch: new Audio("/assets/sounds/messagePrincess.wav"),
    devil: new Audio("/assets/sounds/devil/youWillDie.wav"),
    ha_ha: new Audio("/assets/sounds/haha.wav"),
    messagePrinces: new Audio("/assets/sounds/messageWitch.wav"),
    hiPrincess: new Audio("/assets/sounds/hi.wav"),
    omgPrincess: new Audio("/assets/sounds/oh_my_gosh.wav"),    
    noPrincess: new Audio("/assets/sounds/no_way.wav"),    
    clickBtnJoker: new Audio("/assets/sounds/joker.wav"),
    clickIn: new Audio("/assets/sounds/clickIn.wav"),

  })


  

  const activeSounds = new Set() // save all active sounds
  const currentSound = ref('')
  let isBackgroundMuted = ref(false);

  const playSound = (soundName, volume = 1, isLoop = false) => {
    currentSound.value = soundName
    if (sounds.value[soundName]) {
      const sound = isLoop ? sounds.value[soundName] : sounds.value[soundName].cloneNode();
      sound.volume = Math.min(1, Math.max(0, volume));
      sound.loop = isLoop;
      sound.currentTime = 0;
  
      activeSounds.add(sound); // Добавяме в списъка с активни звуци
  
      sound.play()
        .catch(err => console.warn("Fail to load audio:", err))
        .finally(() => {
          if (!isLoop) {
            sound.onended = () => activeSounds.delete(sound); // Премахва ефектите, когато приключат
          }
        });
    }
  };
  
  const stopAllSounds = () => {
    activeSounds.forEach(sound => {
      sound.pause();
      sound.currentTime = 0;
    });
    activeSounds.clear(); 
  };
  

  
  
  
  // ---------------------- data array
  const princessesCatalogArray = ref([
    'An','Adel', 'Aiko', 'Alexa', 'Anita', 'Arabica',
    'Betty', 'Caroline', 'Donina', 'Glorya',
    'Kenya', 'Lina', 'Mahal', 'Makeda',
    'Naila', 'Naomi', 'Penelope', 'Quin',
    'Shaka', 'Sintia', 'Skyblue', 'Suzy',
    'Tina', 'Vanessa', 'Zory'
  ])

 
  
  const princessesTalkingArray = princessTalkingJSON['talking']
  const witchTalkingArray = witchTalkingJSON['talking']


  //values
  let countCorrectAnswers = ref(1)
 

  // Actions

  function incrementQuestionLevel() {
    countCorrectAnswers++

  }

  const questionsDataObj = ref({
    difficulty: null,
    category: null,
    incorrect_answers: [],
    correct_answer: null,
  });

  // category 9 - 32  ; difficulty  easy/medium /hard 
  const fetchQuestion = async (type = 'multiple', category = '9', difficulty = 'easy', translate = true) => {
    if (countCorrectAnswers.value >= 6) difficulty = 'medium'
    if (countCorrectAnswers.value >= 11) difficulty = 'hard'
    category = Math.floor(Math.random() * (32 - 9 + 1)) + 9

    try {
      const response = await fetch
        (`https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${difficulty}&type=${type}`);
      const data = await response.json();
      questionsDataObj.value = {
        ...data.results[0]
      }
      // console.log(questionsDataObj.value);

      // fix html symbols
      const decodeHTMLEntities = (str) => {
        const doc = new DOMParser().parseFromString(str, 'text/html');
        return doc.documentElement.textContent || doc.documentElement.innerText;
      };

      questionsDataObj.value.question = decodeHTMLEntities(questionsDataObj.value.question);
      questionsDataObj.value.incorrect_answers = questionsDataObj.value.incorrect_answers.map(decodeHTMLEntities);
      questionsDataObj.value.correct_answer = decodeHTMLEntities(questionsDataObj.value.correct_answer);
      questionsDataObj.value.category = decodeHTMLEntities(questionsDataObj.value.category);

      // random questions
      questionsDataObj.value.incorrect_answers.splice(
        Math.floor(Math.random() * (questionsDataObj.value.incorrect_answers.length + 1)), 0,
        questionsDataObj.value.correct_answer
      );


      // translate text to BG language
      if (translate) {
        // translateText("Hello my friend").then((translatedText) => {
        //   console.log(translatedText)

        // });
      }


    } catch (error) {
      console.error("Error loading questions:", error);
    }
  }

  
  return {
    phoneScreen,
    sounds,
    playSound,
    stopAllSounds,
    currentSound,
    isBackgroundMuted,
    questionsDataObj,
    countCorrectAnswers,
    princessesCatalogArray,
    princessesTalkingArray,
    witchTalkingArray,
    incrementQuestionLevel,
    fetchQuestion,
    askWitch,
    isFooterVisible
  }
})
<template>
  <div style="background: #101551;" class="container text-center">
    <v-footer app class="footer" :style="!isBtnAgreeVisible ? 'max-height: 8em;' : null">
      <v-row justify="center" no-gutters>
        <v-col cols="12" v-show="isBtnAgreeVisible">
          <v-btn @click="btnAgree" outlined small color="primary" class="text-center mt-6"> Agree </v-btn>
        </v-col>

        <v-col cols="12" class="text-center">
          <div v-show="isBtnAgreeVisible" class="font-italic text-white text-center">
            We use cookies - they help us give you the best possible experience!
          </div>
        </v-col>
        <v-col v-show="!isBtnAgreeVisible" class="text-center">
          <div class="author font-bold text-white text-center flex">
            <span>by Abaddon</span>

            <p v-if="isHomePage" class="pl-8" style="margin: auto; font-size: 18px;">👑 </p>


            <v-btn v-else @click="btnUp" icon size="26" :class="btnUpAnimation" variant="outlined">
              <v-icon v-if="!isBtnClick">mdi-arrow-down-bold</v-icon>
              <v-icon v-else> mdi-arrow-up-bold</v-icon>
            </v-btn>


            <!-- <span>Vue3 - Composition - Pinia - Vuetify3</span> -->
            <span>Copyright 2025</span>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>


<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isBtnAgreeVisible = ref(true)
const btnUpAnimation = ref('color-change-animation')
const isHomePage = ref(router.currentRoute.value.path === '/' || router.currentRoute.value.path === '/home')

const isBtnClick = ref(false)

watch(() => router.currentRoute.value.path, (newPath) => {
  if (newPath === '/about') {
    isBtnClick.value = false
  }

  isHomePage.value = (newPath === '/' || newPath === '/home')


})

const btnAgree = () => {
  isBtnAgreeVisible.value = false
}

const btnUp = () => {
  isBtnClick.value = !isBtnClick.value
  if (isBtnClick.value) {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  } else {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
}
</script>



<style scoped>
.footer {
  background: #101551;
  background: #141b66 !important;
  background-image: url('/assets/images/lent.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 12px;
}

.author {
  display: flex;
  justify-content: space-between;
}

span {
  text-shadow: 1px 1px 1px rgb(189, 179, 179);

}


@keyframes colorChange {
  0% {
    background-color: red;
  }

  50% {
    background-color: rgb(119, 45, 45);
  }

  100% {
    background-color: red;
  }
}

.color-change-animation {
  animation: colorChange 3s 3;
}
</style>
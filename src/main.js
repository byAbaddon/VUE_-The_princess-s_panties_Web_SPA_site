import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'


// import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import '@mdi/font/css/materialdesignicons.css';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

loadFonts()

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)  
app.use(vuetify)
app.mount('#app')

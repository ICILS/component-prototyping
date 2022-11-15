// John Leider (Vuetify) set up

/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Lottie
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

// Composables
import { createApp } from 'vue'
// Components
import App from './App.vue'

// Plugins
import vuetify from './plugins/vuetify'
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app
  .use(vuetify)
  .use(Vue3Lottie)
  .mount('#app')

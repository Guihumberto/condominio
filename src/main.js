/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import '@/plugins/moment'

import { MotionPlugin } from '@vueuse/motion'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

app.use(MotionPlugin)

registerPlugins(app)

app.mount('#app')

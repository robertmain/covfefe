import 'reset.css'
import './assets/fonts/tinyhand/style.css'
import './assets/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'
import App from './App.vue'

createApp(App).use(createPinia()).use(router).mount('#app')

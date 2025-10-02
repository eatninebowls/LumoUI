import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import LumoUI from '../../src/plugin'

createApp(App).use(LumoUI).mount('#app')
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from "@/stores";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './assets/main.css'
import i18n from "@/locales/i18n";



const app = createApp(App)
app.use(pinia)
pinia.use(piniaPluginPersistedstate);
app.use(router)
app.use(i18n)




app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "@fontsource/inter";
import "@fontsource/poppins/700.css";

import "./styles/globals.css";

const app = createApp(App)

app.use(router)

app.mount('#app')

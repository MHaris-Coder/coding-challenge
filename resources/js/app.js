require('./bootstrap');

import Alpine from 'alpinejs';
import { createApp } from 'vue'
import router from './router/index'
import store from './store/index'
import Shimmer from 'vue3-shimmer';
import App from './App.vue'

window.Alpine = Alpine;

Alpine.start();

const app = createApp(App)
app.config.globalProperties.$store = store
app.config.globalProperties.baseUrl = process.env.MIX_APP_URL

app.use(Shimmer)
app.use(store)
app.use(router)

app.mount('#app')
import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

const router = createrRouter({
  history: createWebHashHistory(),
  routes: []
})
createApp(App)
  .use(router)
  .mount('#app')


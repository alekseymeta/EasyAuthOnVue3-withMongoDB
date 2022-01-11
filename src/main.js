import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from './utils/messagePlugin'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/Font/stylesheet.css"


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from './firebaseConfig.js';
import 'firebase/database'


initializeApp(firebaseConfig)

let app
const auth = getAuth();

auth.onAuthStateChanged( () => {
  if (!app) {
    app = createApp(App).use(store).use(router).use(messagePlugin).mount('#app')
  }
})



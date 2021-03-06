import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap"
import "./assets/Font/stylesheet.css"
import Spinner from './components/global/spinner'


import * as Realm from "realm-web";
new Realm.App({id: process.env.VUE_APP_MONGO_ID});







createApp(App).use(store).use(router).component("Spinner", Spinner).mount('#app')




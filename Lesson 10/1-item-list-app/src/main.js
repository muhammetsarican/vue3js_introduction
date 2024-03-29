import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AppHeading from "./components/ui/appHeading.vue";

const app=createApp(App)
app.component("app-heading", AppHeading);
app.mount('#app')

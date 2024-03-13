import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";

import appHeader from "@/components/shared/appHeader";
import appBookmarkList from "@/components/shared/appBookmarkList/index";

import "@/assets/style.css";
import appAxios from './utils/appAxios';
import store from './store';

const app=createApp(App);
app.component("AppHeader", appHeader);
app.component("BookmarkList", appBookmarkList);
app.config.globalProperties.$appAxios=appAxios;
app.config.globalProperties.$log=console.log;

app.use(store);
app.use(router);
app.mount('#app');

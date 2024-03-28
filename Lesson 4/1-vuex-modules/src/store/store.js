import { createStore } from "vuex";
import contact from "./modules/contact";
import taskManager from "./modules/taskManager";

const store = createStore({
    state: {
        title: "Wireless Cat Vue Bootcamp",
    },
    modules: {
        contactPage:contact,
        taskManager
    }
})

export default store;
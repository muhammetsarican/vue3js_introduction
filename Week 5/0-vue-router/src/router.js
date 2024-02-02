import {createRouter, createWebHistory} from "vue-router";

const routes=[
    {
        path:"/",
        component:()=>import("@/views/HomeComponent")
    },
    {
        path:"/about",
        component:()=>import("@/views/AboutComponent")
    },
]
const router= createRouter({
    routes,
    history: createWebHistory()
});

export default router;
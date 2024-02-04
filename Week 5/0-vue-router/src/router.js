import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";

const routes=[
    {
        name:"HomeComponent",
        path:"/",
        component:()=>import("@/views/HomeComponent")
    },
    {
        name:"AboutComponent",
        path:"/about",
        component:()=>import("@/views/AboutComponent")
    },
    {
        name:"DetailComponent",
        path:"/details/:userId",
        component:()=>import("@/views/DetailComponent")
    },
]
const router= createRouter({
    routes,
    // history: createWebHistory()
    history: createWebHashHistory()
});

export default router;
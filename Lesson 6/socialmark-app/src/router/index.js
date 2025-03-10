import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";

const routes=[
    {
        name:"HomePage",
        path:"/",
        component:()=>import("@/views/HomePage")
    },
    {
        name:"LoginPage",
        path:"/login",
        component:()=>import("@/views/LoginPage")
    },
    {
        name:"RegisterPage",
        path:"/register",
        component:()=>import("@/views/RegisterPage")
    },
    {
        name:"NewBookmarkPage",
        path:"/newbookmark",
        component:()=>import("@/views/NewBookmarkPage")
    },
    {
        name:"FavoritesPage",
        path:"/favorites",
        meta:{
            componentName:"BookmarkList"
        },
        component:()=>import("@/views/Account")
    },
    {
        name:"LikesPage",
        path:"/likes",
        meta:{
            componentName:"BookmarkList"
        },
        component:()=>import("@/views/Account")
    },
    {
        name:"SettingsPage",
        path:"/settings",
        meta:{
            componentName:"settingsComponent"
        },
        component:()=>import("@/views/Account")
    },
]
const router= createRouter({
    routes,
    history:createWebHashHistory()
})

router.beforeEach((to, from, next)=>{
    const authRequiredRoutes=["HomePage"];
    const authNotRequiredRoutes=["LoginPage", "RegisterPage"];

    const _isAuthenticated=store.getters._isAuthenticated;

    if(authNotRequiredRoutes.indexOf(to.name)>-1 && _isAuthenticated) next(false);

    if(authRequiredRoutes.indexOf(to.name)>-1){
        if(_isAuthenticated) next();
        else next({name:"LoginPage"});
    }else{
        next();
    }
})

export default router;
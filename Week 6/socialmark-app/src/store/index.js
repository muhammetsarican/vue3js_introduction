import { createStore } from "vuex";

export default createStore({
    state:{
        user:null,
        saltKey:"IamworkingVueJsfromkablosuzkediyoutubechannel"
    },
    mutations:{
        saveUser(state, user){
            state.user=user;
        }
    },
    getters:{
        _isAuthenticated:state=>state.user!==null,
        _getCurrentUser(state){
            const user=state.user;
            delete user?.pswd;
            return user;
        },
        _getSaltKey:state=>state.saltKey,
    }
})
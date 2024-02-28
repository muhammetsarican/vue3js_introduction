import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

export default createStore({
    state: {
        user: null,
        saltKey: "IamworkingVueJsfromkablosuzkediyoutubechannel"
    },
    mutations: {
        saveUser(state, user) {
            state.user = user;
        },
        logoutUser(state){
            state.user=null;
        }
    },
    getters: {
        _isAuthenticated: state => state.user !== null,
        _getCurrentUser(state) {
            const user = state.user;
            delete user?.pswd;
            return user;
        },
        _getSaltKey: state => state.saltKey,
    },
    plugins: [createPersistedState({
            storage: {
                getItem: (key) => ls.get(key),
                setItem: (key, value) => ls.set(key, value),
                removeItem: key => ls.remove(key)
            }
        }
    )]
})
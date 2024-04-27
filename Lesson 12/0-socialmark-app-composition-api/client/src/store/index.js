import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

export default createStore({
    state: {
        user: null,
        userBookmarks: null,
        userLikes: null,
        saltKey: "IamworkingVueJsfromkablosuzkediyoutubechannel"
    },
    mutations: {
        saveUser(state, user) {
            state.user = user;
        },
        logoutUser(state){
            state.user=null;
        },
        setBookmarks(state, userBookmarks){
            state.userBookmarks=userBookmarks;
        },
        setLikes(state, userLikes){
            state.userLikes=userLikes;
        },
        addToLikes(state, bookmarksId){
            state.user.likes=bookmarksId;
        },
        addToBookmarks(state, bookmarksId){
            state.user.bookmarks=bookmarksId;
        }
    },
    getters: {
        _isAuthenticated: state => state.user !== null,
        _getCurrentUser(state) {
            const user = state.user;
            delete user?.pswd;
            return user;
        },
        _userLikes(state){
            return state.userLikes;
        },
        _userBookmarks(state){
            return state.userBookmarks;
        },
        _currentUserId: state=>state.user?.id,
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
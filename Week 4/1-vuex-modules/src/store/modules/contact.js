export default{
    namespaced:true,
    state:{
        contactTitle:"Title of Contact Page",
    },
    mutations:{
        setItem(state, title){
            state.title=title;
        },
    },
    getters:{
        _contactTitle:state=>state.contactTitle,
    }
}
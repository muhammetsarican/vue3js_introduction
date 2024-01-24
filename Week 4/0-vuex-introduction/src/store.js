import { createStore } from "vuex";

const store = createStore({
    state: {
        person: {
            name: "Muhammet",
            lname: "Sarıcan",
            password: "Oms7182928."
        },
        theme: "dark",
        permissions: [1, 2, 3, 4, 5],
        itemList: [
            {id:1, title: "Computer", type:"electronic"},
            {id:2, title: "Table", type:"furniture"},
            {id:3, title: "Chair", type:"furniture"},
            {id:4, title: "Monitor", type:"electronic"},
            {id:5, title: "Phone", type:"electronic"},
        ]
    },
    mutations:{
        newItem(state, item){
            state.itemList.push(item);
        },
    },
    actions:{
        newItem(context, item){
            setTimeout(() => {
                context.commit("newItem", item);
            }, 2000);
        }
    },
    getters:{
        woodItems: state=>state.itemList.filter(i=>i.type=="furniture"),
        activeUsers(state){
            const user={
                ...state.person
            };
            delete user.password;

            return user;
        }
    }
}
);

export default store;
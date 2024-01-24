export default{
    state:{
        itemList: [
            {id:1, title: "Item 1", createdAt:new Date().toDateString()},
            {id:2, title: "Item 2", createdAt:new Date().toDateString()},
            {id:3, title: "Item 3", createdAt:new Date().toDateString()},
            {id:4, title: "Item 4", createdAt:new Date().toDateString()},
        ],
        userList: []
    },
    mutations:{
        setItem(state, item){
            state.itemList.push(item);
        }
    },
    getters:{
        _itemList:state=>state.itemList
    }
}
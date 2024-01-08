const app = Vue.createApp({
    data() {
        return {
            searchValue: "",
            fruitList: [
                "apple",
                "pear",
                "cherry",
                "strawberry",
                "orange"
            ],
            // filteredList: []
        }
    },
    methods:{
        searchList(){
            // this.filteredList=this.fruitList.filter((item)=>item.includes(this.searchValue));
        }
    },
    computed:{
        filteredList(){
            return this.fruitList.filter((item)=>item.includes(this.searchValue));
        }
    }
}).mount("#app");
const app = Vue.createApp({
    data() {
        return {
            boxBorder:"border",
            showBorder: false,
            bgRed: false,
            red:"red",
            green:"green",
            blue:"blue",
            bgColor:""
        }
    },
    computed:{
         boxClasses(){
            return {border:this.showBorder, red:this.bgRed}
         }
    }
})

app.mount("#app");
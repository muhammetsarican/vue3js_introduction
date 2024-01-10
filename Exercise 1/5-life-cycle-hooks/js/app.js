const app = Vue.createApp({
    data() {
        return {
            title: "Test Başlığı",
            itemList: []
        }
    },
    beforeCreate() {
        console.log("beforeCreate çalıştı");
    },
    created() {
        console.log("created çalıştı");
        setTimeout(() => {
            this.itemList = [1, 2, 3, 5, 11, 4, 44];
        }, 2000);
    },
    beforeMount() {
        console.log("beforeMount çalıştı");
    },
    mounted() {
        console.log("mounted çalıştı");
        setTimeout(() => {
            this.title="this title is new during mounted";
        }, 3000);
    },
    beforeUpdate() {
        console.log("beforeUpdate çalıştı");
    },
    updated() {
        console.log("updated çalıştı");
    },

})

app.mount("#app");

setTimeout(() => {
    app.unmount();
}, 5000);
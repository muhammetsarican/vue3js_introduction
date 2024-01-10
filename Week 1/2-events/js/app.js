const app = Vue.createApp({
    data() {
        return {
            fullname:"küpesiz"
        }
    },
    methods: {
        updateValue(event) {
            this.fullname=event.target.value;
        }
    }
}).mount("#app");
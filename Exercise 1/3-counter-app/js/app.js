const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0,
        }
    },
    methods: {
        incValue() {
            this.counter++;
        },
        decValue() {
            this.counter--;
        },
        decValue2() {
            this.counter2--;
        },
    },
    computed: {
        getCounterResult() {
            console.log("counter 1 changed!");
            return this.counter > 5 ? "Büyük" : "Küçük";
        },
        getCounter2Result() {
            console.log("counter 2 changed!");
            return this.counter2 > 5 ? "Büyük" : "Küçük";
        }
    },
    watch: {
        counter(newValue, oldValue) {
            console.log(oldValue, "=>", newValue);
        },
        getCounterResult(newValue, oldValue) {
            console.log("Result: ", oldValue, "=>", newValue);
        }
    }
}).mount("#app");
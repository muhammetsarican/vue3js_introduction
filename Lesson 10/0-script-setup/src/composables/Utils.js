import { onMounted, ref } from "vue";

export default function () {
    const title = ref("Script Setup");
    const counter = ref(0);

    const incCounter = () => {
        counter.value = counter.value + 1;
    };

    const oddEvent = (data) => {
        console.log(data);
    };

    onMounted(()=>{
        console.log("the operations here want to do as mount");
    })
    return {
        title,
        counter,
        incCounter,
        oddEvent
    }
}
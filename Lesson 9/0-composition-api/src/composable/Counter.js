import { ref, computed, watch } from "vue";

export default function(){
    const counter = ref(0);
    const oddOrEven = computed(() => (counter.value % 2 == 0 ? "Even" : "Odd"));
    watch([counter, oddOrEven], ([newC, newO], [oldC, oldO]) => {
      console.log(oldO, "=>", newO);
      console.log(oldC, "=>", newC);
    });

    return {
        counter,
        oddOrEven
    }
}
<template>
  <div>
    <h1>aaa</h1>
    <p>{{ counter }}</p>
    <p>{{ oddOrEven }}</p>
  </div>
</template>
<script setup>
import { computed, watch } from "vue";

const props = defineProps({
  counter: Number,
});
const emit=defineEmits(["odd-event"]);

const oddOrEven = computed(() => props.counter % 2 == 0 ? "Even" : "Odd");

watch(oddOrEven, (oddOrEven)=>{
  if(oddOrEven==="Odd") emit("odd-event", true);
})
</script>
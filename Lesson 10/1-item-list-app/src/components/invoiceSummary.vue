<script setup>
import {computed} from "vue";
const props=defineProps({items:Array});

const subTotal=computed(()=>props.items.reduce((total, item)=>total+item.total_price, 0));
const taxTotal=computed(()=>subTotal.value*0.18);
const total=computed(()=>subTotal.value+taxTotal.value);
</script>

<template>
  <section
    id="bill-summary"
    class="flex gap-1 flex-col items-end justify-center border-b border-gray-700"
  >
    <p class="text-gray-500 capitalize">
      subtotal:
      <span>{{subTotal}},00</span>
    </p>
    <p class="text-gray-400 capitalize">
      taxes:
      <span>{{taxTotal}},00</span>
    </p>
    <p class="text-gray-300 capitalize">
      total:
      <span>{{total}},00</span>
    </p>
  </section>
</template>
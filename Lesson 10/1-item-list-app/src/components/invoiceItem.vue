<script setup>
import {Trash} from "lucide-vue-next";
import {computed, watch} from "vue";

const props=defineProps({item:Object});

const calcTotalPrice=computed(()=>props.item.qty*props.item.unit_price);
watch(calcTotalPrice, (calcTotalPrice)=>{
  props.item.total_price = calcTotalPrice;
})

</script>
<template>
    <tr>
      <td class="">
        <input type="text" class="text bg-gray-800 rounded-md w-full px-2" v-model="item.name" />
      </td>
      <td class="">
        <input type="text" class="text bg-gray-800 rounded-md w-full px-2" v-model="item.qty" />
      </td>
      <td class="">
        <input type="text" class="text bg-gray-800 rounded-md w-full px-2" v-model="item.unit_price" />
      </td>
      <td class="rounded-md text-gray-400 text-sm">${{item.total_price}}</td>
      <td class="rounded-md flex items-center justify-end">
        <button>
          <Trash class="w-4 h-4 text-gray-400" />
        </button>
      </td>
    </tr>
</template>
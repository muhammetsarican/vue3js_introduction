<script setup>
import invoiceItem from "./invoiceItem.vue";
import { Plus } from "lucide-vue-next";

defineProps({
  items:Array,
  addInvoiceItem:Function
})
</script>

<template>
  <table class="border-separate border-spacing-2">
    <thead>
      <tr>
        <th class="text-start">Product Name</th>
        <th class="text-start">Quantity</th>
        <th class="text-start">Price</th>
        <th class="text-start">Total</th>
        <th class="text-start"></th>
      </tr>
    </thead>
    <tbody>
      <invoice-item v-for="item in items" :key="item" :item="item" />
    </tbody>
    <tfoot class="mt-5">
      <tr>
        <td></td>
      </tr>
      <tr>
        <td></td>
      </tr>
      <tr>
        <td colspan="5">
          <button
            class="bg-gray-800 rounded-full w-full p-2 flex gap-1 items-center justify-center"
            @click="addInvoiceItem"
          >
            <Plus class="text-indigo-500" />
            <span class="text-gray-400">Add</span>
          </button>
        </td>
      </tr>
    </tfoot>
  </table>
</template>
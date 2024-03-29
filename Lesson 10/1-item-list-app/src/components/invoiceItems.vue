<script setup>
import invoiceItem from "./invoiceItem.vue";
import { Plus } from "lucide-vue-next";
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
      <invoice-item v-for="i in 5" :key="i" />
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
          >
            <Plus class="text-indigo-500" />
            <span class="text-gray-400">Add</span>
          </button>
        </td>
      </tr>
    </tfoot>
  </table>
</template>
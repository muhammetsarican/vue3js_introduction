<script setup>
import { Eye, Clipboard } from "lucide-vue-next";

const props=defineProps({
  invoiceList:Array,
  InvoiceSidebarItem: Function
})

props.invoiceList.push(
    {
      id: new Date().getTime(),
      createdAt: new Date(),
      contact: {
        contact_name: "Demo",
        email: "Demo",
        city: "Demo",
        country: "Demo",
        zipcode: "Demo",
      },
      items: [
        {
          name: "Demo",
          qty: 12,
          unit_price: 100,
          total_price: 1200,
        },
      ],
    },
  )
</script>
<template>
  <aside class="bg-gray-700 shadow-lg">
    <p id="title" class="text-lg font-bold p-3 text-center">List of Bill</p>
    <div v-for="invoice in props.invoiceList" :key="invoice.id" id="bill-item" class="flex gap-3 items-center p-3 odd:bg-gray-600">
      <p id="id" class="text-sm font-semibold">#{{invoice.id.toString().slice(0, 4)}}</p>
      <p id="title" class="text-sm">{{invoice.contact.contact_name}}</p>
      <div id="action-button" class="flex gap-1">
        <button class="p-2 bg-red-500 rounded-md">
          <Clipboard class="w-3 h-3" />
        </button>
        <button @click="InvoiceSidebarItem(invoice)" class="p-2 bg-indigo-500 rounded-md">
          <Eye class="w-3 h-3" />
        </button>
      </div>
    </div>
  </aside>
</template>
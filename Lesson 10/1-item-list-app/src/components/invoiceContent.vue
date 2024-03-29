<script setup>
import InvoiceItems from "./invoiceItems.vue";
import InvoiceSummary from "./invoiceSummary.vue";
import ContactSection from "./contactSection.vue";
</script>
<template>
  <div class="flex items-center justify-center w-full">
    content
    <div id="bill" class="flex gap-3 flex-col bg-gray-900 rounded-sm w-1/3 p-2">
      <contact-section />
      <section id="bill-items" class="flex gap-3 flex-col">
        <app-heading :title="'Bill Items'" />
        <invoice-items />
      </section>
      <invoice-summary />
      <section id="save" class="flex items-center justify-end">
        <button class="bg-indigo-500 px-4 py-2 rounded-md">Save</button>
      </section>
    </div>
  </div>
</template>
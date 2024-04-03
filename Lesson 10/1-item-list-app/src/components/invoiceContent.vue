<script setup>
import InvoiceItems from "./invoiceItems.vue";
import InvoiceSummary from "./invoiceSummary.vue";
import ContactSection from "./contactSection.vue";

import { reactive, watch } from "vue";

const props = defineProps({
  saveInvoice: Function,
  editableInvoiceItem: Object,
});

const state = reactive({
  contact: {
    contact_name: null,
    email: null,
    city: null,
    country: null,
    zipcode: null,
  },
  items: [],
});

const addInvoiceItem = () => {
  state.items.push({
    name: null,
    qty: null,
    unit_price: null,
    total_price: 0,
  });
};

const onSubmit = () => {
  console.log(state);
  props.saveInvoice({
    ...state,
    createdAt: new Date(),
    id: new Date().getTime(),
  });
  state.contact={
    contact_name: null,
    email: null,
    city: null,
    country: null,
    zipcode: null,
  };
  state.items=[];
};

watch(()=>props.editableInvoiceItem, (editableInvoiceItem)=>{
  state.contact=editableInvoiceItem.contact;
  state.items=editableInvoiceItem.items;
}) 
</script>
<template>
  <div class="flex items-center justify-center w-full">
    <div id="bill" class="flex gap-3 flex-col bg-gray-900 rounded-sm w-1/3 p-2">
      <contact-section :contact="state.contact" />
      <section id="bill-items" class="flex gap-3 flex-col">
        <app-heading :title="'Bill Items'" />
        <invoice-items :items="state.items" :addInvoiceItem="addInvoiceItem" />
      </section>
      <invoice-summary :items="state.items" />
      <section id="save" class="flex items-center justify-end">
        <button @click="onSubmit" class="bg-indigo-500 px-4 py-2 rounded-md">
          Save
        </button>
      </section>
    </div>
  </div>
</template>
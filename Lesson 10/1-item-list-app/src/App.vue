<script setup>
import AppSidebar from "./components/appSidebar.vue";
import InvoiceContent from "./components/invoiceContent.vue";
import { ref, reactive } from "vue";

const invoiceList = ref([]);
const state = reactive({
  editableInvoiceItem: null,
});

const saveInvoice = (invoice) => {
  invoiceList.value.push(invoice);
  console.log(invoice);
};

const InvoiceSidebarItem = (invoice) => {
  state.editableInvoiceItem=invoice;
};
</script>

<template>
  <div class="flex h-dvh bg-gray-800 text-white">
    <app-sidebar
      :invoiceList="invoiceList"
      :InvoiceSidebarItem="InvoiceSidebarItem"
    />
    <invoice-content :saveInvoice="saveInvoice" :editableInvoiceItem="state.editableInvoiceItem"/>
  </div>
</template>
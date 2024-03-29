<script setup>
import AppSidebar from "./components/appSidebar.vue";
import InvoiceContent from "./components/invoiceContent.vue";

import { Eye, Clipboard, Trash, Plus } from "lucide-vue-next";
</script>

<template>
  <div class="flex h-dvh bg-gray-800 text-white">
    <app-sidebar />
    <invoice-content />
  </div>
</template>
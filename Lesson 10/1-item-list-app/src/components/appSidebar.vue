<script setup>
import { Eye, Clipboard } from "lucide-vue-next";
</script>
<template>
  <aside class="bg-gray-700 shadow-lg">
    <p id="title" class="text-lg font-bold p-3 text-center">List of Bill</p>
    <div id="bill-item" class="flex gap-3 items-center p-3 odd:bg-gray-600">
      <p id="id" class="text-sm font-semibold">#333</p>
      <p id="title" class="text-sm">WirelessCat</p>
      <div id="action-button" class="flex gap-1">
        <button class="p-2 bg-red-500 rounded-md">
          <Clipboard class="w-3 h-3" />
        </button>
        <button class="p-2 bg-indigo-500 rounded-md">
          <Eye class="w-3 h-3" />
        </button>
      </div>
    </div>
    sidebar
  </aside>
</template>
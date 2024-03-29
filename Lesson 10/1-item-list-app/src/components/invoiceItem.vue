<script setup>
import {Trash} from "lucide-vue-next";
</script>
<template>
    <tr>
      <td class="">
        <input type="text" class="text bg-gray-800 rounded-md w-full px-2" />
      </td>
      <td class="">
        <input type="text" class="text bg-gray-800 rounded-md w-full px-2" />
      </td>
      <td class="">
        <input type="text" class="text bg-gray-800 rounded-md w-full px-2" />
      </td>
      <td class="rounded-md text-gray-400 text-sm">$1500</td>
      <td class="rounded-md flex items-center justify-end">
        <button>
          <Trash class="w-4 h-4 text-gray-400" />
        </button>
      </td>
    </tr>
</template>
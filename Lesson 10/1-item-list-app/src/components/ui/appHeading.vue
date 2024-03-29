<script setup>
defineProps({title:String});
</script>
<template>
  <div
    id="title"
    class="text-lg text-gray-400 p-1 border-b border-gray-600 w-full"
  >
    {{title}}
  </div>
</template>
<!-- eslint-disable -->
<template>
  <div>
    <div class="p-2 grid grid-cols-8 gap-4">
      <bookmarkListItem
        v-for="item in props.items"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>
<script setup>
import bookmarkListItem from "./bookmarkListItem";

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
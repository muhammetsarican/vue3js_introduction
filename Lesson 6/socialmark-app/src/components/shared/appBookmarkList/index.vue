<!-- eslint-disable -->
<template>
    <div>
        <div class="p-2 grid grid-cols-8 gap-4">
            <bookmarkListItem v-for="item in items" :key="item.id" :item="item" />
        </div>
    </div>
</template>
<script>
import bookmarkListItem from "./bookmarkListItem";

export default {
    components: {
        bookmarkListItem
    },
    props: {
        items: {
            type: Array,
            required: true,
            default: () => []
        }
    }
}
</script>
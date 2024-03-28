<template>
    <h3>Getters 'WoodItems'</h3>
    <ul v-for="item in this.woodItems" :key="item.id">
        <li>{{ item.title }}</li>
    </ul>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            woodItems:"woodItems"
        })
    }
}
</script>
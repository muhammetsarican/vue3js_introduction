<template>
    <button @click="addNewItemToList">Add item to list</button>
</template>

<script>
export default {
    methods: {
        addNewItemToList() {
            const ItemObject={
                id: new Date().getTime(),
                title: "Sofa" + new Date().getTime(),
                type: "furniture"
            };
            this.$store.dispatch("newItem", ItemObject);
            // this.$store.commit("newItem", ItemObject);
            
/*             this.$store.state.itemList.push({
                id: new Date().getTime(),
                title: "Sofa",
                type: "furniture"
            }); */
        }
    }
}

</script>
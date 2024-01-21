<template>
    <label for="todoText">Add New:</label>
    <input @keydown.enter="addNewTodo" id="todoText" type="text" name="" placeholder="Enter a word">
</template>
<script>
export default {
    props:{
        addNewTodo:{
            type: Function,
            required: true
        }
    }
}
</script>

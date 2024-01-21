<template>
    <ul>
        <li v-for="todoItem in todoList" :key="todoItem.id" class="d-flex justify-content-between align-items-center">
            <TodoListItem @removeTodo="$emit('removeTodo', $event)" :title="todoItem.title" :id="todoItem.id" />
        </li>
    </ul>
</template>
<script>
import TodoListItem from "@/components/TodoListItem.vue";
export default {
    components: {
        TodoListItem,
    },
    // props: ["todoList"]
    props: {
        todoList: {
            type: Array,
            required: true,
            default: () => []
        }
    }
}
</script>
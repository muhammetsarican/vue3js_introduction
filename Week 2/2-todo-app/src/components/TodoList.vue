<template>
    <ul>
        <li v-for="todoItem in ProvideData.todoList" :key="todoItem.id" class="d-flex justify-content-between align-items-center">
            <TodoListItem :title="todoItem.title" :id="todoItem.id" />
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
    inject: {
        ProvideData: {
            type: Object,
            required: true
        }
    }
}
</script>
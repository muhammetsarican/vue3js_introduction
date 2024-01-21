<template>
    <TodoList @removeTodo="$emit('removeTodo', $event)" :todoList="todoList" />
    <ResultBar :itemcount="todoList.length" />
</template>
<script>
import TodoList from "@/components/TodoList";
import ResultBar from "@/components/ResultBar.vue";

export default {
    props:{
        todoList:{
            type:Array,
            required: true
        }
    },
    components:{
        TodoList,
        ResultBar
    }
}
</script>
<template>
  <section id="todo-list" class="flex gap-3 flex-col p-2">
    <TodoListItem @delete-event="$emit('delete-event', $event)" v-for="todoItem in todoList" :key="todoItem.id" :todo="todoItem"/>
    <small> {{todoList.length}} item contains </small>
  </section>
</template>
<script>
import TodoListItem from "./TodoListItem.vue";

export default {
    props:{
        todoList:Array
    },
    components:{
        TodoListItem
    }
}
</script>

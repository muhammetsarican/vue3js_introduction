<template>
  <div
    class="container flex gap-3 flex-col w-[40rem] bg-gray-700 text-white p-5 rounded-md"
  >
    <section id="title" class="text-center">
      <h1 class="text-2xl">Todo List</h1>
    </section>
    <CreateTodo :addTodo="addTodo"/>
    <TodoList @delete-event="deleteTodo" :todoList="todoList"/>
    <Summary  :todoList="todoList"/>
  </div>
</template>
<script>
import {ref} from "vue";
import CreateTodo from "./components/CreateTodo.vue";
import TodoList from "./components/TodoList.vue";
import Summary from "./components/Summary.vue";

export default {
  components: {
    CreateTodo,
    TodoList,
    Summary,
  },
  setup() {
    const todoList=ref([]);
    const addTodo=(title)=>{
      console.log(title);
      todoList.value.push({
        id:new Date().getTime(),
        title
      })
    };

    const deleteTodo=(id)=>{
      todoList.value=todoList.value.filter((t)=>{t.id!==id});
    }
    return {
      todoList,
      addTodo,
      deleteTodo
    }
  }
};
</script>
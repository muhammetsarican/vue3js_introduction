<script setup>
import { ref } from "vue";

const todoList = ref([]);

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => (todoList.value = json));
</script>
<template>
  <div>
    <h3>Todos</h3>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>
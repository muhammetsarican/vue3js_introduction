<script setup>
import { ref } from "vue";

const userList = ref([]);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => (userList.value = json));
</script>
<template>
  <div>
    <h3>Users</h3>
    <ul>
      <li v-for="user in userList" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>
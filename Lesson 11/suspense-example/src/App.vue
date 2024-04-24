<script setup>
import { defineAsyncComponent, onErrorCaptured, ref } from "vue";

// import Todos from "./components/todos.vue";
const Todos = defineAsyncComponent(() => import("./components/todos.vue"));
const Users = defineAsyncComponent(() => import("./components/users.vue"));
// import Users from "./components/users.vue";

const err = ref(null);

onErrorCaptured((error) => {
  err.value = error;
  return true;
});
</script>

<template>
  <span v-if="err" class="error">{{ err }}</span>
  <suspense v-else>
    <template #default>
      <div>
        <Todos />
        <hr />
        <Users />
      </div>
    </template>
    <template #fallback>
      <h1>Loading...</h1>
    </template>
  </suspense>
  <!--   <div>
    <h1>app</h1>
    <Todos />
    <hr />
    <Users />
  </div> -->
</template>
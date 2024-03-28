<template>
  <section id="todo-info" class="flex flex-col gap-1">
    <div id="completed" class="flex justify-between w-2/3 text-green-300">
      <p>Completed:</p>
      <span>{{ completed }}</span>
    </div>
    <div id="notcompleted" class="flex justify-between w-2/3 text-red-300">
      <p>Not Completed:</p>
      <span>{{ notcompleted }}</span>
    </div>
  </section>
</template>
<script>
import {computed} from "vue";

export default {
  props: {
    todoList: Array,
  },
  setup(props) {
    const completed = computed(
      () => props.todoList.filter((todo) => todo.completed).length
    );
    const notcompleted = computed(
      () => props.todoList.filter((todo) => !todo.completed).length
    );

    return {
      completed,
      notcompleted,
    };
  },
};
</script>

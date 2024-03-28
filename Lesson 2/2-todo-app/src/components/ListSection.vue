<template>
    <TodoList/>
    <ResultBar/>
</template>
<script>
import TodoList from "@/components/TodoList";
import ResultBar from "@/components/ResultBar.vue";

export default {
    components:{
        TodoList,
        ResultBar
    }
}
</script>
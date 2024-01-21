<template>
    <div class="container">
        <h3 class="text-center">ToDo App
            <br>What the Function!
        </h3>
        <hr class="my-2">
        <AddItem />
        <ListSection />
    </div>
</template>
<script>
import AddItem from "@/components/AddItem.vue";
import ListSection from "@/components/ListSection.vue";

export default {
    components: {
        AddItem,
        ListSection
    },
    data() {
        return {
            ProvideData: {
                todoList: [
                    { id: 1, title: "Todo Item #1" },
                    { id: 2, title: "Todo Item #2" },
                    { id: 3, title: "Todo Item #3" },
                    { id: 4, title: "Todo Item #4" },
                    { id: 5, title: "Todo Item #5" },
                ]
            }
        }
    },
    methods: {
        removeTodo(todoItemId) {
            this.ProvideData.todoList = this.ProvideData.todoList.filter(item => item.id != todoItemId);
        },
        addNewTodo(event) {
            this.ProvideData.todoList.push({
                id: new Date().getTime(),
                title: event.target.value
            });
            event.target.value="";
        }
    },
    provide() {
        return {
            ProvideData: this.ProvideData,
            removeTodo: this.removeTodo,
            addNewTodo: this.addNewTodo,
        }
    }

}
</script>
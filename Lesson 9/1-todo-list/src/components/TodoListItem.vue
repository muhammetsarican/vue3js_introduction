<template>
 <div id="todo-item" class="flex justify-between items-center">
        <label :for="`checkbox-${todo.id}-title`" class="flex gap-2">
          <input v-model="todo.completed" type="checkbox" name="isCompleted" :id="`checkbox-${todo.id}-title`">
          <p>{{todo.title}}</p>
        </label>
        <button @click="deleteTodo" class="bg-indigo-700 px-2 py-1 text-sm">Delete</button>
      </div>
</template>
<script>
export default{
    props:{
        todo:Object
    },
    setup(props, {emit}){
        const deleteTodo=()=>{
            emit("delete-event", props.todo.id)
        }

        return {
            deleteTodo
        }
    }
}
</script>

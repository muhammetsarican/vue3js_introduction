<template>
    <section id="create-todo" class="p-2">
      <input
        @keydown.enter="newTodo"
        type="text"
        name=""
        id=""
        placeholder="Create Todo"
        class="p-2 bg-transparent border border-gray-300 rounded-md w-full"
      />
    </section>
</template>
<script>
export default {
    props:{
        addTodo:Function
    },
    setup(props){
      const newTodo=(event)=>{
        props.addTodo(event.target.value);
        event.target.value="";
      }
      return {
        newTodo
      }
    }
}
</script>
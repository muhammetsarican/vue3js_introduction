<template>
    <span>{{ title }}</span>
    <button @click="$emit('removeTodo', id)" class="sm red">Remove</button>
</template>
<script>
export default{
    props:{
        title:{
            type:String,
            required:true,
            default: ""
        },
        id : {
            type: Number,
            required: true,
            default: new Date().getTime()
        }
    }
}
</script>

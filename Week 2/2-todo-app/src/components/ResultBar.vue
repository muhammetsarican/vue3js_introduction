<template>
    <small class="mt-2 d-flex justify-content-end green">There are {{ ProvideData.todoList.length }} todos.</small>
</template>

<script>
    export default{
        inject: ["ProvideData"]
    }
</script>
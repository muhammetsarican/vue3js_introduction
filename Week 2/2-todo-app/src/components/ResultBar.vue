<template>
    <small class="mt-2 d-flex justify-content-end green">There are {{ itemcount }} todos.</small>
</template>

<script>
    export default{
        props: ["itemcount"]
    }
</script>
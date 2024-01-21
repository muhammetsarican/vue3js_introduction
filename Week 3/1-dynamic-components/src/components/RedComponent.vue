<template>
    <div class="bg-red py-2 px-2 my-2">
        {{msg}}
    </div>
</template>

<script>
export default{
    mounted(){
        console.log("Red Mounted!");
    },
    activated(){
        console.log("Red Activated!");
    },
    deactivated(){
        console.log("Red Deactivated!");
    },
    props:["msg"],
}
</script>
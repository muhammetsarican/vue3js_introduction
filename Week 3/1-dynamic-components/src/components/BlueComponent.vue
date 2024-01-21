<template>
    <div class="bg-blue py-2 px-2 my-2">
        Blue Component
    </div>
    <input type="text" placeholder="Enter a Value">
</template>

<script>
export default{
    mounted(){
        console.log("Blue Mounted!");
    },
    activated(){
        console.log("Blue Activated!");
    },
    deactivated(){
        console.log("Blue Deactivated!");
    }
}
</script>
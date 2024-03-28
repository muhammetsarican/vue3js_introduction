<template>
    <div class="bg-green py-2 px-2 my-2">
        Green Component
    </div>
    <slot />
</template>

<script>
export default{
    mounted(){
        console.log("Green Mounted!");
    },
    activated(){
        console.log("Green Activated!");
    },
    deactivated(){
        console.log("Green Deactivated!");
    }
}
</script>
<template>
    <h1>Home</h1>
    <input type="text" placeholder="Enter a Value and press Enter" @keydown.enter="goToAbout">
</template>
<script>
    export default{
        methods:{
            goToAbout(event){
                this.$router.push({
                    name:"AboutComponent",
                    query:{
                        clan:event.target.value
                    }
                })
            }
        }
    }
</script>
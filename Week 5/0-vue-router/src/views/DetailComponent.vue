<template>
    <h1>Details</h1>
    <p>{{ this.$route.name }}</p>
    <p>{{ this.$route.query.userName }}</p>
    <button @click="goToHome">Turn Back</button>
</template>

<script>
export default{
    created(){
        console.log(this.$route.params.userId)
    },
    methods:{
        goToHome(){
            this.$router.push("/");
        }
    }
}
</script>
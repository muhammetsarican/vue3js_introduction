<template>
    <div class="login_register_container">
        <h3 class="text-2xl text-center mb-3">Add New</h3>
        <input autofocus ref="title" v-model="userData.title" type="text" placeholder="Title" class="input mb-3" />
        <input v-model="userData.url" type="text" placeholder="URL" class="input mb-3" />
        <select v-model="userData.categoryId" class="input mb-3">
            <option value="0" selected>Select a Category</option>
            <option v-for="category in categoryList" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
        <textarea v-model="userData.description" placeholder="Description" class="input mb-3" cols="30"
            rows="10"></textarea>
        <div class="flex items-center justify-end gap-x-1">
            <button class="secondary-button">Cancel</button>
            <button class="default-button" @click="saveData">Save</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            categoryList: [],
            userData: {
                title: null,
                url: null,
                categoryId: null,
                description: null
            }
        }
    },
    mounted() {
        this.$appAxios.get("/categories").then((getResponse) => {
            this.categoryList = getResponse.data;
        })
        // setTimeout(() => {
        //     console.log(this.$refs)
        // }, 100);
        this.$nextTick(() => {
            console.log(this.$refs.title)
        })
    },
    methods: {
        saveData() {
            const bookmark = {
                ...this.userData,
                userId: this.$store.getters._getCurrentUser.id,
                createdAt: new Date()
            }
            this.$appAxios.post("/bookmarks", bookmark).then((postResponse) => {
                this.$socket.emit("NEW_BOOKMARK_EVENT", postResponse.data);
                this.$router.push({ name: "HomePage" });
            })
        }
    }
}
</script>
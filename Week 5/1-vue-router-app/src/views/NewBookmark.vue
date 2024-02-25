<template>
    <div class="new-form card border p-2">
        <form>
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" id="title" v-model="userData.title" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="url" class="form-label">URL</label>
                <input type="text" class="form-control" id="url" v-model="userData.url" placeholder="https://">
            </div>
            <div class="mb-3 form-check">
                <label for="description" class="form-label">Description</label>
                <textarea class="form-control" placeholder="Enter description..." id="description" v-model="userData.description" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-sm btn-danger me-1"
                @click="$router.push({ name: 'HomePage' })">Cancel</button>
            <button type="submit" class="btn btn-sm btn-primary" @click="onSave">Submit</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userData: {
                title: null,
                url: null,
                description: null,
            }
        }
    },
    methods:{
        onSave(){
            this.$appAxios.post("/bookmarks", this.userData)
            .then((save_response)=>{
                console.log("save response: ", save_response);
            });
            this.resetFields();
            this.$router.push("/");
        },
        resetFields(){
            Object.keys(this.userData).forEach(key=>(this.userData[key]=null));
        }
    }
}
</script>
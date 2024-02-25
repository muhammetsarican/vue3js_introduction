<template>
    <div class="d-flex justify-content-end">
        <button class="btn btn-primary btn-sm" @click="this.$router.push({
            name: 'NewBookmark'
        })">+ Add New</button>
    </div>

    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Url</th>
                <th scope="col">Description</th>
                <th scope="col">Remove</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="bookmark in bookmarkList" :key="bookmark.id">
                <th scope="row">{{ bookmark.id }}</th>
                <td>{{ bookmark.title }}</td>
                <td><a :href="bookmark.url">{{ bookmark.url }}</a></td>
                <td>{{ bookmark.description }}</td>
                <td><button class="btn btn-danger btn-sm" @click="deleteBookmark(bookmark)">Remove</button></td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    data() {
        return {
            bookmarkList: []
        }
    },
    mounted() {
        this.$appAxios.get("/bookmarks")
            .then((get_response) => {
                this.bookmarkList = get_response.data || [];
            })
    },
    methods: {
        deleteBookmark(comingBookmark) {
            this.$appAxios.delete(`/bookmarks/${comingBookmark.id}`)
                .then((delete_response) => {
                    if (delete_response.status === 200) {
                        this.bookmarkList = this.bookmarkList.filter((bookmark) => bookmark.id !== comingBookmark.id);
                    }
                })
        }
    }
}
</script>
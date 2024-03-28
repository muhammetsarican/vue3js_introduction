<template>
    <div>
        <AppHeader />
        <div class="flex flex-row">
            <Sidebar @category-changed="updateBookmarkList" />
            <BookmarkList :items="bookmarkList" v-if="bookmarkList.length > 0" />
            <div v-else>Bookmark bulunamadı...</div>
        </div>
    </div>
</template>
<script>
import Sidebar from "@/components/home/SidebarComp";

export default {
    data() {
        return {
            bookmarkList: []
        }
    },
    components: {
        Sidebar,
    },
    mounted() {
        this.$socket.on("NEW_BOOKMARK_ADDED", this.fetchData)
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.$appAxios.get("/bookmarks?_embed=category&_embed=user").then((getResponse) => {
                console.log(getResponse);
                this.bookmarkList = getResponse.data;
            });
            this.$appAxios.get("/user_bookmarks?_embed=user&_embed=bookmark").then(userBookmarksResponse => {
                this.$store.commit("setBookmarks", userBookmarksResponse.data);
            });
            this.$appAxios.get("/user_likes?_embed=user&_embed=bookmark").then(userLikesResponse => {
                this.$store.commit("setLikes", userLikesResponse.data);
            });
        },
        updateBookmarkList(categoryId) {
            const url = categoryId ? `/bookmarks?_embed=category&_embed=user&categoryId=${categoryId}` : `/bookmarks?_embed=category&_embed=user`;
            this.$appAxios.get(url).then((getResponse) => {
                this.bookmarkList = getResponse.data;
            })
        }
    }
}
</script>
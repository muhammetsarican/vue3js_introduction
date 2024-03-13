<template>
    <div>
        <AppHeader />
        <div class="flex flex-row">
            <sideBar />
            <component :is="$route.meta.componentName" :items="bookmarkList" />
        </div>
    </div>
</template>
<script>
import sideBar from "../components/account/sideBar.vue";

export default {
    components: {
        sideBar,
    },
    data() {
        return {
            bookmarkList: []
        }
    },
    created() {
        this.$appAxios.get("/bookmarks?_embed=category&_embed=user").then(bookmarkListResponse => {
            console.log(bookmarkListResponse.data);
            this.bookmarkList = bookmarkListResponse.data || [];
        })
    }
}
</script>
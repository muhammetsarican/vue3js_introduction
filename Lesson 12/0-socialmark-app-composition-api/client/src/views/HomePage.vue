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
<script setup>
import Sidebar from "@/components/home/SidebarComp";
import { ref, onMounted, onCreated, inject } from "vue";
import { useStore } from "vuex";

const store = useStore();

const socket = inject("socket");
const appAxios = inject("appAxios");

const bookmarkList = ref([]);

onMounted(() => {
  socket.on("NEW_BOOKMARK_ADDED", fetchData);
});

const fetchData = () => {
  appAxios.get("/bookmarks?_embed=category&_embed=user").then((getResponse) => {
    console.log(getResponse);
    bookmarkList.value = getResponse.data;
  });
  appAxios
    .get("/user_bookmarks?_embed=user&_embed=bookmark")
    .then((userBookmarksResponse) => {
      store.commit("setBookmarks", userBookmarksResponse.data);
    });
  appAxios
    .get("/user_likes?_embed=user&_embed=bookmark")
    .then((userLikesResponse) => {
      store.commit("setLikes", userLikesResponse.data);
    });
};
const updateBookmarkList = (categoryId) => {
  const url = categoryId
    ? `/bookmarks?_embed=category&_embed=user&categoryId=${categoryId}`
    : `/bookmarks?_embed=category&_embed=user`;
  appAxios.get(url).then((getResponse) => {
    bookmarkList.value = getResponse.data;
  });
};
fetchData();
</script>
<template>
  <div>
    <AppHeader />
    <div class="flex flex-row">
      <sideBar />
      <component :is="$route.meta.componentName" :items="bookmarkList" />
    </div>
  </div>
</template>
<script setup>
import sideBar from "../components/account/sideBar.vue";
import { ref, inject } from "vue";

const appAxios = inject("appAxios");

const bookmarkList = ref([]);

appAxios
  .get("/bookmarks?_embed=category&_embed=user")
  .then((bookmarkListResponse) => {
    console.log(bookmarkListResponse.data);
    bookmarkList.value = bookmarkListResponse.data || [];
  });
</script>